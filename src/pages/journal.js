import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Contact from "../components/Contact/Contact"
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../components/Button/Button"

const Intro = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: var(--paddingStd);
  padding-bottom: var(--paddingStd);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
`

const TitleArea = styled.div`
  grid-column: 1 / 4;

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }

  p {
    margin-top: 0;
    font-size: var(--h2);
    line-height: 1.3;
    font-weight: 300;
    margin-bottom: 2.125rem;
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
    <Layout>
      <SEO title="Development Journal" />
      <section className="section-padding--large">
        <Intro>
          <h1>Development Journal</h1>
        </Intro>
        {blogs.map(({ node }) => {
          if (node.frontmatter.slug) {
            return (
              <Grid>
                <TitleArea>
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
                </TitleArea>
              </Grid>
            )
          } else return null
        })}
      </section>
      <Contact />
    </Layout>
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
