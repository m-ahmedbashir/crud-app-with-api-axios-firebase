import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  // use state hooks for inputs

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // naivagation hook
  const navigation = useNavigate();
  // toast function
  const success = () =>
    toast("Saved Successfully!", {
      autoClose: 2000,
    });

  //   post contact data
  const post = () => {
    axios
      .post("https://62fb764babd610251c096d5f.mockapi.io/fakeData", {
        name,
        number,
      })
      .then(() => {
        success();
        navigation("/display");
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row text-center ">
          <h1>Add Contact</h1>
          <div className=" mt-2">
            <label>Enter Name:</label>
            <br />
            <input
              type="text"
              className="form-group"
              placeholder="Enter Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label>Enter Contact No:</label>
            <br />
            <input
              type="number"
              className="form-group"
              placeholder="Enter Number"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-primary" onClick={post}>
              Save Contact
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default AddContact;
