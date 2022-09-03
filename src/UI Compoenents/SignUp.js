import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// firebase authenitication
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigation = useNavigate();
  // toast function
  const success = () =>
    toast("Signed Up Successfully!", {
      autoClose: 2000,
    });
  // hooks for singup fields

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userReTypePassword, setUserRetypePassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // ref for email and password
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const singupHandler = async () => {
    try {
      if (userPassword === userReTypePassword) {
        const user = await createUserWithEmailAndPassword(
          auth,
          userEmail,
          userPassword
        );
        success();
        setError(false);
        navigation("/signin");
      } else {
        setError(true);
        setErrorMsg("Please enter same passsword in password fields");
      }
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };
  return (
    <div className=" row ">
      <div className="Container w-50 mx-auto ">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              {error && (
                <label className="btn btn-danger px-5 w-100">{errorMsg}</label>
              )}
              <h2 className="text-center"> Sign Up</h2>
            </div>
            <div className="card-body">
              <div className="my-2">
                <label className="form-label">Enter useremail:</label>
                <input
                  className="form-control"
                  placeholder="example@mail.com"
                  ref={emailRef}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="my-2">
                <label className="form-label">Enter Password:</label>
                <input
                  className="form-control"
                  placeholder="Password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  ref={passwordRef}
                  type="password"
                  name="password1"
                  required
                />
              </div>
              <div className="my-2">
                <label className="form-label">Retype Password:</label>
                <input
                  className="form-control"
                  placeholder="Re-Type Password"
                  ref={passwordConfirmRef}
                  value={userReTypePassword}
                  onChange={(e) => setUserRetypePassword(e.target.value)}
                  type="password"
                  name="password2"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary px-5 py-2 "
                onClick={singupHandler}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
