// src/SelectUsersPage.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const SelectUsersPage = () => {
  const [numUsers, setNumUsers] = useState(1);
  const [codeInputs, setCodeInputs] = useState([""]); // Initial empty input for the first user

  const handleUserChange = (event) => {
    const count = parseInt(event.target.value);
    setNumUsers(count);

    // Update the codeInputs state based on the selected number of users
    const updatedInputs = Array(count).fill("");
    setCodeInputs(updatedInputs);
  };

  const handleCodeChange = (index, event) => {
    const updatedInputs = [...codeInputs];
    updatedInputs[index] = event.target.value;
    setCodeInputs(updatedInputs);
  };

  return (
    <div>
      <Navbar/>
      <div className="container py-3 my-5">
        <h2 className="text-center mb-2">Code Entry Portal</h2>
        <p className="tagline text-center">"Empowering Your Coding Journey!"</p>

        {/* User Count Input */}
        <div className="mb-3">
          <label htmlFor="numUsers" className="form-label">
            Number of Users:
          </label>
          <select className="form-select" id="numUsers" onChange={handleUserChange} value={numUsers}>
            <option value="1">1 User</option>
            <option value="2">2 Users</option>
            <option value="3">3 Users</option>
            <option value="4">4 Users</option>
          </select>
        </div>

        {/* Code Input Areas for Each User */}
        {codeInputs.map((code, index) => (
          <div key={index} className="mb-3">
            <label htmlFor={`codeInput${index}`} className="form-label">
              Code Input for User {index + 1}:
            </label>
            <textarea
              id={`codeInput${index}`}
              className="form-control"
              rows="5"
              value={code}
              onChange={(event) => handleCodeChange(index, event)}
              placeholder="Type your code here..."
            />
          </div>
        ))}

        {/* Next Button */}
        <Link to="/results" className="btn btn-primary">Next</Link>
      </div>
    </div>
  );
};

export default SelectUsersPage;
