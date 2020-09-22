import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import menuItems from "../../constants/links"

const Cont = styled.div`
  height: 100%;
  width: 100vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: transform 0.75s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  background-color: #fff;
  transform: translateX(-100vw);

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
    transition: opacity 0.75s;
    font-weight: 700;
    letter-spacing: -1px;
    /* font-size: var(--h1Large); */
    font-size: var(--hero);
    line-height: var(--hero);
    margin-bottom: calc(var(--spacing) / 2);

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      text-transform: capitalize;
      color: var(--charcoal);
    }

    @media (max-width: 768px) {
      margin-bottom: var(--spacing);
    }
  }

  &.menu-open {
    /* width: 100vw; */
    transform: translateX(0);
  }
`

const FlexCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 2.5);

  @media (min-width: 768px) {
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 5);
  }
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
        delay: 0.75,
        duration: 0.75,
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
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <AniLink cover bg="var(--background)" to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </motion.ul>
      </FlexCont>
    </Cont>
  )
}

export default SideMenu
