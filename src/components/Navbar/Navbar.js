import React from "react"
import styled from "styled-components"

const NavBar = styled.nav`
  padding: 25px 1.875rem;
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: transparent;
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
        <NavCenter>{children}</NavCenter>
      </NavBar>
    </>
  )
}

export default Navbar
