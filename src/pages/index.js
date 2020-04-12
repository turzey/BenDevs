import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import Button from "../components/Button/Button"
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects"
import Contact from "../components/Contact/Contact"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import SEO from "../components/SEO"

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
      featuredProductsImg: file(relativePath: { eq: "bark.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
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
            <Button text="Learn More" link="/products" />
          </motion.div>
        </Banner>
      </Hero>
      <About largePadding={true} />
      <Service largePadding={true} />
      {/* <FeaturedProducts largePadding={false} /> */}
      <FeaturedProjects />
      <Contact />
    </Layout>
  )
}

export default Index
