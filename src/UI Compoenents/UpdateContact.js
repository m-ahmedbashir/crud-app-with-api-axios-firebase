import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateContact = () => {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // toast function
  const success = () =>
    toast("Updated Successfully!", {
      autoClose: 2000,
    });
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setNumber(localStorage.getItem("Number"));
  }, []);
  const updateChanges = () => {
    axios.put(`https://62fb764babd610251c096d5f.mockapi.io/fakeData/${id}`, {
      name,
      number,
    });
    success();
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
              placeholder={id}
              disabled
              name="id"
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          </div>
          <div className=" mt-2">
            <label>Enter Name:</label>
            <br />
            <input
              type="text"
              className="form-group"
              placeholder="Enter Name"
              name="name"
              value={name}
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-primary" onClick={updateChanges}>
              Update Contact
            </button>
            <Link to="/display">
              <button className="btn btn-danger mx-3">Back</button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateContact;
