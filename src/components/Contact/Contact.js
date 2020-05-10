import React, { useEffect } from "react"
import Grid from "../Grid/Grid"
import styled from "styled-components"
import Anim from "../Anim"

const Section = styled.section``

const SubContent = styled.div`
  a {
    font-size: var(--h1);
    font-weight: 500;
    text-decoration: none;
    position: relative;
    color: #fff;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--primary);
      opacity: 0.35;
      transition: opacity 0.5s;
    }

    @media (hover: hover) {
      &:hover {
        cursor: pointer;

        &::after {
          opacity: 1;
        }
      }
    }
  }
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }

  p {
    margin-bottom: 2.125rem;
  }
`

const SubTitle = styled.h2`
  font-size: var(--h1);
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const Contact = () => {
  return (
    <Section className="section-padding--large">
      <Anim>
        <Grid>
          <SubContent>
            <SubTitle>All enquiries</SubTitle>
            <a href="mailto:hello@morganbaker.dev">hello@morganbaker.dev</a>
          </SubContent>
        </Grid>
      </Anim>
    </Section>
  )
}

export default Contact
