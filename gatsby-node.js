const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const taxonomy = path.resolve('./src/templates/taxonomy.js')

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                  contentful_id
                }
              }
            }
            allContentfulCategory {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/${post.node.slug}-${post.node.contentful_id}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const categories = result.data.allContentfulCategory.edges
        categories.forEach(cat => {
          createPage({
            path: `/category/${cat.node.slug}`,
            component: taxonomy,
            context: {
              slug: cat.node.slug
            }
          })
        })
      })
    )
  })
}
