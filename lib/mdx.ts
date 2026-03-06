import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm] as any[],
    rehypePlugins: [] as any[],
  },
}

export async function compileMDXContent(source: string) {
  try {
    const { content } = await compileMDX({
      source,
      options: mdxOptions,
      components: {},
    })

    return { content, success: true }
  } catch (error) {
    console.error('Error compiling MDX:', error)
    return { content: null, success: false, error }
  }
}
