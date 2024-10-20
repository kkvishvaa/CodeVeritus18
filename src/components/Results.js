// src/ResultsPage.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ResultsPage = () => {
  return (
    <div>
     <Navbar/>

      <div className="container py-3 my-5">
        <h2 className="text-center mb-2">Analysis Results</h2>
        <p className="text-center">Results of your code submissions will be displayed here.</p>

        {/* Placeholder for Results */}
        <div className="alert alert-info" role="alert">
          No results to display yet. Please submit your code for analysis.
        </div>

        {/* Back Button */}
        <Link to="/selectusers" className="btn btn-secondary">Back to Select Users</Link>
      </div>
    </div>
  );
};

export default ResultsPage;
