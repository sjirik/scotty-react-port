import { useState, useRef } from "react";
import '../styles/Contact.css'

export default function Contact() {
  const contactRef = useRef(null);

  const [email, userEmail] = useState("");
  const [name, userName] = useState("");
  const [message, userMessage] = useState("");

  const emailChange = (e) => {
    userEmail(e.target.value);
  };

  const nameChange = (e) => {
    userName(e.target.value);
  };

  const messageChange = (e) => {
    userMessage(e.target.value);
  };

  const handleSub = async (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      alert("Fill in all the fields."); 
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/9a370d0d7b7478b6c787eb7394bc934e ",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );
      if (response.ok) {
        alert("Thank you for your message!");
        window.location.reload();
      } else {
        alert("Oops! Something went wrong."); 
      }
    } catch (error) {
      console.error(error);
      alert(
        "Oops! Something went wrong  - Please email me at jirikscotty@gmail.com"
      ); 
    }
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className=" d-flex justify-content-center row mt-5 p-0 "
    >
      <div className="col-lg-5 m-5">
        <div>
          <div className="text-center">
            <h2>
              Contact Me
            </h2>
          </div>
          <form
            onSubmit={handleSub}
            className="border border-2 rounded"
          >
            <input
              type="hidden"
              name="_subject"
              defaultValue="new email"
            />
            <input type="hidden" name="_captcha" defaultValue="false" />
            <input
              type="hidden"
              name="_autoresponse"
              defaultValue="Thank you for your email. Check out my gitHub profile @ https://github.com/sjirik !"
            />
            <div className="m-4 input-group">
              <span className="input-group-text">
              </span>
              <input
                type="email"
                name="email"
                className="form-control me-5"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={emailChange}
                required=""
              />
            </div>
            <div className="m-4 input-group">
              <span className="input-group-text">
              </span>
              <input
                type="name"
                className="form-control me-5"
                id="name"
                placeholder="Name"
                value={name}
                onChange={nameChange} 
                required=""
              />
            </div>
            <div className="form-floating m-4">
              <textarea
                name="query"
                id="query"
                placeholder="your message here..."
                className="form-control"
                style={{ height: 140 }}
                value={message}
                onChange={messageChange}
                required=""
              />
              <label htmlFor="query"></label>
            </div>
            <div className="m-4 text-center">
              <button
                id="submit-btn"
                type="submit"
                className="btn btn-secondary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}