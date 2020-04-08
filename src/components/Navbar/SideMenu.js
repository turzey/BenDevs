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

  li {
    list-style: none;
    text-transform: uppercase;
    line-height: 2.5rem;

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
  return (
    <Cont className={props.status ? "menu-open" : "menu-closed"}>
      <FlexCont>
        {menuLinks.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          )
        })}
      </FlexCont>
    </Cont>
  )
}

export default SideMenu
