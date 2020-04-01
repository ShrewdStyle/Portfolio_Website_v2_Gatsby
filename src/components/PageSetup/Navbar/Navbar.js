import { Link } from "gatsby"
import React from "react"
import classes from "./Navbar.module.css"

const Navbar = () => (
  <div>
    <ul className={classes.Navbar}>
      <Link to="/">
        <div className={classes.Logo}>KS Logo</div>
      </Link>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Navbar
