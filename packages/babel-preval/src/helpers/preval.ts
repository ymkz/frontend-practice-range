import preval from 'preval.macro'

export type Post = {
  slug: string
  title: string
  summary: string
  createdAt: string
  updatedAt: string
}

export const posts: Post[] = preval`
const fs = require('fs')
const path = require('path')
const frontmatter = require('front-matter')
const targetDir = path.join(process.cwd(), 'src/pages/posts')
const posts = fs.readdirSync(targetDir, 'utf8')
module.exports = posts.map(file => {
  const slug = file.split('.')[0]
  const postFile = path.join(targetDir, file)
  const { birthtime: createdAt, mtime: updatedAt } = fs.statSync(postFile)
  const data = fs.readFileSync(postFile, 'utf8')
  const { attributes } = frontmatter(data)
  return { ...attributes, slug, createdAt, updatedAt }
})
`
