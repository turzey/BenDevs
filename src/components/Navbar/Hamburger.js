import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  width: 32px;
  height: 23px;
  border: none;
  transition: opacity 0.75s;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  span {
    position: absolute;
    transition: left 0.25s, opacity 0.75s ease, background-color 0.75s ease;
    background-color: var(--primary);
    width: 100%;
    height: 2px;
    display: block;
    margin: 0;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      left: 0;
      right: 0;
    }

    &:nth-child(1),
    &:nth-child(3) {
      transition: top 0.25s, bottom 0.25s, transform 0.25s;
    }

    &:nth-child(1) {
      top: 3px;
    }

    &:nth-child(2) {
      top: 11px;
      transform: translateY(-50%);
    }

    &:nth-child(3) {
      bottom: 3px;
    }
  }

  &.menu-open {
    span {
      background-color: var(--charcoal);
      &:nth-child(1) {
        top: 10px;
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        left: 20px;
        opacity: 0;
      }

      &:nth-child(3) {
        bottom: 11px;
        transform: rotate(-45deg);
      }
    }
  }
`

const Hamburger = props => {
  return (
    <>
      <Container className={props.status ? "menu-open" : "menu-init"}>
        <span></span>
        <span></span>
        <span></span>
      </Container>
    </>
  )
}

export default Hamburger
