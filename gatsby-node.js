const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      projects: allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  data.projects.edges.forEach(({ node }) => {
    createPage({
      path: `projects/${node.slug}`,
      component: path.resolve("src/templates/project-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `journal/${node.frontmatter.slug}`,
      component: path.resolve("src/templates/post-template.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
