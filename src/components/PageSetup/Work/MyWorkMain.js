import React from "react"
import classes from "./MyWorkMain.module.css"
import ProjectOne from "./Project-1/ProjectOne"

const MyWorkMain = () => {
  return (
    <div className={classes.MyWorkContainer}>
      <div className={classes.HeaderContainer}>
        <h1 className={classes.Header}>My Projects</h1>
        <div className="bottomLine"></div>
        <div className={classes.SubHeader}>
          Below are a few of my favourite projects
        </div>
      </div>
      <div className={classes.ProjectContainer}>
        <ProjectOne />
      </div>
    </div>
  )
}

export default MyWorkMain
