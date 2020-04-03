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
      <form
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        className={classes.FormContainer}
      >
        <div className={classes.StatusContainer}>
          <div className={classes.StatusHeader}>Status</div>
          <div className={classes.Status}>Available</div>
          <div className={classes.StatusText}>
            I'm currently looking for new opportunities from{" "}
            <span>May 2020.</span>
          </div>
        </div>
        <input className={classes.FormInput} type="text" placeholder="Name" />
        <input className={classes.FormInput} type="email" placeholder="Email" />
        <textarea className={classes.FormTextArea} placeholder="Your Message" />
        <div data-netlify-recaptcha="true"></div>
        <button className="btnTransparentSecondary my-2">Send Message</button>
      </form>
    </div>
  )
}

export default ContactMain
