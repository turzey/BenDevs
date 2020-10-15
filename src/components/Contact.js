import React from "react"
import styled from "styled-components"
import Grid from "../components/Grid"

const Container = styled.div`
  padding: calc(var(--spacing) * 2.5) calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 5) calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 7.5) calc(var(--spacing) * 5);
  }
`

const TitleArea = styled.h2`
  grid-column: 1 / 6;
  font-size: var(--hero);
  letter-spacing: -1.5px;

  @media (min-width: 768px) {
    grid-column: 1 / 5;
    margin-top: 0;
  }
`

const ContactLink = styled.a`
  grid-column: 1 / 6;
  font-size: var(--hero);
  letter-spacing: -1.5px;
  text-underline-position: under;
  text-decoration-color: rgba(255, 255, 255, 0.35);
  transition: text-decoration-color 0.75s ease;

  &:hover {
    text-decoration-color: rgba(255, 255, 255, 1);
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`

const Contact = () => {
  return (
    <>
      <Container>
        <Grid>
          <TitleArea>All enquiries</TitleArea>
          <ContactLink href="mailto:hello@morganbaker.dev">
            hello@morganbaker.dev
          </ContactLink>
        </Grid>
      </Container>
    </>
  )
}

export default Contact
