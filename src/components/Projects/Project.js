import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import propTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../Button/Button"

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

const Project = ({ project }) => {
  // Pass the getImage graphql query into the hook and get the data back
  const queryResponse = useStaticQuery(getImage)

  // Extract data from the getImage query
  // Place into variable
  const img = queryResponse.file.childImageSharp.fluid

  // Destructure the project prop
  // Passed in from parent component
  // Info - https://wesbos.com/destructuring-objects/
  const { name, excerpt, slug, images } = project

  // If there are images, takes the first one and use it as the background
  // If no images, use the placeholder
  let mainImage = images ? images[0].fluid : img

  return (
    <BackgroundImage Tag="div" fluid={mainImage} alt="Project Preview Image">
      <Content>
        <h2>{name || "Custom Project"}</h2>
        <p>
          {excerpt ||
            "Custom project built using modern development techniques"}
        </p>
        <Button text="View Project" link={`/projects/${slug}`} anilink={true} />
      </Content>
    </BackgroundImage>
  )
}

// Check the supplied data is in the correct format
Project.propTypes = {
  project: propTypes.shape({
    name: propTypes.string.isRequired,
    excerpt: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

const StyledProject = styled(Project)`
  width: 100%;
  height: 100%;
  background-size: cover;
`

const Content = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px 1.875rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );

  h2 {
    font-size: var(--h1);
    margin-bottom: 10px;

    @media (min-width: 1200px) {
      margin-bottom: 15px;
    }
  }

  p {
    margin-top: 0;
  }
`

export default StyledProject
