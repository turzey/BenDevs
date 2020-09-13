import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Container = styled.section`
  padding-top: calc(var(--spacing) * 2.5);
  padding-right: ${props =>
    props.className == "align-right" ? "0" : `calc(var(--spacing) * 2.5)`};
  padding-bottom: calc(var(--spacing) * 2.5);
  padding-left: ${props =>
    props.className == "align-right" ? `calc(var(--spacing) * 2.5)` : "0"};

  @media (min-width: 768px) {
    padding-left: calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding-top: calc(var(--spacing) * 8);
    padding-right: ${props =>
      props.className == "align-right" ? "0" : `calc(var(--spacing) * 5)`};
    padding-bottom: calc(var(--spacing) * 8);
    padding-left: ${props =>
      props.className == "align-right" ? `calc(var(--spacing) * 5)` : "0"};
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
  /* grid-column: 1 / 4; */
  background-color: ${props =>
    props.className == "align-right" ? "red" : "blue"};
  grid-row: 1 / 2;

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }

  @media (min-width: 1200px) {
    grid-column: 3 / 5;
  }
`

const ProjectLink = styled.a`
  font-size: var(--para);
  letter-spacing: -0.5px;
  font-weight: 700;
  margin-bottom: var(--spacing);
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
  margin: 0 0 var(--spacing) 0;
  font-weight: 300;

  @media (min-width: 768px) {
    margin-top: auto;
  }
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
    /* to clear float */
    content: "";
    display: table;
    clear: both;
  }

  .project-image {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }

  @media (min-width: 1200px) {
    grid-column: 3 / 7;
  }
`

const Project = props => {
  const projectNode = props.item.node
  let projectImg = projectNode.images[0].fluid

  return (
    <Container className={props.className}>
      <GridContainer>
        <ProjectDetails>
          <ProjectName>{projectNode.name}</ProjectName>
          <ProjectExcerpt>{projectNode.excerpt}</ProjectExcerpt>
          <ProjectLink href={`projects/${projectNode.slug}`}>
            View {projectNode.name}
          </ProjectLink>
        </ProjectDetails>
        <ProjectImage>
          <BackgroundImage fluid={projectImg} className="project-image" />
        </ProjectImage>
      </GridContainer>
    </Container>
  )
}

export default Project
