import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid/Grid"
import styled from "styled-components"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import Contact from "../components/Contact"

const Error404 = styled.section`
  background-color: var(--background);
  color: #fff;
`

const Title = styled.h1`
  margin-top: 0;

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`

const SubContent = styled.div`
  p {
    font-size: var(--h2);
    margin-bottom: 2.125rem;
  }
  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`

const error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <Error404 className="section-padding--large">
        <Grid>
          <SubContent>
            <Title>Sorry.</Title>

            <p>This page has moved or no longer exists.</p>
            <p>
              Please choose another option from the menu above, or to return
              home, press the button below.
            </p>
            <Link className="btn" to="/">
              Return Home
            </Link>
          </SubContent>
        </Grid>
      </Error404>
      <Contact />
    </Layout>
  )
}

export default error
