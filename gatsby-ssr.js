import React from "react"
import Layout from "./src/components/Layout"
// import PageTransition from "gatsby-v2-plugin-page-transitions"

export function wrapPageElement({ element, props }) {
  return (
    <Layout {...props}>
      {/* <PageTransition> */}
      {element}
      {/* </PageTransition> */}
    </Layout>
  )
}
