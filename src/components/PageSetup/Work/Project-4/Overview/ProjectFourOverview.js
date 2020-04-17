import React from "react"
import classes from "../../Project-1/Overview/ProjectOneOverview.module.css"
import EverythingCyberpunk from "../../../../../images/items/project4.png"
import Photo1 from "../../../../../images/items/sub-items/project4-sub1.png"
import Photo2 from "../../../../../images/items/sub-items/project4-sub2.png"
import Photo3 from "../../../../../images/items/sub-items/project4-sub3.png"

const ProjectFourOverview = () => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.HeaderContainer}>
        <div className={classes.TopHeader}>"COMING WHEN IT'S READY"</div>
        <h1 className={classes.ProjectHeader}>Everything Cyberpunk 2077</h1>
        <div className={classes.ProjectSubHeader}>
          A newsletter based on the RPG Cyberpunk 2077 which is currently being
          developed by CD Projekt Red.
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
          src={EverythingCyberpunk}
          alt="EverythingCyberpunk"
        />
        <div className={classes.ImageBack}></div>
      </div>
      <div className={classes.ContentContainer}>
        <div className={classes.OverviewHeader}>PROJECT OVERVIEW</div>
        <div className="bottomLineAlt"></div>
        <div className={classes.OverviewBody}>
          Everything Cyberpunk 2077 is a newsletter based on the RPG Cyberpunk
          2077 which is currently being developed by CD Projekt Red, the website
          is aimed at fans of the game and provides all up to date information
          and content for the game.
        </div>
        <div className={classes.OverviewBody}>
          This project was a personal passion of mine and a good opportunity for
          me to experiment on some new features, my main aim for this project
          was to implement an online shopping basket for chosen merchandise and
          then displaying a sub-total and total value.
        </div>
      </div>
      <div className={classes.PhotosContainer}>
        <div className={classes.ProjectPhoto}>
          <img className={classes.Photo} src={Photo1} alt="Photo1" />
        </div>
        <div className={classes.ProjectPhoto}>
          <img className={classes.Photo} src={Photo2} alt="Photo2" />
        </div>
        <div className={classes.ProjectPhoto}>
          <img className={classes.Photo} src={Photo3} alt="Photo3" />
        </div>
      </div>
      <div className={classes.ContentContainer}>
        <div className={classes.OverviewHeader}>THE RESULT</div>
        <div className="bottomLineAlt"></div>
        <div className={classes.OverviewBody}>
          The main problem which i faced when creating this project was getting
          the full sub-total price from all of the separate items selected.
        </div>
        <div className={classes.OverviewBody}>
          Initially i had created separate functions for each individual item,
          however realising that this would not scale well in production, i then
          looked for a solution which would be able to add all separate items
          together in a single function. I was able to overcome this by
          utilising the document.querySelectorAll method, this allowed me to
          select all data values at once and then output my final sub-total
          value.
        </div>
        <div className={classes.ButtonsContainer}>
          <a
            href="https://everythingcyberpunk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.ProjectBtn}>Visit Website</button>
          </a>
          <a
            href="https://github.com/ShrewdStyle/Everything_Cyberpunk_2077_v2"
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

export default ProjectFourOverview
