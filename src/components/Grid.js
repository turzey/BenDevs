import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

const Grid = ({ children }) => {
  return <Container>{children}</Container>
}

export default Grid
