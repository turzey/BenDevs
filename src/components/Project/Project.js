import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import Grid from "../Grid"
import PropTypes from "prop-types"

const Container = styled.section`
  padding-top: calc(var(--spacing) * 2.5);
  padding-right: calc(var(--spacing) * 2.5);
  padding-bottom: calc(var(--spacing) * 2.5);
  padding-left: calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding-right: calc(var(--spacing) * 4);
    padding-left: calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding-right: calc(var(--spacing) * 5);
    padding-left: calc(var(--spacing) * 5);
    padding-top: calc(var(--spacing) * 8);
    padding-bottom: calc(var(--spacing) * 8);
  }
`

const ProjectDetails = styled.div`
  border-top: 1px solid #fff;
  padding-top: var(--spacing);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-column: 1 / 6;

  @media (min-width: 768px) {
    grid-column: ${props =>
      props.className === "align-right" ? "1 / 4" : "3 / 6"};
  }

  @media (min-width: 1200px) {
    grid-row: 1 / 2;
    grid-column: ${props =>
      props.className === "align-right" ? "1 / 3" : "4 / 6"};
    border-top: 0;
    padding-top: 0;
    padding-left: ${props =>
      props.className === "align-right" ? "0" : "calc(var(--spacing) * 2)"};
    padding-right: ${props =>
      props.className === "align-right" ? "calc(var(--spacing) * 2)" : "0"};
  }
`

const ProjectLink = styled(Link)`
  font-size: var(--logo);
  letter-spacing: -0.5px;
  font-weight: 700;
  margin-bottom: calc(var(--spacing) * 2);
  text-underline-position: under;
  text-decoration-color: rgba(255, 255, 255, 0.35);
  transition: text-decoration-color 0.75s ease;

  &:hover {
    text-decoration-color: rgba(255, 255, 255, 1);
  }
`

const ProjectName = styled.h2`
  font-size: var(--hero);
  font-weight: 700;
  margin: 0 0 var(--spacing) 0;
  letter-spacing: -1.5px;
`

const ProjectExcerpt = styled.h3`
  font-size: var(--para);
  line-height: 1.3;
  margin: 0 0 calc(var(--spacing) * 2) 0;
  font-weight: 300;

  @media (min-width: 1200px) {
    font-size: var(--logo);
  }
`

const ProjectImage = styled.div`
  grid-column: 1 / 6;
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

  @media (min-width: 1200px) {
    grid-row: 1 / 2;
    grid-column: ${props =>
      props.className === "align-right" ? "3 / 6" : "1 / 4"};
  }
`

const Project = ({ item, className, prefix }) => {
  // Destructure the project prop
  // Passed in from parent component
  // Info - https://wesbos.com/destructuring-objects/
  const { name, excerpt, slug, images } = item
  let projectImg = images[0].fluid

  return (
    <>
      <Container className={className}>
        <Grid>
          <ProjectDetails className={className}>
            <ProjectName>{name}</ProjectName>
            <ProjectExcerpt>{excerpt}</ProjectExcerpt>
            <ProjectLink to={`${prefix ? "projects/" : ""}${slug}`}>
              View {name}
            </ProjectLink>
          </ProjectDetails>
          <ProjectImage className={className}>
            <BackgroundImage fluid={projectImg} className="project-image" />
          </ProjectImage>
        </Grid>
      </Container>
    </>
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
