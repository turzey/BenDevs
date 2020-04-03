import React from "react"
import styled from "styled-components"

const Cont = styled.div`
  /* height: 90vh; */
`

const Hero = ({ children }) => {
  return <Cont>{children}</Cont>
}

export default Hero
