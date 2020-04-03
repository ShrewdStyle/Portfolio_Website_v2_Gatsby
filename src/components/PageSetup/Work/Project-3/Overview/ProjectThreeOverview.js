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
          to set the 'Parallax Scrolling' effect, i was able to add the effect
          however the main issue that i was facing was the image was overlapping
          the sections below and not giving me the desired effect.
        </div>
        <div className={classes.OverviewBody}>
          I found that when trying to implement the Parallax Scrolling effect, i
          needed to add a z-index for the image and then add an additional
          padding section below the image so that the image is then hidden under
          the padding. Once i had put this in place i was the able to achieve
          the effect i was looking for.
        </div>
        <div className={classes.ButtonsContainer}>
          <a
            href="https://www.cloudwebtraining.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.ProjectBtn}>Visit Website</button>
          </a>
          <a
            href="https://github.com/ShrewdStyle/cloud_web_training"
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
