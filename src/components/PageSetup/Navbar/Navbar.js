import { Link } from "gatsby"
import React from "react"
import classes from "./Navbar.module.css"

const Navbar = () => {
  const activeStyle = {
    borderBottom: "3px solid var(--third-color)",
    paddingBottom: "0.5rem",
  }

  return (
    <div>
      <ul className={classes.Navbar}>
        <Link to="/">
          <div className={classes.Logo}>KS Logo</div>
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
            to="/work"
          >
            Work
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
