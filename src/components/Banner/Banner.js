import React from "react"
import styled from "styled-components"
import BgImg from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"

const getImages = graphql`
  query HeroImage {
    fluid: file(relativePath: { eq: "macbook.jpg" }) {
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
  grid-gap: 10px;
  grid-template-columns: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-rows: auto auto;
    grid-gap: 15px;
  }
`

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
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
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
  @media (min-width: 1200px) {
    grid-row: 2 / 3;
  }
`

const HeroTitle = styled.h1`
  font-size: var(--h1);
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.25;
`

const HeroSubTitle = styled.h2`
  font-size: var(--h2);
  line-height: 1.3;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 2.125rem;
  color: #fff;
`

const Banner = ({ description, subline, children }) => {
  const data = useStaticQuery(getImages)

  return (
    <HeroContainer>
      <BgImg className="hero-img" fluid={data.fluid.childImageSharp.fluid}>
        <Container className="section-padding">
          <GridContainer>
            <TitleArea>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <HeroTitle>{description}</HeroTitle>
              </motion.div>
            </TitleArea>

            <ContentArea>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.75, duration: 1 }}
              >
                <HeroSubTitle>{subline}</HeroSubTitle>
              </motion.div>
              {children}
            </ContentArea>
          </GridContainer>
        </Container>
      </BgImg>
    </HeroContainer>
  )
}

export default Banner
