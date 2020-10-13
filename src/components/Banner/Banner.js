import React from "react"
import styled from "styled-components"

const HeroContainer = styled.div``

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
  padding: calc(var(--spacing) * 8) calc(var(--spacing) * 2.5)
    calc(var(--spacing) * 4) calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 12) calc(var(--spacing) * 4)
      calc(var(--spacing) * 9) calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 14) calc(var(--spacing) * 5)
      calc(var(--spacing) * 11) calc(var(--spacing) * 5);
  }
`

const TitleArea = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  z-index: 2;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    grid-column: 1 / 4;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 5;
  }

  @media (min-width: 1800px) {
    grid-column: 1 / 4;
  }
`

const HeroTitle = styled.h1`
  font-size: var(--hero);
  font-weight: 700;
  margin: 0;
  letter-spacing: -1.5px;
`

const Banner = ({ description }) => {
  return (
    <HeroContainer>
      <Container>
        <GridContainer>
          <TitleArea>
            <HeroTitle>{description}</HeroTitle>
          </TitleArea>
        </GridContainer>
      </Container>
    </HeroContainer>
  )
}

export default Banner
