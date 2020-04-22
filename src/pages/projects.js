import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const Project = styled.article`
  h2 {
    font-size: var(--h1);
  }
  margin-top: var(--paddingStd);
  margin-bottom: var(--paddingStd);

  p {
    font-size: var(--h2);
  }
`

const Cont = styled.div`
  padding: var(--paddingLarge) var(--paddingBorder);
`

const ProjectList = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const projects = ({ data }) => {
  const projects = data.projects.edges

  return (
    <Layout>
      <SEO />
      <Cont>
        <ProjectList>
          <h1>Projects</h1>
          {projects.map(({ node }) => {
            return (
              <Project key={node.contentful_id}>
                <h2>{node.name}</h2>
                <p>{node.excerpt}</p>
                <Link className="btn" to={`/projects/${node.slug}`}>
                  View Project
                </Link>
              </Project>
            )
          })}
        </ProjectList>
      </Cont>
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
        }
      }
    }
  }
`

export default projects
