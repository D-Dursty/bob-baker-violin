import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import './style.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("mnqyzyww");
    if (state.succeeded) {
      return (
        <p>Thank you for contacting me, I look forward to reading your E-mail!</p>
      );
    }
    return (
      <div className="contactContainer">
        <div className="contact">
          <form className="form" onSubmit={handleSubmit}>
            <h2>CONTACT ME</h2>
            <span className="nameInput"> 
            <label>Name:</label>  
            <br></br>
              <input
              placeholder="Your Name Here"
              id="name"
              type="name"
              name="name"/>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            </span>
            <br></br>
            <br></br>
            <span  className="emailInput"><label htmlFor="email">Email Address:</label>
            <br></br>
            <input id="email" type="email" name="email" placeholder="example@email.com" /></span>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <br></br>
            <br></br>
            <textarea id="message" name="message" placeholder="Write your message here!"/>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <br></br>
            <br></br>
            <button className="formBtn" type="submit" disabled={state.submitting}>
              SEND
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ContactForm;

  