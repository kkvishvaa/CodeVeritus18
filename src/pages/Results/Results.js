import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Results.css";

const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/backend");
        setResults(response.data);
      } catch (err) {
        console.error("Error fetching results:", err);
        setError("Failed to load results. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  if (loading) {
    return (
      <div className="loading-text animate__animated animate__fadeIn">
        Loading results...
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5 animate__animated animate__shakeX">
        {error}
      </div>
    );
  }

  return (
    <div className="results-page">
      <div className="container py-5 my-5 animate__animated animate__fadeIn">
        <h2 className="page-title text-center">Code Submitted by Users</h2>
        <p className="text-center subtitle">
          Click on a row to view the submitted code and additional details.
        </p>

        <div className="results-container">
          {results.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Username</th>
                  <th>Prediction</th>
                  <th className="text-center">View</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <React.Fragment key={index}>
                    <tr
                      onClick={() => handleRowClick(index)}
                      style={{ cursor: "pointer" }}
                      className={expandedRow === index ? "table-active" : ""}
                    >
                      <td>{index + 1}</td>
                      <td>{result.userId}</td>
                      <td>{result.prediction}</td>
                      <td className="text-center">
                        {expandedRow === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </td>
                    </tr>
                    {expandedRow === index && (
                      <tr>
                        <td colSpan="4">
                          <div className="expanded-content">
                            <h6>Submitted Code:</h6>
                            <pre className="code-block">
                              {result.codes.join("\n")}
                            </pre>
                            <p>
                              <strong>Prediction:</strong> {result.prediction}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="alert alert-warning text-center animate__animated animate__bounceIn">
              No results to display. Please submit some code for analysis.
            </div>
          )}
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="btn btn-primary back-button">
            <FaArrowLeft className="me-2" /> Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
