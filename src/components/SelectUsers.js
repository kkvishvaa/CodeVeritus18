// src/SelectUsersPage.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "./Navbar";
import axios from "axios"; // Import axios

const SelectUsersPage = () => {
  const [numUsers, setNumUsers] = useState(1);
  const [codeInputs, setCodeInputs] = useState([""]);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleUserChange = (event) => {
    const count = parseInt(event.target.value);
    setNumUsers(count);
    setCodeInputs(Array(count).fill(""));
  };

  const handleCodeChange = (index, event) => {
    const updatedInputs = [...codeInputs];
    updatedInputs[index] = event.target.value;
    setCodeInputs(updatedInputs);
  };

  const handleSubmit = async () => {
    try {
      // Send user codes to the backend
      await axios.post('http://localhost:5000/api/user-codes', { codes: codeInputs });
      // Navigate to Results page after submission
      navigate('/results');
    } catch (error) {
      console.error('Error submitting codes:', error);
    }
  };

  return (
    <div>
      <Navbar />
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
        <button onClick={handleSubmit} className="btn btn-primary">Next</button>
      </div>
    </div>
  );
};

export default SelectUsersPage;
