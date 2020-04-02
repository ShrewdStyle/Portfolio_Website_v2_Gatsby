import React from "react"
import classes from "./MyWorkMain.module.css"
import ProjectOne from "./Project-1/ProjectOne"
import ProjectTwo from "./Project-2/ProjectTwo"

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
        <div className="bottomLineSecondary"></div>
        <ProjectTwo />
        <div className="bottomLineSecondary"></div>
      </div>
    </div>
  )
}

export default MyWorkMain
