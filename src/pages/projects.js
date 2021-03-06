import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import { graphql } from "gatsby"
import Banner from "../components/Banner/Banner"
import Project from "../components/Project/Project"
import PageTransition from "gatsby-v2-plugin-page-transitions"

const projects = ({ data }) => {
  const project = data.projects.edges

  return (
    <Layout>
      <PageTransition>
        <SEO />
        <Banner description="Recent Projects" />
        {project.map(({ node }, i) => {
          return (
            <Project
              key={i}
              item={node}
              className={i % 2 ? "align-left" : "align-right"}
            />
          )
        })}
        <Contact />
      </PageTransition>
    </Layout>
  )
}

export const getProjects = graphql`
  query {
    projects: allContentfulProjects {
      edges {
        node {
          contentful_id
          name
          excerpt
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default projects
