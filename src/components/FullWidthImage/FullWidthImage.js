import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Content = styled.aside`
  padding: 0 calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: 0 calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: 0 calc(var(--spacing) * 5);
  }
`

const FullWidthImg = () => {
  const queryResponse = useStaticQuery(getImage)
  return (
    <Content>
      <Img fluid={queryResponse.fluid.childImageSharp.fluid} />
    </Content>
  )
}

export default FullWidthImg

const getImage = graphql`
  query {
    fluid: file(relativePath: { eq: "bonneville-bag-mockup.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
