import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects"
import Project from "../components/Project/Project"
import Contact from "../components/Contact"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/SEO"
import { Link } from "react-scroll"
import Button from "../components/Button/Button"
import FullWidthImage from "../components/FullWidthImage/FullWidthImage"

const Index = () => {
  const queryResponse = useStaticQuery(data)

  const project = queryResponse.allContentfulProjects.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Banner
          description={queryResponse.site.siteMetadata.description}
          subline={queryResponse.site.siteMetadata.subline}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <Link to="about" smooth={true} duration={500}>
              <Button text="Learn More" />
            </Link>
          </motion.div>
        </Banner>
      </Hero>
      <FullWidthImage />
      <About id="about" />
      {project.map(({ node }, i) => {
        return (
          <Project
            key={i}
            item={node}
            className={i % 2 ? "align-left" : "align-right"}
            prefix={true}
          />
        )
      })}
      {/* <Service largePadding={true} /> */}
      {/* <FeaturedProjects id="projects" /> */}
      <Contact />
    </Layout>
  )
}

const data = graphql`
  {
    allContentfulProjects(filter: { featured: { eq: true } }) {
      edges {
        node {
          contentful_id
          name
          excerpt
          images {
            fluid(quality: 90, maxWidth: 1000) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        subline
      }
    }
    aboutSectionImg: file(relativePath: { eq: "mac-white-bg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 3000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Index
