import React from "react"
import styled from "styled-components"
import Grid from "../Grid/Grid"
import services from "../../constants/services"

const ServiceItem = styled.article`
  &:last-child {
    margin-bottom: 0;
  }

  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`

const Service = props => {
  return (
    <section
      className={
        props.largePadding
          ? "section-padding section-padding--large"
          : "section-padding"
      }
    >
      <Grid>
        {services.map((item, index) => {
          return (
            <ServiceItem key={index}>
              {item.logo}
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </ServiceItem>
          )
        })}
      </Grid>
    </section>
  )
}

export default Service
