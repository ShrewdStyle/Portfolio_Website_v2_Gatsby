import React from "react"
import classes from "./ProjectTwo.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faChartLine } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import TimeManagement from "../../../../images/items/project2-v2.png"

const ProjectTwo = () => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.ProjectPhoto}>
        <img
          className={classes.ProjectImg}
          src={TimeManagement}
          alt="TimeManagement"
        />
        <div className={classes.ProjectDiv}></div>
      </div>
      <div className={classes.ProjectInfo}>
        <div className={classes.ProjectName}>TimeManagement</div>
        <div className={classes.ProjectText}>
          A time management web application to help monitor and analyse your
          daily activities to improve productivity.
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
                icon={faChartLine}
              />
              Dynamic Analytical Chart
            </li>
          </ul>
        </div>
        <Link to="/time-management">
          <button className="btnProject my-2">Project Overview</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectTwo
