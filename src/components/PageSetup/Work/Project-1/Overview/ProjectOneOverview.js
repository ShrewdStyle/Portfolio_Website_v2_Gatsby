import React from "react"
import classes from "./ProjectOneOverview.module.css"
import HiddenVenture from "../../../../../images/items/project1-v2.png"
import Photo1 from "../../../../../images/items/sub-items/project1-sub1.png"
import Photo2 from "../../../../../images/items/sub-items/project1-sub2.png"
import Photo3 from "../../../../../images/items/sub-items/project1-sub3.png"

const ProjectOneOverview = () => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.HeaderContainer}>
        <div className={classes.TopHeader}>UNIQUE TRAVEL LOCATIONS</div>
        <h1 className={classes.ProjectHeader}>Hidden Venture</h1>
        <div className={classes.ProjectSubHeader}>
          A travel website aimed at travellers who want to go to unique
          destinations around the world.
        </div>
      </div>
      <div className={classes.ImageHeader}>
        <div className={classes.MacButtons}>
          <div className={classes.MacRed}></div>
          <div className={classes.MacOrange}></div>
          <div className={classes.MacGreen}></div>
        </div>
        <img className={classes.Img} src={HiddenVenture} alt="Hidden Venture" />
        <div className={classes.ImageBack}></div>
      </div>
      <div className={classes.ContentContainer}>
        <div className={classes.OverviewHeader}>PROJECT OVERVIEW</div>
        <div className="bottomLineAlt"></div>
        <div className={classes.OverviewBody}>
          HiddenVenture Travel is a travel website built with react in the
          front-end, aimed at travellers who want to go to unique destinations
          around the world, it will ask a series of questions and then return 3
          holiday destinations based on the answers given.
        </div>
        <div className={classes.OverviewBody}>
          My role for this project was to provide 3 dynamic holiday destinations
          based on the users answers. The destinations will be split based on
          the continent chosen and then returned from a selected array.
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
          The main difficulty which i faced when developing this project was
          implementing the previous question feature within the questions form.
          Each time i would click the previous button, the selected answers were
          not updating within my array when trying to total up the results.
        </div>
        <div className={classes.OverviewBody}>
          After looking further into the problem i found that it was much
          simpler to create an empty array and push the current questions ID
          into it and then with the previous button feature i was then able to
          'pop' off the last selected answer if the previous button was clicked.
        </div>
        <div className={classes.ButtonsContainer}>
          <a
            href="https://www.developedmedia.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.ProjectBtn}>Visit Website</button>
          </a>
          <a
            href="https://github.com/ShrewdStyle/HiddenVenture_v2"
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

export default ProjectOneOverview
