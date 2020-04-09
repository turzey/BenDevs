import React from "react"
import styled from "styled-components"
import Button from "../../components/Button/Button"

const TitleArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0rem;
`

const ContentArea = styled.div`
  grid-column: 1 / 4;

  p {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`

const About = props => {
  return (
    <section
      className={
        props.largePadding ? "section-padding--large" : "section-padding"
      }
    >
      <Grid>
        <TitleArea>
          <Title>
            Working with GatsbyJS, React, and WordPress to deliver clean, modern
            web applications
          </Title>
        </TitleArea>
        <ContentArea>
          <p>
            Focusing on front-end development using modern Javascript libraries
            to create engaging applications that work great across all devices.
          </p>
          <Button text="View Projects" link="/projects" />
        </ContentArea>
      </Grid>
    </section>
  )
}

export default About
