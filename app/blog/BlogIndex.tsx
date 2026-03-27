'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import type { BlogPost } from '@/lib/blog'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-md">
      {category}
    </span>
  )
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white rounded-lg border border-edge overflow-hidden grid md:grid-cols-2 gap-0">
        <div className="flex flex-col justify-center p-8 md:p-10 order-2 md:order-1">
          <CategoryBadge category={post.category} />
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-heading leading-tight group-hover:text-accent transition-colors">
            {post.title}
          </h2>
          <p className="mt-3 text-body leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-4 text-xs text-body/70">
            <span className="flex items-center gap-1">
              <Icon icon="solar:calendar-linear" className="text-sm" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Icon icon="solar:clock-circle-linear" className="text-sm" />
              {post.readingTime}
            </span>
          </div>
          <div className="mt-6">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
              Read Article
              <Icon icon="solar:arrow-right-linear" />
            </span>
          </div>
        </div>
        {post.coverImage && (
          <div className="relative h-64 md:h-auto order-1 md:order-2">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </Link>
  )
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white rounded-lg border border-edge overflow-hidden h-full flex flex-col">
        {post.coverImage && (
          <div className="relative h-48 shrink-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <CategoryBadge category={post.category} />
          <h3 className="mt-3 text-lg font-bold text-heading leading-snug group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-body leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-body/70">
              <span className="flex items-center gap-1">
                <Icon icon="solar:calendar-linear" className="text-sm" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Icon icon="solar:clock-circle-linear" className="text-sm" />
                {post.readingTime}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
              Read
              <Icon icon="solar:arrow-right-linear" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function BlogIndex({
  posts,
  categories,
}: {
  posts: BlogPost[]
  categories: string[]
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const featured = posts.find((p) => p.featured)
  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts
  const remaining = filtered.filter((p) => !p.featured || activeCategory)

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-heading">
            Mortgage &amp; Home Buying Insights
          </h1>
          <p className="mt-3 text-lg text-body max-w-2xl mx-auto">
            Expert advice from the Prime State Lending team
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === null
                ? 'bg-accent text-white'
                : 'bg-white text-body border border-edge hover:border-accent/40 hover:text-heading'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-accent text-white'
                  : 'bg-white text-body border border-edge hover:border-accent/40 hover:text-heading'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featured && !activeCategory && (
          <div className="mb-12">
            <FeaturedCard post={featured} />
          </div>
        )}

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {remaining.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-body py-12">
            No articles found in this category.
          </p>
        )}
      </div>
    </main>
  )
}
