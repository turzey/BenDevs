import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    file(relativePath: { eq: "yellow-metal-design-decoration.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ProductItem = styled.article`
  width: 100%;
`

const ProductContent = styled.div`
  padding: 2.5rem 1.25rem;

  &:last-child {
    margin-bottom: 0;
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

const ProductImg = styled.div`
  /* height: 100vh; */
`

const Product = ({ product }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, price, slug, images } = product

  let mainImage = images ? images[0].fluid : img

  return (
    <ProductItem>
      <BackgroundImage fluid={mainImage} alt="single Product">
        <ProductImg />
        <ProductContent>
          <h2>{name || "Name not listed"}</h2>
          <p>£ {price || "Call"}</p>
          <AniLink className="btn" cover bg="#1d1d1d" to={`/products/${slug}`}>
            View Product
          </AniLink>
        </ProductContent>
      </BackgroundImage>
    </ProductItem>
  )
}

Product.propTypes = {
  product: propTypes.shape({
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

export default Product
