import React from "react"
import { graphql } from "gatsby"
// import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Banner from "../components/Banner/Banner"
import Image from "gatsby-image"
import Contact from "../components/Contact"
import styled from "styled-components"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Container = styled.div`
  padding: calc(var(--spacing) * 2.5) calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 5) calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 7.5) calc(var(--spacing) * 5);
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 768px) {
    grid-template-rows: auto;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
`

const Content = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;

  p {
    font-size: var(--h3);
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: var(--spacing);

    &:first-child,
    &:last-child {
      margin-top: 0;
      margin-bottom: 0;
    }

    a {
      color: var(--primary);
      text-underline-position: under;
      text-decoration-color: rgba(255, 255, 255, 0.35);
      transition: text-decoration-color 0.75s ease, color 0.75s ease;

      &:hover {
        cursor: pointer;
        text-decoration-color: rgba(255, 255, 255, 1);
      }
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 4;
  }
`

const Details = styled.div`
  h2 {
    margin-top: 0;
    font-size: var(--h3);
    letter-spacing: -0.5px;
  }
  a {
    font-size: var(--h3);
    letter-spacing: -0.5px;
    font-weight: 700;
  }
  grid-column: 1 / 4;
  grid-row: 1 / 2;

  @media (min-width: 768px) {
    grid-column: 4 / 5;
  }

  @media (min-width: 1200px) {
    grid-column: 5 /7;
  }
`

const ImageArea = styled.section``

const projectTemplate = ({ data }) => {
  const {
    name,
    excerpt,
    richDescription: { json },
    images,
    technology,
    website,
  } = data.project

  const options = {
    // Pass in the node and dril down to the required data
    renderNode: {
      // Render the contentful rich content image
      "embedded-asset-block": node => {
        return (
          <div className="content-image">
            <img
              src={node.data.target.fields.file["en-US"].url}
              alt={node.data.target.fields.title["en-US"]}
            />
          </div>
        )
      },
    },
  }

  const [mainImage, ...projectImages] = images

  return (
    <PageTransition>
      <SEO title={name} description={excerpt} />
      <Banner description={name} />
      <Image className="hero" fluid={mainImage.fluid} />
      <Container>
        <GridContainer>
          <Content>
            {/* Render Contentful rich content here */}
            {documentToReactComponents(json, options)}
          </Content>
          <Details>
            <h2>Built using {technology}</h2>
            <a
              href={website}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          </Details>
        </GridContainer>
      </Container>
      <ImageArea>
        {projectImages.map((item, index) => {
          return (
            <Image className="gallery-item" key={index} fluid={item.fluid} />
          )
        })}
      </ImageArea>
      <Contact />
    </PageTransition>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: contentfulProjects(slug: { eq: $slug }) {
      name
      excerpt
      technology
      website
      images {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      richDescription {
        json
      }
    }
  }
`
export default projectTemplate
