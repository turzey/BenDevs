import React from "react"
import styled from "styled-components"
import Anim from "./Anim"

const Container = styled.div`
  padding: calc(var(--spacing) * 2.5) calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 5) calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 7.5) calc(var(--spacing) * 5);
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
`

const TitleArea = styled.h2`
  grid-column: 1 / 3;
  font-size: var(--h1);
  letter-spacing: -1.5px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const ContactLink = styled.a`
  grid-column: 1 / 3;
  font-size: var(--h1);
  letter-spacing: -1.5px;
`

const Contact = () => {
  return (
    <Anim>
      <Container>
        <GridContainer>
          <TitleArea>All enquiries</TitleArea>
          <ContactLink href="mailto:hello@morganbaker.dev">
            hello@morganbaker.dev
          </ContactLink>
        </GridContainer>
      </Container>
    </Anim>
  )
}

export default Contact
