import React from "react"
import classes from "./Footer.module.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
library.add(faGithub, faLinkedin)

const Footer = () => {
  return (
    <footer>
      <div className={classes.FooterContainer}>
        <div className={classes.Social}>
          <a
            className={classes.IconA}
            href="http://www.linkedin.com/in/jake-knight-811240b1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.Icon}>
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </div>
          </a>
          <a
            className={classes.IconA}
            href="https://github.com/ShrewdStyle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.Icon}>
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </div>
          </a>
        </div>
        <div className={classes.FooterText}>
          <span className={classes.FooterSpan}>Jake Knight</span> ©
          {new Date().getFullYear()}, Built with
          {` `}
          <a
            className={classes.FooterLink}
            href="https://www.gatsbyjs.org"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
