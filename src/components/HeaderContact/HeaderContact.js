import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

const Contact = styled.div`
  position: fixed;
  bottom: calc(var(--spacing) * 2);
  z-index: 5;
  transition: opacity 0.75s;
  ${props =>
    props.right
      ? "right: calc(var(--spacing) * 2.5);"
      : "left: calc(var(--spacing) * 2.5);"}

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: -1px;
    transition: color 0.75s;
    display: flex;
    font-size: var(--menuItem);

    @media (min-width: 375px) {
      font-size: var(--para);
    }
  }

  &.menu-open {
    a {
      color: var(--charcoal);
    }
  }

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    span {
      display: inline-block;
    }

    ${props =>
      props.right
        ? "right: calc(var(--spacing) * 4);"
        : "left: calc(var(--spacing) * 4);"}
  }

  @media (min-width: 1200px) {
    ${props =>
      props.right
        ? "right: calc(var(--spacing) * 5);"
        : "left: calc(var(--spacing) * 5);"}
  }
`

const HeaderContact = ({ text, link, direction, open }) => {
  return (
    <Contact right={direction} className={open ? "menu-open" : "menu-closed"}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.25, duration: 0.75 }}
      >
        <Link to={link}>{text}</Link>
      </motion.div>
    </Contact>
  )
}

export default HeaderContact
