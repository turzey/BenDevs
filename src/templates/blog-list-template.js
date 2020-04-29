import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Contact from "../components/Contact/Contact"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import SEO from "../components/SEO"

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

const ImgArea = styled.div`
  grid-column: 1 / 4;

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Pagination = styled.div`
  grid-column: 1 / 4;
  text-align: right;

  .btn {
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }

    &.btn-active {
      color: var(--primary);

      &:after {
        display: none;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

const Blog = props => {
  // Destructure Page numbers
  const { currentPage, numPages } = props.pageContext

  // Set first page to 1
  const isFirst = currentPage === 1
  // Set last page to total number of pages
  const isLast = currentPage === numPages

  // Previous page set to /blogs if currentPage minus 1 is equal to 1
  // else
  // /blogs/previous page
  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`

  // Next page equal to current plus 1
  const nextPage = `/blogs/${currentPage + 1}`
  const { data } = props

  return (
    <Layout>
      <SEO title="Blogs" />
      <section className="section-padding--large">
        <Intro>
          <h1>Journal</h1>
        </Intro>

        {/* Render all available blog posts */}
        {data.post.edges.map(({ node }) => {
          return (
            <Grid>
              <TitleArea>
                <Title key={node.contentful_id}>{node.title}</Title>
                <p>{node.introduction}</p>
                <Link className="btn" to={`/blogs/${node.slug}`}>
                  Read Article
                </Link>
              </TitleArea>
            </Grid>
          )
        })}

        <Pagination>
          {!isFirst && (
            <AniLink className="btn" cover bg="var(--background)" to={prevPage}>
              Prev
            </AniLink>
          )}

          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                key={i}
                cover
                bg="var(--background)"
                to={`/blogs/${i === 0 ? "" : i + 1}`}
                className={i + 1 === currentPage ? "btn btn-active" : "btn"}
              >
                {i + 1}
              </AniLink>
            )
          })}
          {!isLast && (
            <AniLink className="btn" cover bg="var(--background)" to={nextPage}>
              Next
            </AniLink>
          )}
        </Pagination>
      </section>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    post: allContentfulPosts(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          postId: contentful_id
          published(formatString: "MMMM Do, YYYY")
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
export default Blog
