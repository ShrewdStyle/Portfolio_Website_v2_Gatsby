import React from "react"
import { Link } from "gatsby"
import classes from "./Home.module.css"

const Home = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.ContentContainer}>
        <div className={classes.Content}>
          <h1 className={classes.Header}>Hello, I'm Jake Knight</h1>
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
