import React from "react"
import Grid from "../Grid/Grid"
import Product from "../Products/Product"
import Button from "../Button/Button"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  query {
    featuredProducts: allContentfulProducts(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          price
          contentful_id
          slug
          description {
            description
          }
          images {
            fluid(quality: 90, maxWidth: 768) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  height: 100vh;
`

const FlexItem = styled.div`
  flex: 0 0 90%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`

const FeaturedProducts = props => {
  const response = useStaticQuery(getProducts)
  const products = response.featuredProducts.edges

  return (
    <section>
      <FlexContainer>
        {products.map(({ node }) => {
          return (
            <FlexItem>
              <Product key={node.contentful_id} product={node} />
            </FlexItem>
          )
        })}
      </FlexContainer>
    </section>
  )
}

export default FeaturedProducts
