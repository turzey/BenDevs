import React from "react"
import styled from "styled-components"
import Project from "../Projects/Project"
import { useStaticQuery, graphql } from "gatsby"

const getProjects = graphql`
  query {
    featuredProjects: allContentfulProjects(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          contentful_id
          name
          excerpt
          description {
            description
          }
          images {
            fluid(quality: 90, maxWidth: 1000) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          slug
        }
      }
    }
  }
`
const Container = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 600px;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
`

const ScrollCont = styled.div`
  overflow-x: scroll;
  display: flex;
  height: 100%;
  scrollbar-width: none;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    overflow-x: auto;
  }
`

const ScrollItem = styled.article`
  flex: 0 0 85%;

  @media (min-width: 768px) {
    flex-basis: 80%;
  }

  @media (min-width: 1024px) {
    flex-basis: calc(100% / 3);
  }
`

const FeaturedProjects = () => {
  // Pass the getProjects graphql query into the hook and get the data back
  const queryResponse = useStaticQuery(getProjects)

  // Extract data from the getProjects query
  // Place into variable
  const projects = queryResponse.featuredProjects.edges
  return (
    <Container>
      <ScrollCont>
        {projects.map(({ node }) => {
          return (
            <ScrollItem>
              <Project key={node.contentful_id} project={node} />
            </ScrollItem>
          )
        })}
      </ScrollCont>
    </Container>
  )
}

export default FeaturedProjects
