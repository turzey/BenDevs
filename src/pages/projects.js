import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Contact from "../components/Contact/Contact"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Intro = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: var(--paddingStd);
  padding-bottom: var(--paddingStd);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
`
const TitleArea = styled.div`
  grid-column: 1 / 4;

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }

  p {
    margin-top: 0;
    font-size: var(--h2);
    line-height: 1.3;
    font-weight: 300;
    margin-bottom: 2.125rem;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: var(--h1);
  line-height: 1.25;

  @media (min-width: 1200px) {
    margin-bottom: 15px;
  }
`

const ImgArea = styled.div`
  grid-column: 1 / 4;

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const projects = ({ data }) => {
  const projects = data.projects.edges

  return (
    <Layout>
      <SEO />
      <section className="section-padding--large">
        <Intro>
          <h1>Projects</h1>
        </Intro>
        {projects.map(({ node }) => {
          return (
            <Grid>
              <TitleArea>
                <Title key={node.contentful_id}>{node.name}</Title>
                <p>{node.excerpt}</p>
                <Link className="btn" to={`/projects/${node.slug}`}>
                  View Project
                </Link>
              </TitleArea>
              <ImgArea>
                <Img fluid={node.images[0].fluid} />
              </ImgArea>
            </Grid>
          )
        })}
      </section>
      <Contact />
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
