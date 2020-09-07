import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects"
import Contact from "../components/Contact/Contact"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/SEO"
import { Link } from "react-scroll"
import Button from "../components/Button/Button"
import FullWidthImage from "../components/FullWidthImage/FullWidthImage"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
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
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Banner
          description={data.site.siteMetadata.description}
          subline={data.site.siteMetadata.subline}
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
      <Service largePadding={true} />
      <FeaturedProjects id="projects" />
      <Contact />
    </Layout>
  )
}

export default Index
