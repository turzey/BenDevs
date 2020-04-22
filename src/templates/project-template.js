import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Image from "gatsby-background-image"
import Contact from "../components/Contact/Contact"
import Grid from "../components/Grid/Grid"
import styled from "styled-components"

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
  height: 100vh;
  max-height: 600px;

  .gallery-item {
    height: 100%;
    max-height: 600px;
    flex: 0 0 85%;

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
    description: { description },
    images,
    technology,
    website,
  } = data.project

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
          <Content>{description}</Content>
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
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
export default projectTemplate
