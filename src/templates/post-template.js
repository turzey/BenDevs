import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Button from "../components/Button/Button"

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

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: none;
    height: 2px;
    background: linear-gradient(to right, #0575e6, #021b79);
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
      <SEO title={title} description={description} />
      <section className="section-padding">
        <ContentArea>
          <h1>{title}</h1>
          <h2>Written by {author}</h2>
          <PostDate>
            Published on - <time datetime={date}>{date}</time>
          </PostDate>
          <hr />
          <article>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
          <hr />
          <Button text="Back to Journal Home" link="/journal" anilink={true} />
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
        description
      }
    }
  }
`
