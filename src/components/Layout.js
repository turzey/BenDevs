import React, { useState } from "react"
import SideMenu from "./Navbar/SideMenu"
import Hamburger from "./Navbar/Hamburger"
import Footer from "./Footer"
import styled, { createGlobalStyle } from "styled-components"
import CookieConsent from "react-cookie-consent"
import "typeface-inter"
import Logo from "../components/Logo/Logo"
import HeaderContact from "../components/HeaderContact/HeaderContact"

const GlobalStyle = createGlobalStyle`
:root {
  --background: #000;
  --charcoal: #111;
  --border: #313131;
  --primary: #fff;
  --inActive: #505050;
  --menuItem: 0.875rem;
  --transition: 0.3s;
  --h1: 1.5rem;
  --h1Large: 2.5rem;
  --h2: 1.2rem;
  --h3: 1.05rem;
  --para: 0.85rem;
  --paddingBorder: 1.875rem;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;
  --sansSerif: 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  --spacing: 1rem;
  --hero: 1.65rem;
  --button: 1.15rem;
  --logo: 1.1rem;

  @media(min-width:768px) {
    --h1: 2rem;
    --h1Large: 3.25rem;
    --h2: 1.35rem;
    --h3: 1.2rem;
    --para: 1rem;
    --paddingStd: 4.688rem;
    --paddingLarge: 7.813rem;
    --hero: 2.5rem;
    --button: 1.35rem;
    --logo: 1.25rem;
  }

  @media(min-width: 1200px) {
    /* --menuItem: 1.25rem; */
    --h1: 2.15rem;
    --h1Large: 3.75rem;
    --h2: 1.65rem;
    --paddingStd: 5.625rem;
    --paddingLarge: 9.375rem;
    --hero: 3.5rem;
    --button: 1.6rem;
    --logo: 1.35rem;
  }
}
* {
  box-sizing: border-box;

}  
body {
    font-family: var(--sansSerif);
    font-weight: 400;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: #fff;
    font-size: 16px;
    line-height: 1.4em;
  }

#main {
  transition: margin-left 0.75s cubic-bezier(0.445, 0.050, 0.550, 0.950);
  width: 100%;

  &.menu-open {
    margin-left: 100vw;
  }
}

.burger {
  background-color: transparent;
  border: none;
  position: fixed;
  top: calc(var(--spacing) * 2);
  right: calc(var(--spacing) * 2.5);
  z-index: 5;

  @media (min-width: 768px) {
    right:  calc(var(--spacing) * 4);
  }

  @media (min-width: 1200px) {
    right:  calc(var(--spacing) * 5);
  }
}

h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.3;
  font-weight: 700;

  @media(min-width: 1200px) {
    margin-bottom: 1.5rem;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
button {
  font-family: var(--sansSerif);
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--h1);
  letter-spacing: -0.25px;

  /* @media(min-width: 768px) {
    line-height: 1.2;
  } */
}

h2 {
  font-size: var(--h2);
  line-height: 1.4;
}


a {
  color: #fff;
  font-weight: 700;
}


a.btn,
button.btn {
    color: #fff;
    background-color: transparent;
    border: 0;
    text-decoration: none;
    padding: 0 0 10px 0;
    transition: var(--transition) color;
    font-size: var(--button);
    font-family: var(--sansSerif);
    font-weight: 700;
    position: relative;
    align-self: flex-start;
    letter-spacing: -1px;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      left: 0;
      right: 0;
      bottom: 4px;
      background-color: var(--primary);
      opacity: 0.35;
      transition: opacity 0.75s;
    }

    &:focus {
      color: var(--primary);
    }

    @media(hover: hover) {
      &:hover {
      cursor: pointer;

      &::after {
        opacity: 1;
      }
      }
    }
  }

  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .section-padding {
    padding: var(--paddingStd) var(--paddingBorder);
  }
  
  .section-padding--large {
    padding: var(--paddingLarge) var(--paddingBorder);
  }
`

const Layout = ({ children }) => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="morgan-baker-google-analytics"
      >
        This site uses cookies
      </CookieConsent>
      <div id="main" className={isOpen ? "menu-open" : "menu-closed"}>
        <SideMenu status={isOpen} />
        <button className="burger" onClick={toggleNav}>
          <Hamburger status={isOpen} />
        </button>
        <Logo status={isOpen} />
        <HeaderContact
          text="hello@morganbaker.dev"
          link="mailto:hello@morganbaker.dev"
          open={isOpen}
        />
        <HeaderContact
          text="GitHub"
          link="https://github.com/bagseye"
          direction="right"
          open={isOpen}
        />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
