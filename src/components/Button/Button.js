import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { MdArrowForward } from "react-icons/md"
import { IconContext } from "react-icons"

const Button = ({ text, link, anilink }) => {
  if (anilink) {
    return (
      <AniLink className="btn" cover bg="#1d1d1d" to={link}>
        {text}
        <IconContext.Provider
          value={{
            style: { marginLeft: "40px", verticalAlign: "middle" },
          }}
        >
          <MdArrowForward />
        </IconContext.Provider>
      </AniLink>
    )
  } else {
    return (
      <button className="btn">
        {text}
        <IconContext.Provider
          value={{
            style: { marginLeft: "40px", verticalAlign: "middle" },
          }}
        >
          <MdArrowForward />
        </IconContext.Provider>
      </button>
    )
  }
}

export default Button
