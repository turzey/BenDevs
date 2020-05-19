import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FooterArea = styled.footer`
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`

const GridContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 40px;
  }
`

const Copyright = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 0.875rem;
  width: 100%;

  a {
    text-decoration: none;
    color: var(--primary);
    opacity: 0.35;
    transition: opacity 0.5s;

    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin-bottom: 20px;
  }
`

const Privacy = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 0.875rem;

  a {
    text-decoration: none;
    color: var(--primary);
    opacity: 0.35;
    transition: opacity 0.5s;

    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    margin-top: 20px;
    text-align: right;
  }
`

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <>
      <FooterArea>
        <GridContainer className="container">
          <Copyright>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.linkedin.com/in/morgan-baker-developer-inverness/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteMetadata.author}
            </a>
          </Copyright>
          <Privacy>
            <AniLink cover bg="var(--background)" to="/privacy">
              Privacy & Your Data
            </AniLink>
          </Privacy>
        </GridContainer>
      </FooterArea>
    </>
  )
}

export default Footer
