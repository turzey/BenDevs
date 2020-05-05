import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const Title = styled.h2`
  font-size: var(--h1);
`

const FlexCont = styled.div`
  .stack-img {
    margin-bottom: 50px;
    max-width: 180px;
    display: block;
  }
`

const StackList = () => {
  const imgQuery = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "stack" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="section-padding">
      <div className="container">
        <Title>Current Tech Stack</Title>
        <FlexCont>
          {imgQuery.allFile.edges.map(image => (
            <Image
              className="stack-img"
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
          ))}
        </FlexCont>
      </div>
    </section>
  )
}

export default StackList
