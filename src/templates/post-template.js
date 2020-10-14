import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { MDXRenderer } from "gatsby-plugin-mdx"
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

  .main-image {
    border-bottom: 3px solid var(--primary);
    margin-top: 40px;
    margin-bottom: 40px;
  }

  pre {
    margin-top: 30px;
    margin-bottom: 30px;
    code {
      display: inline-block;
      padding: 25px 15px;
      border-radius: 4px;
      background-color: #0f0f0f;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
      width: 100%;
      overflow-x: scroll;
      border: 2px solid #1e1e1e;
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

const PostDate = styled.p`
  /* font-weight: 300; */
`
export default function PageTemplate({ data }) {
  const { title, date, author, description } = data.mdx.frontmatter
  const { body } = data.mdx
  // const img = image.childImageSharp.fluid

  return (
    <Layout>
      <PageTransition>
        <SEO title={title} description={description} />
        <Banner description={title} />

        <Container>
          <GridContainer>
            <Content>
              <h2>Written by {author}</h2>
              <PostDate>
                Published on - <time datetime={date}>{date}</time>
              </PostDate>
              <article>
                <MDXRenderer>{body}</MDXRenderer>
              </article>
            </Content>
          </GridContainer>
        </Container>
        <Container>
          <GridContainer>
            <Content>
              <Button
                text="Back to Journal Home"
                link="/journal"
                anilink={true}
              />
            </Content>
          </GridContainer>
        </Container>
      </PageTransition>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
        author
        date(formatString: "MMMM, Do, YYYY")
        description
      }
    }
  }
`
