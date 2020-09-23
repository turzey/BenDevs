import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Contact from "../components/Contact"
import styled from "styled-components"

const Intro = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: var(--paddingStd);
  padding-bottom: var(--paddingStd);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
`

const TitleArea = styled.div`
  grid-column: 1 / 4;

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }

  p {
    margin-top: 0;
    font-size: var(--h2);
    line-height: 1.3;
    font-weight: 300;
    margin-bottom: 2.125rem;
  }
`

const Privacy = () => {
  return (
    <Layout>
      <SEO title="Privacy & Your Data" />
      <section className="section-padding--large">
        <Intro>
          <h1>Privacy & Your Data</h1>
        </Intro>
        <Grid>
          <TitleArea>
            <p>
              This site uses cookies, but only for the purpose of improving the
              user experience. This site uses Google Analytics for the purpose
              of understanding user behaviour and traffic numbers. Any data
              processed by Google Analytics is anonymised.
            </p>
            <p>
              Your email address will never be sent on to a marketing company
              and will only be used to reply to correspondence.
            </p>
          </TitleArea>
        </Grid>
      </section>
      <Contact />
    </Layout>
  )
}

export default Privacy
