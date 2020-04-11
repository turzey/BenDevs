import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const NavBar = styled.nav`
  padding: 25px 1.875rem;
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: transparent;
`

const NavLogo = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  width: 60%;
  flex-shrink: 0;
  z-index: 2;

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    @media (hover: hover) {
      &:hover {
        color: var(--primary);
      }
    }
  }
`

const NavCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

const Navbar = ({ children }) => {
  // const [isOpen, setNav] = useState(false)
  // const toggleNav = () => {
  //   setNav(isOpen => !isOpen)
  // }

  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar>
        <NavCenter>
          <NavLogo>
            <AniLink cover bg="var(--background)" to="/">
              {siteMetadata.title}
            </AniLink>
          </NavLogo>
          {children}
        </NavCenter>
      </NavBar>
    </>
  )
}

export default Navbar
