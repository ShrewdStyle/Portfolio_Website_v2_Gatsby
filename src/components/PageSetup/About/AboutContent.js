import React from "react"
import { Link } from "gatsby"
import classes from "./AboutContent.module.css"
import Me from "../../../images/about-me1-scaled.jpg"

const AboutContent = () => {
  return (
    <div className={classes.AboutContainer}>
      <div className={classes.HeaderContainer}>
        <h1 className={classes.AboutHeader}>ABOUT ME</h1>
        <div className="bottomLine"></div>
        <div className={classes.AboutSubHeader}>
          Let me tell you a little bit about myself and what i do.
        </div>
      </div>
      <div className={classes.AboutBodyContainer}>
        <div className={classes.AboutBodyHeader}>Who i Am</div>
        <div className={classes.AboutBodyP}>
          My name's Jake. I'm a web designer and developer based in Manchester,
          UK.
        </div>
        <div className={classes.AboutBodyP}>
          During the day I’m a 3rd line support technician. During the evenings
          I spend my time working on my own projects and studying new
          frameworks.
        </div>
        <div className={classes.AboutBodyP}>
          My most recent project is called{" "}
          <a
            className={classes.AboutProject}
            href="https://www.developedmedia.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hidden Venture
          </a>
          , it’s a travel web application which uses the react library in the
          front-end. The idea of the application is that it will ask you 7
          questions about your future holiday goals and from your answers will
          return you 3 unique destinations based on your choices.
        </div>
        <div className={classes.AboutImgContainer}>
          <img className={classes.AboutImg} src={Me} alt="Me" />
        </div>
        <div className="bottomLineSecondary"></div>
        <div className={classes.AboutBodyHeader}>Why Work With Me?</div>
        <div className={classes.AboutBodyP}>
          There is nothing i like more than to turn ideas into reality.
        </div>
        <div className={classes.AboutBodyP}>
          Front-End development isn't a job for me, it's a passion. I enjoy
          exceeding peoples expectations and coming up with truly unique ideas.
        </div>
        <div className={classes.AboutBodyP}>
          If you have a project that you want to get started, think you need my
          help with something or just want advice, then get in touch.
        </div>
        <Link to="/contact">
          <button className="btnTransparentSecondary my-2">Get in Touch</button>
        </Link>
        <div className="bottomLineSecondary"></div>
      </div>
    </div>
  )
}

export default AboutContent
