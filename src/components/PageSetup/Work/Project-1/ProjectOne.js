import React from "react"
import classes from "./ProjectOne.module.css"
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
          <div>Built with React</div>
          <div>Interactive Questions Form</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectOne
