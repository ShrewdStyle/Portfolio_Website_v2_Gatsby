import React from "react"
import classes from "./ProjectOne.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faWpforms } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import HiddenVenture from "../../../../images/items/project1-v2.png"

const ProjectOne = () => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.ProjectPhoto}>
        <img
          className={classes.ProjectImg}
          src={HiddenVenture}
          alt="HiddenVenture"
        />
        <div className={classes.ProjectDiv}></div>
      </div>
      <div className={classes.ProjectInfo}>
        <div className={classes.ProjectName}>Hidden Venture</div>
        <div className={classes.ProjectText}>
          A travel website aimed at travellers who want to go to unique
          destinations around the world.
        </div>
        <div className={classes.ProjectPoints}>
          <ul className={classes.ProjectList}>
            <li className={classes.ProjectElements}>
              <FontAwesomeIcon className={classes.ProjectIcon} icon={faCode} />
              Built with React
            </li>
            <li className={classes.ProjectElements}>
              <FontAwesomeIcon
                className={classes.ProjectIcon}
                icon={faWpforms}
              />
              Interactive Questions Form
            </li>
          </ul>
        </div>
        <Link to="/hidden-venture">
          <button className="btnProject my-2">Project Overview</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectOne
