import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import classes from "./Home.module.css"
import Typist from "react-typist"
import Spinner from "../../../UI/Spinner/Spinner"

const Home = () => {
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCount(1)
  }, [count])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])

  if (loading) return <Spinner />

  return (
    <div className={classes.Container}>
      <div className={classes.ContentContainer}>
        <div className={classes.Content}>
          <h1 className={classes.Header}>Hello, I'm Jake Knight</h1>
          {count ? (
            <Typist avgTypingDelay={200} onTypingDone={() => setCount(0)}>
              <span className={classes.Type}>UX, UI Developer</span>
              <Typist.Backspace count={20} delay={1200} />
              <span className={classes.Type}>Designer</span>
              <Typist.Backspace count={20} delay={1200} />
            </Typist>
          ) : (
            ""
          )}
          <div className={classes.HeaderBody}>
            I Specialise in Front-End Development, UX/UI Development and Cloud
            Architecture
          </div>
          <Link to="/projects">
            <button className="btnTransparent">View My Work</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
