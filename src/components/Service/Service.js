import React from "react"
import styled from "styled-components"
import Grid from "../Grid/Grid"
import services from "../../constants/services"

const Rule = styled.hr`
  height: 2px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  width: calc(100% - 60px);
  max-width: 1200px;

  @media (min-width: 1200px) {
    width: calc(100% - 80px);
  }
`

const ServiceItem = styled.article`
  &:last-child {
    margin-bottom: 0;
  }

  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
    opacity: 0.2;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2 {
    font-size: var(--h2);
    margin-top: 0;
    margin-bottom: 10px;

    @media (min-width: 1200px) {
      margin-bottom: 15px;
    }
  }

  p {
    margin-bottom: 0;
  }
`

const Service = props => {
  return (
    <>
      <Rule />
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
    </>
  )
}

export default Service
