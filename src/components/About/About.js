import React from "react"
import styled from "styled-components"
import Grid from "../Grid"

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
  grid-column: 1 / 6;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    grid-column: 3 / 6;
  }
`

const Title = styled.h2`
  column-count: 2;
  margin-top: 0;
  margin-bottom: 0;
  font-size: var(--para);
  letter-spacing: -1px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;

  a {
    text-underline-position: under;
    text-decoration-color: rgba(255, 255, 255, 0.35);
    transition: text-decoration-color 0.75s ease;

    &:hover {
      text-decoration-color: rgba(255, 255, 255, 1);
    }
  }

  @media (min-width: 1200px) {
    font-size: var(--logo);
  }
`

const About = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <Grid>
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
              ,JavaScript, Boostrap, WordPress, PHP
              I have built, and continue to maintain, a number of
              projects.
            </Title>
          </TitleArea>
        </Grid>
      </Container>
    </section>
  )
}

export default About
