// src/ResultsPage.js
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios"; // Import axios

const ResultsPage = () => {
  const [results, setResults] = useState([]); // State to hold results

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user-codes'); // Fetch user codes
        setResults(response.data); // Set results state
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults(); // Call fetch function on component mount
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container py-3 my-5">
        <h2 className="text-center mb-2">Analysis Results</h2>
        <p className="text-center">Results of your code submissions will be displayed here.</p>

        {/* Display the results */}
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="alert alert-info">
              <h5>Submission {index + 1}:</h5>
              <pre>{JSON.stringify(result.codes, null, 2)}</pre> {/* Display submitted codes */}
            </div>
          ))
        ) : (
          <div className="alert alert-info" role="alert">
            No results to display yet. Please submit your code for analysis.
          </div>
        )}

        {/* Back Button */}
        <Link to="/selectusers" className="btn btn-secondary">Back to Select Users</Link>
      </div>
    </div>
  );
};

export default ResultsPage;
