import React, { useState } from "react";
import { useEffect } from "react";
import {
  onAuthStateChanged,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase-config";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProfileDashboard = () => {
  // for navigartion push
  const navigation = useNavigate();

  const [user, setUser] = useState({});

  //   Change Password UseState
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRetype, setNewPasswordRetype] = useState("");

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

  // logout handler
  const logOutHandler = () => {
    signOut(auth);
    signOutSuccess();
    navigation("/signin");
  };

  // Change Old Password

  // const reauthenticate = (oldPassword) => {
  //   var user = auth.currentUser;
  //   var cred = EmailAuthProvider.credential(auth, user.email, oldPassword);
  //   return reauthenticateWithCredential(cred);
  // };
  //   handlerPasswordUpdate

  const passwordUpdateHandler = () => {
    console.log(oldPassword, newPassword, newPasswordRetype);
    this.reauthenticate(oldPassword)
      .then(() => {
        var user = auth.currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            console.log("Password updated!");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card w-100 mx-auto">
        <div className="card-title">
          <h4 className="text-center">User Profile</h4>{" "}
        </div>
        <div className="card-body">
          {
            <div className="mx-auto w-50 d-flex  justify-content-between ">
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
        </div>
      </div>

      <div className="container">
        <div className="card my-2">
          <div className="card-title my-2">
            <h3 className="text-center">Update Password</h3>
          </div>
          <div className="card-body">
            <div className="my-2">
              <label className="label-control">Enter Old Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Old Password"
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
              />
            </div>
            <div className="my-2">
              <label className="label-control">Enter New Password</label>
              <input
                className="form-control"
                placeholder="Enter New Password"
                value={newPassword}
                type="password"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>
            <div className="my-2">
              <label className="label-control">Re-Type New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-Type Old Password"
                value={newPasswordRetype}
                onChange={(e) => {
                  setNewPasswordRetype(e.target.value);
                }}
              />
            </div>

            <div>
              <button
                className="btn btn-warning "
                onClick={passwordUpdateHandler}
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
