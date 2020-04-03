import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/PageSetup/Home/Home"
import Spinner from "../UI/Spinner/Spinner"

const IndexPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

  if (loading) return <Spinner />

  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}

export default IndexPage
