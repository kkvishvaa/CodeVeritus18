// src/HomePage.js

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Steps from "./Steps";
import FAQ from "./FAQ";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="home">
    <Navbar/>
    <Header/>
    <About/>
    <Features/>
     <Steps/> 
     <FAQ/>
     

      {/* How It Works Section */}
     
      {/* FAQ Section */}
      
      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Code Authenticator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
