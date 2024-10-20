import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
        className="hero-section text-center d-flex align-items-center justify-content-center"
        style={{
          height: '100vh',
          background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
          color: 'white'
        }}
      >
        <div className="container animate__animated animate__fadeInDown">
          <h1 className="display-4 fw-bold">Your Code. Your Identity.</h1>
          <p className="lead">Detect originality with AI-powered analysis in real-time!</p>
          <Link to="/selectusers" className="btn btn-outline-light btn-lg mt-3">Try Now</Link>
        </div>
      </header>
  );
};

export default Header;
