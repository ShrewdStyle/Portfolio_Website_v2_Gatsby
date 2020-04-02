import { Link } from "gatsby"
import React from "react"
import classes from "./Navbar.module.css"
import Logo from "../../../images/KnightSolutions.png"

const Navbar = () => {
  const activeStyle = {
    borderBottom: "3px solid var(--third-color)",
    paddingBottom: "0.5rem",
  }

  return (
    <div className={classes.Nav}>
      <ul className={classes.Navbar}>
        <Link to="/">
          <img className={classes.Logo} src={Logo} alt="KnightSolutions" />
        </Link>
        <li>
          <Link className={classes.NavLink} activeStyle={activeStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={classes.NavLink}
            activeStyle={activeStyle}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={classes.NavLink}
            activeStyle={activeStyle}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={classes.NavLink}
            activeStyle={activeStyle}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
