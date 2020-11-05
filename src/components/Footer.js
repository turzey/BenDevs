import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Grid from "../components/Grid"
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
    transition: color 0.75s ease;

    &:hover {
      color: #fff;
    }
  }
`

const Copyright = styled.div`
  grid-column: 1 / 3;
  margin-bottom: 0;
  font-weight: 700;
  letter-spacing: -1px;
  color: #777;

  a {
    font-size: var(--para);
    color: #777;
    text-decoration: none;
    transition: color 0.75s ease;

    &:hover {
      color: #fff;
    }
  }
`

const Privacy = styled.div`
  grid-column: 3 / 6;
  letter-spacing: -1px;
  text-align: right;

  a {
    text-decoration: none;
    color: #777;
    transition: color 0.75s ease;
    font-size: var(--para);
    font-weight: 700;

    &:hover {
      color: #fff;
    }
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
        <Grid>
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
              href="https://www.linkedin.com/in/beni-dibatia-0ab7a7133/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteMetadata.author}
            </a>
          </Copyright>
          <Privacy>
            <Link to="/privacy">Privacy & Your Data</Link>
          </Privacy>
        </Grid>
      </Container>
    </>
  )
}

export default Footer
