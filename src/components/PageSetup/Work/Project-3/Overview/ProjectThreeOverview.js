import React from "react"
import classes from "../../Project-1/Overview/ProjectOneOverview.module.css"
import CloudWebTraining from "../../../../../images/items/project3-v2.png"
import Photo1 from "../../../../../images/items/sub-items/project3-sub1.png"
import Photo2 from "../../../../../images/items/sub-items/project3-sub2.png"
import Photo3 from "../../../../../images/items/sub-items/project3-sub3.png"

const ProjectThreeOverview = () => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.HeaderContainer}>
        <div className={classes.TopHeader}>CLOUD SOLUTIONS</div>
        <h1 className={classes.ProjectHeader}>Cloud Web Training</h1>
        <div className={classes.ProjectSubHeader}>
          A cloud services website aimed at companies and small businesses who
          are looking to move into the cloud but are not yet sure how to start.
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
          src={CloudWebTraining}
          alt="CloudWebTraining"
        />
        <div className={classes.ImageBack}></div>
      </div>
      <div className={classes.ContentContainer}>
        <div className={classes.OverviewHeader}>PROJECT OVERVIEW</div>
        <div className="bottomLineAlt"></div>
        <div className={classes.OverviewBody}>
          Cloud Web Training is a fully animated website aimed at companies and
          small businesses who are looking to move into the cloud but are not
          yet sure how to start. The website guides people on the best steps to
          take and educates them on the features which they may need in their
          company and also the recommended providers and features for what they
          require.
        </div>
        <div className={classes.OverviewBody}>
          My role for this project was to provide a fully animated website which
          is aimed at companies who are looking to migrate to the cloud, or
          looking expand their knowledge on the cloud and what it has to offer.
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
          The main issues which i faced when implementing this project was how
          to loop through each slide in my headers slide show.
        </div>
        <div className={classes.OverviewBody}>
          I found that when trying to implement the slide show, the issue which
          i was facing when not being able to loop through the slides was that
          my 'dots.length' did not match the amount of images which i had put
          into the slider, therefore my 'slides.length' were never matching my
          'dots.length'. Once this had been amended i was then able to set a
          timeout and switch between them without any further issues.
        </div>
        <div className={classes.ButtonsContainer}>
          <a
            href="https://www.cloudwebsolutions.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.ProjectBtn}>Visit Website</button>
          </a>
          <a
            href="https://github.com/ShrewdStyle/Cloud_Web_Training_v3"
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

export default ProjectThreeOverview
