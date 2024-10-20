import React from 'react';

export const Features = () => {
  return (
    
     <section className="container my-5" data-aos="fade-up">
     <h2 className="text-center mb-4">What Makes Us Unique?</h2>
     <div className="row">
       <div className="col-md-4 text-center" data-aos="zoom-in" data-aos-delay="100">
         <i className="bi bi-lightning-charge-fill fs-1 text-primary"></i>
         <h5>Lightning Fast</h5>
         <p>Generate originality reports in just a few seconds.</p>
       </div>
       <div className="col-md-4 text-center" data-aos="zoom-in" data-aos-delay="200">
         <i className="bi bi-shield-lock-fill fs-1 text-success"></i>
         <h5>Secure & Private</h5>
         <p>Your code remains protected and confidential.</p>
       </div>
       <div className="col-md-4 text-center" data-aos="zoom-in" data-aos-delay="300">
         <i className="bi bi-bar-chart-line-fill fs-1 text-info"></i>
         <h5>Detailed Reports</h5>
         <p>Get in-depth insights with AI-powered originality checks.</p>
       </div>
     </div>
   </section>
  )
}
export default Features
