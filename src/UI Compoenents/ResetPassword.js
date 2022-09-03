import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase-config";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  // useState
  const [resetEmail, setResetEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // Reset Password Toast
  const restPasswordSucces = () => {
    toast("Rest Password Email Successfully!", {
      autoClose: 2000,
    });
  };
  const navigation = useNavigate();
  //   reset password function
  const resetPasswordHandler = async () => {
    try {
      if (resetEmail !== "") {
        await sendPasswordResetEmail(auth, resetEmail);
        setError(false);
        restPasswordSucces();
      } else {
        setError(true);
        setErrorMsg("Please Enter Email Address");
      }
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };
  return (
    <div>
      <div className="card my-2">
        <div className="card-body">
          {error && <div className="alert alert-danger">{errorMsg}</div>}
          <h4 className="text-center">Enter Your Email</h4>
          <div className="my-2">
            <input
              required
              className="form-control"
              placeholder="Enter Email"
              value={resetEmail}
              onChange={(e) => {
                setResetEmail(e.target.value);
              }}
            />
          </div>
          <div className="text-center my-3">
            <button
              className="btn btn-danger px-5"
              onClick={resetPasswordHandler}
            >
              Reset Password
            </button>
            <button
              className="btn btn-warning mx-2 px-5"
              onClick={() => {
                navigation("/signin");
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
