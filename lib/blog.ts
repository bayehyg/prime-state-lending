// CONTENT SOURCE: MDX files at content/blog/*.mdx
// TO MIGRATE TO SANITY: Replace the implementation of each function below
// with Sanity GROQ queries. The function signatures must stay identical.
// See SANITY_MIGRATION.md in the project root for instructions.

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  coverImage?: string
  readingTime: string
  featured?: boolean
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

function parseMdxFile(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    content,
    date: data.date,
    author: data.author,
    category: data.category,
    coverImage: data.coverImage,
    readingTime: stats.text,
    featured: data.featured ?? false,
  }
}

/** Get all posts for the index page */
export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  const posts = files
    .map((file) => parseMdxFile(file.replace(/\.mdx$/, '')))
    .filter((post): post is BlogPost => post !== null)

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/** Get a single post by slug */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return parseMdxFile(slug)
}

/** Get posts by category */
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.category === category)
}

/** Get all unique categories */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  return [...new Set(posts.map((post) => post.category))]
}

/** Get related posts (same category, excluding current) */
export async function getRelatedPosts(slug: string, limit = 2): Promise<BlogPost[]> {
  const post = await getPostBySlug(slug)
  if (!post) return []

  const posts = await getPostsByCategory(post.category)
  return posts.filter((p) => p.slug !== slug).slice(0, limit)
}
