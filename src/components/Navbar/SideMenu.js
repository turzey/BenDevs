import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"

const getItems = graphql`
  {
    allContentfulProjects {
      edges {
        node {
          contentful_id
          name
          slug
        }
      }
    }
  }
`

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

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
    line-height: 2.5rem;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.35;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      text-transform: capitalize;
      color: #fff;
      font-size: var(--h2);
    }
  }

  hr {
    margin-top: 25px;
    margin-bottom: 25px;
    border: none;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.05);
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
  const queryResponse = useStaticQuery(getItems)

  const projectItems = queryResponse.allContentfulProjects.edges

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
          <li key="homeItem">
            <AniLink cover bg="var(--background)" to="/">
              Home
            </AniLink>
          </li>
          <hr />
          {projectItems.map(({ node }) => {
            return (
              <li key={node.contentful_id}>
                <AniLink
                  cover
                  bg="var(--background)"
                  to={`/projects/${node.slug}`}
                >
                  {node.name}
                </AniLink>
              </li>
            )
          })}
          <hr />
          <li key="aboutItem">
            <AniLink cover bg="var(--background)" to="/about">
              About
            </AniLink>
          </li>
          <li key="journalItem">
            <AniLink cover bg="var(--background)" to="/journal">
              Journal
            </AniLink>
          </li>
        </motion.ul>
      </FlexCont>
    </Cont>
  )
}

export default SideMenu
