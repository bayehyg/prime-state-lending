# Migrating Blog from MDX to Sanity

## Step 1 — Create Sanity project

```bash
npm create sanity@latest
```

Choose the "Blog" template. Note your `projectId` and `dataset` name.

## Step 2 — Install Sanity client

```bash
npm install @sanity/client next-sanity
```

## Step 3 — Add environment variables

Add these to your `.env.local` file:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Step 4 — Create Sanity client config

Create `lib/sanity.ts`:

```typescript
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
})
```

## Step 5 — Replace lib/blog.ts

Replace the entire file with the Sanity implementation below.
The function signatures are identical — nothing else in the codebase needs to change.

```typescript
// CONTENT SOURCE: Sanity CMS
// Migrated from MDX files. Function signatures unchanged.

import { sanityClient } from './sanity'

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

const postFields = `
  "slug": slug.current,
  title,
  excerpt,
  "content": body,
  "date": publishedAt,
  "author": author->name,
  "category": category->title,
  "coverImage": coverImage.asset->url,
  "readingTime": string(round(length(pt::text(body)) / 200)) + " min read",
  featured
`

/** Get all posts for the index page */
export async function getAllPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${postFields} }`
  )
}

/** Get a single post by slug */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] { ${postFields} }`,
    { slug }
  )
}

/** Get posts by category */
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "post" && category->title == $category] | order(publishedAt desc) { ${postFields} }`,
    { category }
  )
}

/** Get all unique categories */
export async function getAllCategories(): Promise<string[]> {
  return sanityClient.fetch(
    `array::unique(*[_type == "post"].category->title)`
  )
}

/** Get related posts (same category, excluding current) */
export async function getRelatedPosts(slug: string, limit = 2): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current != $slug && category->title == (*[_type == "post" && slug.current == $slug][0].category->title)] | order(publishedAt desc) [0...$limit] { ${postFields} }`,
    { slug, limit }
  )
}
```

## Step 6 — Sanity schema for blog posts

In your Sanity studio, ensure the `post` schema includes these fields:

- `title` (string)
- `slug` (slug, sourced from title)
- `excerpt` (text)
- `body` (block content / portable text)
- `publishedAt` (datetime)
- `author` (reference to author document)
- `category` (reference to category document)
- `coverImage` (image)
- `featured` (boolean)

## Step 7 — Import existing posts

Use Sanity's import tool or manually create posts in the Sanity Studio editor.
Your existing MDX files in `content/blog/` have frontmatter that maps directly
to the schema above.

## Notes

- The `content` field changes from raw MDX string to Sanity Portable Text.
  You will need to update the post page renderer to use `@portabletext/react`
  instead of `next-mdx-remote`.
- All other pages and components remain unchanged since they only import from `lib/blog.ts`.
