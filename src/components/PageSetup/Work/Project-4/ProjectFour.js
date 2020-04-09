import React from "react"
import classes from "../Project-2/ProjectTwo.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import EverythingCyberpunk from "../../../../images/items/project4.png"

const ProjectFour = () => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.ProjectPhoto}>
        <img
          className={classes.ProjectImg}
          src={EverythingCyberpunk}
          alt="Everything Cyberpunk"
        />
        <div className={classes.ProjectDiv}></div>
      </div>
      <div className={classes.ProjectInfo}>
        <div className={classes.ProjectName}>Everything Cyberpunk 2077</div>
        <div className={classes.versionUpdate}>
          ** Version 2 currently in development, due for completion 26/04/20 **
        </div>
        <div className={classes.ProjectText}>
          A newsletter based on the RPG Cyberpunk 2077 which is currently being
          developed by CD Projekt Red.
        </div>
        <div className={classes.ProjectPoints}>
          <ul className={classes.ProjectList}>
            <li className={classes.ProjectElements}>
              <FontAwesomeIcon className={classes.ProjectIcon} icon={faCode} />
              Vanilla JavaScript
            </li>
            <li className={classes.ProjectElements}>
              <FontAwesomeIcon
                className={classes.ProjectIcon}
                icon={faShoppingCart}
              />
              Shopping Basket
            </li>
          </ul>
        </div>
        <Link to="/everything-cyberpunk-2077">
          <button className="btnProject my-2">Project Overview</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectFour
