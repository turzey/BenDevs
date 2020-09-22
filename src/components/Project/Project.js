import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Anim from "../Anim"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Container = styled.section`
  padding-top: calc(var(--spacing) * 2.5);
  padding-right: ${props =>
    props.className === "align-right" ? "0" : `calc(var(--spacing) * 2.5)`};
  padding-bottom: calc(var(--spacing) * 2.5);
  padding-left: ${props =>
    props.className === "align-right" ? `calc(var(--spacing) * 2.5)` : "0"};

  @media (min-width: 768px) {
    padding-left: ${props =>
      props.className === "align-right" ? `calc(var(--spacing) * 4)` : "0"};
  }

  @media (min-width: 1200px) {
    padding-top: calc(var(--spacing) * 8);
    padding-right: ${props =>
      props.className === "align-right" ? "0" : `calc(var(--spacing) * 5)`};
    padding-bottom: calc(var(--spacing) * 8);
    padding-left: ${props =>
      props.className === "align-right" ? `calc(var(--spacing) * 5)` : "0"};
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-row: 1 / 2;
  grid-column: ${props =>
    props.className === "align-right" ? "1 / 4" : "2 / 5"};

  @media (min-width: 768px) {
    grid-column: ${props =>
      props.className === "align-right" ? "1 / 3" : "3 / 5"};
  }

  @media (min-width: 1200px) {
    grid-column: 3 / 5;
  }
`

const ProjectLink = styled(Link)`
  font-size: var(--h3);
  letter-spacing: -0.5px;
  font-weight: 700;
  margin-bottom: calc(var(--spacing) * 2);
`

const ProjectName = styled.h2`
  font-size: var(--h1);
  font-weight: 700;
  margin: 0 0 var(--spacing) 0;
  letter-spacing: -1.5px;
`

const ProjectExcerpt = styled.h3`
  font-size: var(--h3);
  line-height: 1.3;
  margin: 0 0 calc(var(--spacing) * 2) 0;
  font-weight: 300;
`

const ProjectImage = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;
  position: relative;

  &::before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: calc((3 / 4) * 100%);

    @media (min-width: 1200px) {
      padding-top: calc((9 / 16) * 100%);
    }
  }

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  .project-image {
    height: 100%;
    width: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }

  @media (min-width: 1200px) {
    grid-column: ${props =>
      props.className === "align-right" ? "3 / 7" : "1 / 5"};
  }
`

const Project = ({ item, className }) => {
  // Destructure the project prop
  // Passed in from parent component
  // Info - https://wesbos.com/destructuring-objects/
  const { name, excerpt, slug, images } = item
  let projectImg = images[0].fluid

  return (
    <Anim>
      <Container className={className}>
        <GridContainer>
          <ProjectDetails className={className}>
            <ProjectName>{name}</ProjectName>
            <ProjectExcerpt>{excerpt}</ProjectExcerpt>
            <ProjectLink to={`projects/${slug}`}>View {name}</ProjectLink>
          </ProjectDetails>
          <ProjectImage className={className}>
            <BackgroundImage fluid={projectImg} className="project-image" />
          </ProjectImage>
        </GridContainer>
      </Container>
    </Anim>
  )
}

export default Project

// Check the supplied data is in the correct format
Project.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}
