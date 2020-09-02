import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const LogoCont = styled.div`
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
  transition: opacity 0.75s;
  font-size: var(--logo);
  position: fixed;
  top: calc(var(--spacing) * 2);
  left: calc(var(--spacing) * 2.5);
  z-index: 5;

  &.menu-open {
    a {
      color: var(--charcoal);
    }
  }

  @media (min-width: 768px) {
    left: calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    left: calc(var(--spacing) * 5);
  }

  &:hover {
    opacity: 0.5;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: opacity 0.75s, color 0.75s;
  }
`

const Logo = ({ status }) => {
  return (
    <LogoCont className={status ? "menu-open" : "menu-init"}>
      <AniLink cover bg="#1d1d1d" to="/">
        Morgan Baker.
      </AniLink>
    </LogoCont>
  )
}

export default Logo
