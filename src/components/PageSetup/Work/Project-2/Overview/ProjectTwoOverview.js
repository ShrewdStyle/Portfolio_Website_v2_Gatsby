import React from "react"
import classes from "../../Project-1/Overview/ProjectOneOverview.module.css"
import TimeManagement from "../../../../../images/items/project2-v2.png"
import Photo1 from "../../../../../images/items/sub-items/project2-sub1.png"
import Photo2 from "../../../../../images/items/sub-items/project2-sub2.png"
import Photo3 from "../../../../../images/items/sub-items/project2-sub3.png"

const ProjectTwoOverview = () => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.HeaderContainer}>
        <div className={classes.TopHeader}>MANAGE TIME BETTER</div>
        <h1 className={classes.ProjectHeader}>TimeManagement</h1>
        <div className={classes.ProjectSubHeader}>
          A time management web application to help monitor and analyse your
          daily activities to improve productivity.
        </div>
      </div>
      <div className={classes.ImageHeader}>
        <div className={classes.MacButtons}>
          <div className={classes.MacRed}></div>
          <div className={classes.MacOrange}></div>
          <div className={classes.MacGreen}></div>
        </div>
        <img
          className={classes.Img}
          src={TimeManagement}
          alt="TimeManagement"
        />
        <div className={classes.ImageBack}></div>
      </div>
      <div className={classes.ContentContainer}>
        <div className={classes.OverviewHeader}>PROJECT OVERVIEW</div>
        <div className="bottomLineAlt"></div>
        <div className={classes.OverviewBody}>
          Time Management Solutions is a full stack web app which is built with
          React in the front-end and Firebase in the back-end. Here you will be
          able to enter your daily activities and the application will calculate
          your remaining time in the day left and give you a visual overview on
          what you are spending the majority of your time doing.
        </div>
        <div className={classes.OverviewBody}>
          My role for this project was to provide a returns list of user inputs,
          to then calculate the remaining time in the day left after each input
          and then provide a visual overview to then analyse and then show what
          the user is spending the majority of their time doing.
        </div>
      </div>
      <div className={classes.PhotosContainer}>
        <div className={classes.ProjectPhoto}>
          <img className={classes.Photo} src={Photo1} alt="Photo1" />
        </div>
        <div className={classes.ProjectPhoto}>
          <img className={classes.Photo} src={Photo3} alt="Photo3" />
        </div>
        <div className={classes.ProjectPhoto}>
          <img className={classes.Photo} src={Photo2} alt="Photo2" />
        </div>
      </div>
      <div className={classes.ContentContainer}>
        <div className={classes.OverviewHeader}>THE RESULT</div>
        <div className="bottomLineAlt"></div>
        <div className={classes.OverviewBody}>
          The main issues which i faced when developing this web application was
          applying the 'current' class on the websites navbar and once the
          website had launched in its test phase, i was then having trouble
          getting the react router to re-render the pages after a refresh.
        </div>
        <div className={classes.OverviewBody}>
          With this web app being a single page application and split up using
          react routing, the 'current' class was always being displayed on the
          home page, to overcome this i had to create a separate functional
          component and then pass this as props into the NavLinks built in
          component. With the refresh error i was getting i found the issue was
          again with the react routing, as the hosting platform is trying to
          find the specified directory which does not exist i had to create a
          separate '_redirects' file to then tell the platform how to redirect
          the user requests as it only has a index.html page.
        </div>
        <div className={classes.ButtonsContainer}>
          <a
            href="https://www.timemanagementsolutions.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.ProjectBtn}>Visit Website</button>
          </a>
          <a
            href="https://github.com/ShrewdStyle/React_Time_Management_App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.ProjectBtn}>Source Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectTwoOverview
