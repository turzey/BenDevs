import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Contact from "../components/Contact"
import styled from "styled-components"
import Banner from "../components/Banner/Banner"
import PageTransition from "gatsby-v2-plugin-page-transitions"

const Container = styled.div`
  padding: 0 calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: 0 calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: 0 calc(var(--spacing) * 5);
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 768px) {
    grid-template-rows: auto;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
`

const Content = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;

  p {
    font-size: var(--h3);
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: var(--spacing);

    &:first-child,
    &:last-child {
      margin-top: 0;
      margin-bottom: 0;
    }

    a {
      color: var(--primary);
      text-underline-position: under;
      text-decoration-color: rgba(255, 255, 255, 0.35);
      transition: text-decoration-color 0.75s ease, color 0.75s ease;

      &:hover {
        cursor: pointer;
        text-decoration-color: rgba(255, 255, 255, 1);
      }
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 4;
  }
`

const Privacy = () => {
  return (
    <Layout>
      <PageTransition>
        <SEO title="Privacy & Your Data" />
        <Banner description="Privacy & your data" />
        <Container>
          <GridContainer>
            <Content>
              <p>
                This site uses cookies, but only for the purpose of improving
                the user experience. This site uses Google Analytics for the
                purpose of understanding user behaviour and traffic numbers. Any
                data processed by Google Analytics is anonymised.
              </p>
              <p>
                Your email address will never be sent on to a marketing company
                and will only be used to reply to correspondence.
              </p>
            </Content>
          </GridContainer>
        </Container>
        <Contact />
      </PageTransition>
    </Layout>
  )
}

export default Privacy
