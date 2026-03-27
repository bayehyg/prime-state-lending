import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import BlogIndex from './BlogIndex'

export const metadata: Metadata = {
  title: 'Mortgage & Home Buying Insights | Prime State Lending',
  description:
    'Expert mortgage advice, home buying tips, and market insights from the Prime State Lending team in Mountlake Terrace, WA.',
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ])

  return (
    <>
      <Navbar />
      <BlogIndex posts={posts} categories={categories} />
      <Footer />
    </>
  )
}
