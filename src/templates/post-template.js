import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostTemplate = ({ pageContext }) => {
  console.log(pageContext)
  return <div>The post template</div>
}

export default PostTemplate
