import React from "react"
import SEO from "../components/SEO"
// import Layout from "../components/Layout"
import Contact from "../components/Contact"
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../components/Button/Button"
import Banner from "../components/Banner/Banner"
import PageTransition from "gatsby-v2-plugin-page-transitions"

const Container = styled.div`
  padding: 0 calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: 0 calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: 0 calc(var(--spacing) * 5);
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 768px) {
    grid-template-rows: auto;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
`

const Content = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;

  p {
    font-size: var(--h3);
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: var(--spacing);

    &:first-child,
    &:last-child {
      margin-top: 0;
      margin-bottom: 0;
    }

    a {
      color: var(--primary);
      text-underline-position: under;
      text-decoration-color: rgba(255, 255, 255, 0.35);
      transition: text-decoration-color 0.75s ease, color 0.75s ease;

      &:hover {
        cursor: pointer;
        text-decoration-color: rgba(255, 255, 255, 1);
      }
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 4;
  }
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: var(--h1);
  line-height: 1.25;

  @media (min-width: 1200px) {
    margin-bottom: 15px;
  }
`

const blog = ({ data }) => {
  const blogs = data.allMdx.edges

  return (
    <PageTransition>
      <SEO title="Development Journal" />
      <Banner description="Random ramblings" />
      <Container>
        <GridContainer>
          {blogs.map(({ node }) => {
            if (node.frontmatter.slug) {
              return (
                <>
                  <Content>
                    <Title key={node.id}>{node.frontmatter.title}</Title>
                    <p>
                      <date datetime={node.frontmatter.date}>
                        {node.frontmatter.date}
                      </date>
                    </p>
                    <Button
                      text="Read Article"
                      link={`/journal/${node.frontmatter.slug}`}
                      anilink={true}
                    />
                  </Content>
                </>
              )
            } else return null
          })}
        </GridContainer>
      </Container>
      <Contact />
    </PageTransition>
  )
}

export const getBlogs = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM, Do, YYYY")
            slug
          }
          id
        }
      }
    }
  }
`

export default blog
