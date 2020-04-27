import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Contact from "../components/Contact/Contact"
import styled from "styled-components"

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

const About = () => {
  return (
    <Layout>
      <SEO title="About the developer" />
      <section className="section-padding--large">
        <Intro>
          <h1>About the developer</h1>
        </Intro>
        <Grid>
          <TitleArea>
            <p>
              A frontend web developer with 5+years of agency-based employment.
              Working in a professional capacity with WordPress/PHP and on
              personal projects using the Javascript library React through the
              GatsbyJS framework.
            </p>
            <p>
              Professional projects that I have worked on include major timber
              suppliers and luxury accommodation providers across Scotland. At
              home, I have developed and maintain several themes that are listed
              on the Gatsby Starter Library under an open-source licence.
            </p>
            <p>
              To improve as a developer I am also undertaking a BSc in Computing
              & IT(Software) through the Open University, having completed 90
              credits of a 360 credit degree. Overall, it will give me a more
              complete understanding of OOP, Python, Java, as well as
              mathematics. Previously I completed an HND in Interactive Media
              through the UHI in Elgin which covered elements of design and
              development.
            </p>
            <p>
              I moved into web development after leaving the Royal Navy in 2009
              after serving 5 years as an aircraft mechanic where I spent time
              at RNAS Culdrose and part of the ship's company of HMS Ocean,
              travelling to the Arctic Circle, Caribbean, and central Africa.
            </p>
          </TitleArea>
        </Grid>
      </section>
      <Contact />
    </Layout>
  )
}

export default About
