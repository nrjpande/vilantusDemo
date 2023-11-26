import React, { useState } from "react";
import "../css/footer.css";

export default function Footer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = () => {
    // Send a POST request to the server
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Message sent successfully");
        handleReset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(`Error sending message : ${error.message}`);
      });

    handleReset();
  };

  return (
    <div className="footer-container">
      <div className="contact-us-form">
        <h3>
          <strong>Contact Us</strong>
        </h3>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="name-input">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <div className="email-subject">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              name="message"
              id="msgtxt"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              required
            ></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
      <footer className="footer">
        <p>
          <strong>&copy; 2023 Vilantus HealthCare Pvt. Ltd. </strong>
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
