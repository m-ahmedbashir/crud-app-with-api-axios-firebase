import React, { useState } from "react";
const EmailJS = () => {
  // useState hooks

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const sendMsgHandle = (e) => {
    console.log(name, email, text);
  };
  return (
    <div className="container">
      <div className="card w-100 mx-auto ">
        <div className="card-title mx-auto ">
          <h3 className=" p-2 my-2 bg-info rounded-3 text-center">
            Contact Us
          </h3>
        </div>
        <div className="card-body">
          <div>
            <label className="form-label">Enter Your Name</label>
            <input
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Ahmed"
            />
          </div>
          <div>
            <label className="form-label">Enter Your Email</label>
            <input
              className="form-control"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="ahmed@gmail.com"
            />
          </div>
          <div>
            <label className="form-label">Meassage</label>
            <textarea
              className="form-control"
              name="text"
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Your Message Here"
            />
          </div>
          <div className="mt-2 text-center">
            <button className="btn btn-primary" onClick={sendMsgHandle}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailJS;
