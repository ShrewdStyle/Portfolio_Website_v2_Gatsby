import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyWorkMain from "../components/PageSetup/Work/MyWorkMain"
import Spinner from "../UI/Spinner/Spinner"

const MyWork = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])

  if (loading) return <Spinner />
  return (
    <Layout>
      <SEO title="My Projects" />
      <MyWorkMain />
    </Layout>
  )
}

export default MyWork
