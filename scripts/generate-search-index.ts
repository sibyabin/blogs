import fs from 'fs'
import path from 'path'
import lunr from 'lunr'
import { getSortedPosts } from '../lib/posts'

async function generateSearchIndex() {
  console.log('📚 Generating search index...')

  try {
    const posts = await getSortedPosts()

    if (posts.length === 0) {
      console.log('ℹ️  No posts found. Skipping search index generation.')
      return
    }

    // Create Lunr index
    const idx = lunr(function () {
      this.ref('slug')
      this.field('title', { boost: 10 })
      this.field('excerpt', { boost: 5 })
      this.field('content', { boost: 2 })
      this.field('tags')
      this.field('categories')

      posts.forEach(post => {
        this.add({
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content.substring(0, 1000), // Index first 1000 chars
          tags: post.tags.join(' '),
          categories: post.categories.join(' '),
        })
      })
    })

    // Save index and metadata
    const searchData = {
      index: idx,
      documents: posts.map(p => ({
        id: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        slug: p.slug,
      })),
    }

    const outputDir = path.join(process.cwd(), 'public')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    fs.writeFileSync(
      path.join(outputDir, 'search-index.json'),
      JSON.stringify(searchData, null, 2)
    )

    console.log(`✅ Search index generated successfully!`)
    console.log(`   - ${posts.length} posts indexed`)
  } catch (error) {
    console.error('❌ Error generating search index:', error)
    process.exit(1)
  }
}

generateSearchIndex()
