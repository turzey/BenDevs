import React from "react"
import SEO from "../components/SEO"
import Contact from "../components/Contact"
import styled from "styled-components"
import Stack from "../components/StackList"
import Banner from "../components/Banner/Banner"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/Layout"

const Container = styled.div`
  padding: 0 calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: 0 calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: 0 calc(var(--spacing) * 5);
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

const About = () => {
  return (
    <Layout>
      <PageTransition>
        <SEO title="About the developer" />
        <Banner description="About the developer" />
        <Container>
          <GridContainer>
            <Content>
              <p>
                I'm a frontend web developer Working with WordPress/PHP,
                developing bespoke websites that focus on design and fast
                speeds. On personal projects using the Javascript library React
                through the GatsbyJS framework.
              </p>
              <p>
                Projects that I have worked on include Cleanathon, which is 
                an application that aims to mitigate the impact of illegal dumping 
                in cyprus, I am  developing several side projects that are
                listed on the Project section.
              </p>
              <p>
                To improve as a developer I am also undertaking online classes
                .Previously I completed a Higher Diploma degree in Wweb and 
                Mobile applications development.
              </p>
              
            </Content>
          </GridContainer>
        </Container>
        <Stack />
        <Contact />
      </PageTransition>
    </Layout>
  )
}

export default About
