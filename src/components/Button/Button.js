import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { IoIosArrowRoundDown } from "react-icons/io"
import { IconContext } from "react-icons"

const Button = ({ text, link, anilink, down }) => {
  if (anilink) {
    return (
      <AniLink className="btn" cover bg="#1d1d1d" to={link}>
        {text}
        <IconContext.Provider
          value={{
            style: {
              marginLeft: "1rem",
              verticalAlign: "middle",
              fontSize: "4rem",
            },
          }}
        >
          {down && <IoIosArrowRoundDown />}
        </IconContext.Provider>
      </AniLink>
    )
  } else {
    return (
      <button className="btn">
        {text}
        {/* <IconContext.Provider
          value={{
            style: { marginLeft: "40px", verticalAlign: "middle" },
          }}
        >
          <MdArrowForward />
        </IconContext.Provider> */}
      </button>
    )
  }
}

export default Button
