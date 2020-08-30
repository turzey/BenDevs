import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NavBar = styled.nav`
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 2.5);
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: transparent;
  left: 0;

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 5);
  }

  &.menu-open {
    a {
      color: var(--charcoal);
    }
  }

  a {
    color: #fff;
    transition: color 0.75s;
    text-decoration: none;
  }

  h2 {
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0;
    transition: opacity 0.75s;

    &:hover {
      opacity: 0.5;
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

const Navbar = ({ children, status }) => {
  return (
    <>
      <NavBar className={status ? "menu-open" : "menu-init"}>
        <AniLink cover bg="#1d1d1d" to="/">
          <h2>Morgan Baker.</h2>
        </AniLink>
        <NavCenter>{children}</NavCenter>
      </NavBar>
    </>
  )
}

export default Navbar
