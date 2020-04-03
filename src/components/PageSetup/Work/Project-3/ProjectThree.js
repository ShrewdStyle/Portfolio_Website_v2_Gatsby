import React from "react"
import classes from "../Project-2/ProjectTwo.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faCloudscale } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import CloudWebTraining from "../../../../images/items/project3-v2.png"

const ProjectThree = () => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.ProjectPhoto}>
        <img
          className={classes.ProjectImg}
          src={CloudWebTraining}
          alt="Cloud Web Training"
        />
        <div className={classes.ProjectDiv}></div>
      </div>
      <div className={classes.ProjectInfo}>
        <div className={classes.ProjectName}>Cloud Web Training</div>
        <div className={classes.ProjectText}>
          A cloud services website aimed at companies and small businesses who
          are looking to move into the cloud but are not yet sure how to start.
        </div>
        <div className={classes.ProjectPoints}>
          <ul className={classes.ProjectList}>
            <li className={classes.ProjectElements}>
              <FontAwesomeIcon className={classes.ProjectIcon} icon={faCode} />
              SASS Compiled
            </li>
            <li className={classes.ProjectElements}>
              <FontAwesomeIcon
                className={classes.ProjectIcon}
                icon={faCloudscale}
              />
              Website Animation
            </li>
          </ul>
        </div>
        <Link to="/cloud-web-training">
          <button className="btnProject my-2">Project Overview</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectThree
