import React from "react"
import classes from "./ContactMain.module.css"

const ContactMain = () => {
  return (
    <div className={classes.ContactContainer}>
      <div className={classes.HeaderContainer}>
        <h1 className={classes.ContactHeader}>Contact</h1>
        <div className="bottomLine"></div>
        <div className={classes.ContactSubHeader}>
          Have a question or want to work together?
        </div>
      </div>
      <div className={classes.FormContainer}>
        <input
          className={classes.FormInput}
          type="text"
          placeholder="Your name"
        />
        <input
          className={classes.FormInput}
          type="email"
          placeholder="Your e-mail"
        />
        <textarea className={classes.FormTextArea} placeholder="Message" />
        <button className="btnTransparentSecondary my-2">Submit</button>
      </div>
    </div>
  )
}

export default ContactMain
