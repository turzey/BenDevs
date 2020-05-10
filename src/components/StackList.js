import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Anim from "./Anim"

const Title = styled.h2`
  font-size: var(--h1);
`

const FlexCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  .stack-img {
    flex: 0 1 calc(50% - 20px);
    margin-bottom: 20px;
    max-width: 150px;
    display: block;
    margin-right: 20px;

    @media (min-width: 768px) {
      flex: 0 1 calc(33.333% - 40px);
      margin-right: 40px;
      max-width: 200px;
    }
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
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section
      style={{ paddingTop: 0, paddingBottom: 0 }}
      className="section-padding"
    >
      <div className="container">
        <Title>Current Tech Stack</Title>
        <Anim>
          <FlexCont>
            {imgQuery.allFile.edges.map(image => (
              <Image
                className="stack-img"
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]}
                title={image.node.base.split(".")[0]}
              />
            ))}
          </FlexCont>
        </Anim>
      </div>
    </section>
  )
}

export default StackList
