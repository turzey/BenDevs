import React from "react"
import QLinks from "../constants/quickNav"
import styled from "styled-components"

const LinkIcons = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  position: fixed;
  margin: 0;
  z-index: 5;
  top: calc(var(--spacing) * 2);
  right: calc(var(--spacing) * 5);

  @media (min-width: 768px) {
    right: calc(var(--spacing) * 6.5);
  }

  @media (min-width: 1200px) {
    right: calc(var(--spacing) * 7.5);
  }
`

const LinkIcon = styled.li`
  width: 24px;
  height: 32px;
  margin: 0 calc(var(--spacing) / 3.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.75s;

  &:hover {
    opacity: 0.5;
  }

  a {
    width: 100%;
    height: 100%;
    transition: color 0.75s;
  }

  svg {
    width: 24px;
    height: 100%;

    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  &.menu-open {
    a {
      color: #000;
    }
  }

  @media (min-width: 768px) {
    width: 32px;
    margin: 0 calc(var(--spacing) / 2.5);
  }
`

const QuickLinks = props => {
  return (
    <LinkIcons>
      {QLinks.map((item, index) => (
        <LinkIcon
          key={index}
          className={props.status ? "menu-open" : "menu-closed"}
        >
          <a href={item.path}>{item.icon}</a>
        </LinkIcon>
      ))}
    </LinkIcons>
  )
}

export default QuickLinks
