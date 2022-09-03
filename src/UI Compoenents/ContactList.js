import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactList = () => {
  // useState hooks
  const [contactData, setContactData] = useState([]);
  // toast function
  const success = () =>
    toast("Contact Deleted Successfully!", {
      autoClose: 2000,
    });
  // getting data from by API
  useEffect(() => {
    axios
      .get("https://62fb764babd610251c096d5f.mockapi.io/fakeData")
      .then((respose) => {
        setContactData(respose.data);
      });
  }, []);

  // updating data
  const updateData = (data) => {
    // desturcturing the data got from click
    let { id, name, number } = data;
    //saving data in the local storage.
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Number", number);
  };

  // function to get Data for updating after deletion
  const getData = () => {
    axios
      .get("https://62fb764babd610251c096d5f.mockapi.io/fakeData")
      .then((getData) => {
        setContactData(getData.data);
      });
  };

  // deleteing data from the server Using click

  const onDelete = (id) => {
    axios
      .delete(`https://62fb764babd610251c096d5f.mockapi.io/fakeData/${id}`)
      .then(() => getData(), success());
  };
  return (
    <div className="container text-center">
      <Table className="table table-striped">
        <thead>
          <tr className="fw-bold">
            <td>ID</td>
            <td>Name</td>
            <td>Phone No</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {contactData.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.number}</td>
                <td>
                  {
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() => updateData(data)}
                      >
                        Update
                      </button>
                    </Link>
                  }
                  {
                    <button
                      className="btn btn-danger mx-3"
                      onClick={() => {
                        onDelete(data.id);
                      }}
                    >
                      Delete
                    </button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ToastContainer />
    </div>
  );
};

export default ContactList;
