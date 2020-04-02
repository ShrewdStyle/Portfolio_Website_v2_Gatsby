import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactMain from "../components/PageSetup/Contact/ContactMain"

const ContactMe = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <ContactMain />
    </Layout>
  )
}

export default ContactMe
