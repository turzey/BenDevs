import React, { useState } from "react"
import Navbar from "./Navbar/Navbar"
import SideMenu from "./Navbar/SideMenu"
import Hamburger from "./Navbar/Hamburger"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import CookieConsent from "react-cookie-consent"
import "typeface-heebo"

const GlobalStyle = createGlobalStyle`
:root {
  --background: #000;
  --border: #313131;
  --primary: #fff;
  --inActive: #505050;
  --menuItem: 0.875rem;
  --transition: 0.3s;
  --h1: 1.5rem;
  --h2: 1.1rem;
  --paddingBorder: 1.875rem;
  --paddingStd: 3.125rem;
  --paddingLarge: 4.688rem;

  @media(min-width:768px) {
    --h1: 2rem;
    --h2: 1.25rem;
    --paddingStd: 4.688rem;
    --paddingLarge: 7.813rem;
  }

  @media(min-width: 1200px) {
    /* --menuItem: 1.25rem; */
    --h1: 2.15rem;
    --h2: 1.35rem;
    --paddingStd: 5.625rem;
    --paddingLarge: 9.375rem;
  }
}
* {
  box-sizing: border-box;

}  
body {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: #fff;
    font-size: 1rem;
    line-height: 1.4em;
  }

#main {
  transition: margin-left 0.5s;
  width: 100%;

  &.menu-open {
    margin-left: 250px;
  }
}

.burger {
  background-color: transparent;
  border: none;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 5;
}

h1,
h2 {
  margin-bottom: 1rem;
  line-height: 1.35em;
  /* color: var(--primary); */
  font-weight: 500;

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
  font-family: 'Heebo', sans-serif;
}

h1 {
  margin-bottom: 1rem;
  font-size: var(--h1);
  letter-spacing: -0.25px;

  @media(min-width: 768px) {
    line-height: 1.2;
  }
}

h2 {
  font-size: var(--h2);
}

a.btn,
button.btn {
    color: #fff;
    background-color: transparent;
    border: 0;
    text-decoration: none;
    padding: 0 0 10px 0;
    transition: var(--transition) color;
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    align-self: flex-start;

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
      transition: opacity 0.5s;
    }

    &:focus {
      color: var(--primary);
    }

    @media(min-width: 768px) {
      font-size: 1.1rem;
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

  @media (min-width: 1200px) {
      font-size: var(--menuItem);
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
        <Navbar></Navbar>
        <button className="burger" onClick={toggleNav}>
          <Hamburger status={isOpen} />
        </button>
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
