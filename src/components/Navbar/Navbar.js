import React from "react"
import styled from "styled-components"
import Logo from "../../images/mbdev-logo-white.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavBar = styled.nav`
  padding: 25px 1.875rem;
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: transparent;

  img {
    width: 95px;
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
  return (
    <>
      <NavBar>
        <AniLink cover bg="#1d1d1d" to="/">
          <img src={Logo} alt="Morgan Baker Development Logo" />
        </AniLink>
        <NavCenter>{children}</NavCenter>
      </NavBar>
    </>
  )
}

export default Navbar
