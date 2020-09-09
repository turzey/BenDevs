import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const Container = styled.section`
  padding: calc(var(--spacing) * 8) 0 calc(var(--spacing) * 8)
    calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 12) 0 calc(var(--spacing) * 12)
      calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 14) 0 calc(var(--spacing) * 14)
      calc(var(--spacing) * 5);
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-column: 1 / 3;
`

const ProjectLink = styled.a`
  font-size: var(--h2);
  letter-spacing: -1px;
  font-weight: 700;
`

const ProjectName = styled.h2`
  font-size: var(--hero);
  font-weight: 700;
  margin: 0;
  letter-spacing: -1.5px;
`

const ProjectExcerpt = styled.h3`
  font-size: var(--h2);
  line-height: 1.3;
  margin-top: auto;
  font-weight: 300;
`

const ProjectImage = styled.div`
  grid-column: 3 / 7;

  img {
    width: 100%;
  }
`

const Project = props => {
  let newImg = props.item.images[0].fluid
  return (
    <Container>
      <GridContainer>
        <ProjectDetails>
          <ProjectName>{props.item.name}</ProjectName>
          <ProjectExcerpt>{props.item.excerpt}</ProjectExcerpt>
          <ProjectLink href={`projects/${props.item.slug}`}>
            View {props.item.name}
          </ProjectLink>
        </ProjectDetails>
        <ProjectImage>
          <Image fluid={newImg} />
        </ProjectImage>
      </GridContainer>
    </Container>
  )
}

export default Project
