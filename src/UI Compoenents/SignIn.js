import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useNavigate, Link } from "react-router-dom";

// toast notificaiton import
import { ToastContainer, toast } from "react-toastify";
import { Badge } from "react-bootstrap";
const SignIn = () => {
  // hooks for sign in and error handling
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({});

  // navigation
  const navigation = useNavigate();
  // toast function

  const success = () =>
    toast("Signed In Successfully!", {
      autoClose: 2000,
    });

  // signOut Toast
  const signOutSuccess = () => {
    toast("Signed Out Successfully!", {
      autoClose: 2000,
    });
  };
  // onAuthStateChange handler

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  // handle signIn function
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        setError(true);
        setErrorMsg("Email and password is required");
      } else {
        const user = await signInWithEmailAndPassword(auth, email, password);
        success();
        setError(false);
        navigation("/profileDashboard");
      }
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };
  // logout handler
  const logOutHandler = () => {
    signOut(auth);
    signOutSuccess();
  };
  return (
    <div>
      <div className="container">
        {
          <div className="mx-auto w-50 d-flex  justify-content-between ">
            {/* {user?.email} */}
            {user?.email && (
              <label className="label-control ">
                <h4>Current user:</h4>
                <Badge>{user.email}</Badge>
              </label>
            )}
            {user?.email && (
              <button
                className="btn badge-primary bg-primary text-white p-1 py-1 small"
                onClick={logOutHandler}
              >
                Sign Out
              </button>
            )}
          </div>
        }
        {error && (
          <div className="mx-auto w-50">
            <label className="btn btn-danger my-1 ">{errorMsg}</label>
          </div>
        )}
        <div className="card w-50 mx-auto">
          <div className="card-title">
            <h2 className="text-center my-2">Sign In</h2>
          </div>
          <div className="card-body">
            <div className="my-2">
              <label className="form-label">Enter Useremail</label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="my-2">
              <label className="form-label">Enter Password</label>
              <input
                required
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/resetPassword">
                <label className="from-control">Forget Password?</label>
              </Link>
            </div>

            <div className="my-2 text-center">
              <button
                className="btn btn-primary my-3 px-4"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
