import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import socialLinks from "../constants/socials"

const Container = styled.div`
  padding: calc(var(--spacing) * 2.5) calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 5) calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 7.5) calc(var(--spacing) * 5);
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  @media (min-width: 768px) {
    grid-template-rows: auto;
  }
`

const Socials = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`

const Social = styled.li`
  font-weight: 700;
  letter-spacing: -1px;
  margin-right: var(--spacing);

  a {
    color: #777;
    text-decoration: none;
    transition: color 0.75s;

    &:hover {
      color: #fff;
    }
  }
`

const Copyright = styled.div`
  grid-column: 1 / 5;
  margin-bottom: 0.25rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: #777;

  a {
    font-size: var(--para);
    color: #777;
    text-decoration: none;
    transition: color 0.75s;

    &:hover {
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    grid-column: 1 / 3;
    margin-bottom: 0;
  }
`

const Privacy = styled.div`
  grid-column: 1 / 5;
  letter-spacing: -1px;

  a {
    text-decoration: none;
    color: #777;
    transition: color 0.75s;
    font-size: var(--para);
    font-weight: 700;

    &:hover {
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    grid-column: 3 / 6;
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
      <Container>
        <GridContainer>
          <Socials>
            {socialLinks.map(item => (
              <Social>
                <a href={item.url} target="_blank" rel="noreferrer noopener">
                  {item.title}
                </a>
              </Social>
            ))}
          </Socials>
          <Copyright>
            &copy; {new Date().getFullYear()}{" "}
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
      </Container>
    </>
  )
}

export default Footer
