import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoCont = styled.div`
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
  transition: opacity 0.75s ease;
  font-size: var(--logo);
  position: fixed;
  top: calc(var(--spacing) * 2);
  left: calc(var(--spacing) * 2.5);
  z-index: 5;

  .grey {
    color: #777;
  }

  &.menu-open {
    a {
      color: var(--charcoal);
    }
  }

  @media (max-width: 374px) {
    .hide-iphone-5 {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .hide-mobile {
      display: none;
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
      <Link to="/">
        Morgan Baker.
        <span className="grey hide-iphone-5">
          {" "}
          Dev<span className="hide-mobile">eloper</span>
        </span>
      </Link>
    </LogoCont>
  )
}

export default Logo
