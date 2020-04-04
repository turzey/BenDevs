import React from "react"
import styled from "styled-components"
import BgImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const getImages = graphql`
  query HeroImage {
    fluid: file(relativePath: { eq: "mac-opening.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const HeroContainer = styled.div`
  height: 100vh;

  .hero-img {
    height: 100%;
  }
`

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-rows: auto auto;
    grid-gap: 20px;
  }
`

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const TitleArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`
const ContentArea = styled.div`
  grid-column: 1 / 3;

  @media (min-width: 1200px) {
    grid-row: 2 / 3;
  }
`

const HeroTitle = styled.h1`
  font-size: var(--h1);
  margin-top: 0;
  margin-bottom: 0;
`

const HeroSubTitle = styled.h2`
  font-size: var(--h2);
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const Banner = ({ title, info, children }) => {
  const data = useStaticQuery(getImages)
  return (
    <HeroContainer>
      <BgImg className="hero-img" fluid={data.fluid.childImageSharp.fluid}>
        <Container className="section-padding">
          <GridContainer>
            <TitleArea>
              <HeroTitle>
                I'm a front-end developer & open-source contributor based in
                Inverness
              </HeroTitle>
            </TitleArea>

            <ContentArea>
              <HeroSubTitle>
                Creating applications using modern Javascript frameworks
              </HeroSubTitle>
              {children}
            </ContentArea>
          </GridContainer>
        </Container>
      </BgImg>
    </HeroContainer>
  )
}

export default Banner
