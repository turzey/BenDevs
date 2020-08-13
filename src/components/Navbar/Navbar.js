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

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    width: calc(100% - (1.875rem * 2));
    height: 2px;
    background-color: rgba(255, 255, 255, 0.35);
  }

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
