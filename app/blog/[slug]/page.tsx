import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Prime State Lending`,
    description: post.excerpt,
    openGraph: {
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const related = await getRelatedPosts(slug, 2)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Cover Image */}
      {post.coverImage && (
        <div className="relative w-full h-72 md:h-[480px]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Category + Reading Time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-md">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-body/70">
            <Icon icon="solar:clock-circle-linear" className="text-sm" />
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight">
          {post.title}
        </h1>

        {/* Date + Author */}
        <div className="mt-4 flex items-center gap-3 text-sm text-body/70">
          <span className="flex items-center gap-1">
            <Icon icon="solar:calendar-linear" className="text-base" />
            {formatDate(post.date)}
          </span>
          <span className="w-1 h-1 rounded-full bg-body/30" />
          <span>{post.author}</span>
        </div>

        {/* Divider */}
        <hr className="my-8 border-edge" />

        {/* Article Body */}
        <div className="prose prose-lg max-w-none prose-headings:text-heading prose-headings:font-bold prose-p:text-body prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-heading prose-li:text-body">
          <MDXRemote source={post.content} />
        </div>

        {/* Divider */}
        <hr className="my-12 border-edge" />

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-heading mb-6">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block bg-white rounded-lg border border-edge overflow-hidden"
                >
                  {r.coverImage && (
                    <div className="relative h-40">
                      <Image
                        src={r.coverImage}
                        alt={r.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {r.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-heading leading-snug group-hover:text-accent transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-body/70 line-clamp-2">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="bg-white rounded-lg border border-edge p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold text-heading">
            Ready to take the next step?
          </h2>
          <p className="mt-2 text-body">
            Talk to a Prime State Lending loan officer today.
          </p>
          <Link
            href="/home-purchase"
            className="mt-6 inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent-hover transition-colors"
          >
            Get Started
            <Icon icon="solar:arrow-right-linear" />
          </Link>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
