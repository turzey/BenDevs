import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const HeroContainer = styled.div`
  height: 100vh;

  .hero-img {
    height: 100%;
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;

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
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 5);
  }
`

const TitleArea = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  z-index: 2;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`

const HeroTitle = styled.h1`
  font-size: var(--hero);
  font-weight: 700;
  margin: 0;
  line-height: 1.05;
  letter-spacing: -1.5px;
`

const ImgArea = styled.div`
  grid-column: 2 / 5;
  grid-row: 1 / 2;
  z-index: 1;

  img {
    background-color: red;
    height: 45vh;
    width: 100%;
  }
`

const Banner = ({ description }) => {
  return (
    <HeroContainer>
      <Container>
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
          <ImgArea>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 1 }}
            >
              <img />
            </motion.div>
          </ImgArea>
        </GridContainer>
      </Container>
    </HeroContainer>
  )
}

export default Banner
