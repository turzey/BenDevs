import React from "react"
import styled from "styled-components"
import Grid from "../Grid/Grid"
import Button from "../../components/Button/Button"

const TitleArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const ContentArea = styled.div`
  grid-column: 1/4;
  @media (min-width: 768px) {
    grid-column: 2 / 3;

    p {
      margin-top: 0;
    }
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
          <Button text="View Products" link="/products" />
        </TitleArea>
        <ContentArea>
          <p>
            Focusing on front-end development using modern Javascript libraries
            to create engaging applications that work great across all devices.
          </p>
        </ContentArea>
      </Grid>
    </section>
  )
}

export default About
