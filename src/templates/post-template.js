import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
// import Grid from "../components/Grid/Grid"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { MDXRenderer } from "gatsby-plugin-mdx"

const ContentArea = styled.div`
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    margin-top: 0;
    text-transform: capitalize;
  }

  .main-image {
    border-bottom: 3px solid var(--primary);
    margin-top: 40px;
    margin-bottom: 40px;
  }

  p {
    code {
      display: inline-block;
      margin: 10px 1px;
      padding: 3px 8px;
      border-radius: 2px;
      background-color: #333;
    }
  }
`

export default function PageTemplate({ data }) {
  const { title, date, author } = data.mdx.frontmatter
  const { body } = data.mdx
  return (
    <Layout>
      <SEO title={title} />
      <section className="section-padding">
        <ContentArea>
          <AniLink className="btn" cover bg="var(--background)" to="/blogs">
            Back to Blogs
          </AniLink>
          <h1>{title}</h1>
          <h2>Written by {author}</h2>
          <p>Published on - {date}</p>
          <article>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
        </ContentArea>
      </section>
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
      }
    }
  }
`
