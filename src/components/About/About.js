import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: calc(var(--spacing) * 2.5) calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 5) calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 7.5) calc(var(--spacing) * 5);
  }
`

const TitleArea = styled.div`
  grid-column: 2 / 5;
  grid-row: 1 / 2;
  z-index: 2;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    grid-column: 3 / 5;
  }

  @media (min-width: 1200px) {
    grid-column: 4 / 7;
  }

  @media (min-width: 1800px) {
    grid-column: 4 / 7;
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: var(--h2);
  letter-spacing: -1px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
`

const About = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <GridContainer>
          <TitleArea>
            <Title>
              Using{" "}
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GatsbyJS
              </a>{" "}
              I have built, and continue to maintain, a number of open source
              projects that are listed within their official starters library
            </Title>
          </TitleArea>
        </GridContainer>
      </Container>
    </section>
  )
}

export default About
