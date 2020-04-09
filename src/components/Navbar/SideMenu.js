import React from "react"
import styled from "styled-components"
import menuLinks from "../../constants/links"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Cont = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  background-color: #1a1a1a;

  li {
    list-style: none;
    text-transform: uppercase;
    line-height: 2.5rem;
    font-family: "Jura", sans-serif;

    a {
      text-decoration: none;
      color: var(--primary);
    }
  }

  &.menu-open {
    width: 250px;
  }
`

const FlexCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: var(--paddingBorder);
`

const SideMenu = props => {
  const variants = {
    inactive: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.2,
      },
    },
    active: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  }

  return (
    <Cont className={props.status ? "menu-open" : "menu-closed"}>
      <FlexCont>
        <motion.ul
          variants={variants}
          animate={!props.status ? "inactive" : "active"}
        >
          {menuLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            )
          })}
        </motion.ul>
      </FlexCont>
    </Cont>
  )
}

export default SideMenu
