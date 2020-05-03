import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Image from "gatsby-image"
import Contact from "../components/Contact/Contact"
import Grid from "../components/Grid/Grid"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Header = styled.header`
  height: 50vh;

  .hero {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: var(--paddingBorder);
    padding-right: var(--paddingBorder);

    h1 {
      font-size: var(--h1);
    }
  }
`

const HeroContent = styled.div`
  grid-column: 1 / 4;

  @media (min-width: 1200px) {
    grid-column: 1 / 3;
  }
`

const Content = styled.div`
  grid-column: 1 / 4;

  p {
    &:first-child,
    &:last-child {
      margin-top: 0;
      margin-bottom: 0;
    }
    &:nth-child(2) {
      margin-top: 0;
    }
    &:nth-last-child(2) {
      margin-bottom: 0;
    }
    a {
      color: var(--primary);
      text-decoration-style: dashed;

      &:hover {
        text-decoration-style: solid;
      }
    }
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 3;
  }
`

const Details = styled.div`
  h2 {
    margin-top: 0;
  }
  a {
    font-size: var(--h2);
  }
  grid-column: 1 / 4;
  @media (min-width: 1200px) {
    grid-column: 3 / 4;
  }
`

const ImageArea = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 1800px;

  .gallery-item {
    flex: 0 0 85%;

    &::before {
      content: "";
      display: block;
      padding-top: 25%;
    }

    @media (min-width: 768px) {
      flex-basis: 80%;
    }

    @media (min-width: 1024px) {
      flex-basis: calc(100% / 3);
    }
  }
`

const Scroll = styled.div`
  height: 100%;
  overflow-x: scroll;
  display: flex;
  flex-wrap: nowrap;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    overflow-x: auto;
    flex-wrap: wrap;
  }
`

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
    <Layout>
      <SEO title={name} description={excerpt} />
      <Header>
        <Image className="hero" fluid={mainImage.fluid}>
          <Grid>
            <HeroContent>
              <h1>{name}</h1>
              <h2>{excerpt}</h2>
            </HeroContent>
          </Grid>
        </Image>
      </Header>
      <section className="section-padding--large">
        <Grid>
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
        </Grid>
      </section>
      <ImageArea>
        <Scroll>
          {projectImages.map((item, index) => {
            return (
              <Image className="gallery-item" key={index} fluid={item.fluid} />
            )
          })}
        </Scroll>
      </ImageArea>
      <Contact />
    </Layout>
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
        fluid {
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
