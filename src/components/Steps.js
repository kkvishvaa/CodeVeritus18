import React from 'react'

export const Steps = () => {
  return (
    <section className="container my-5" data-aos="fade-up">
    <h2 className="text-center mb-4">How It Works</h2>
    <div className="row text-center">
      <div className="col-md-4" data-aos="fade-right" data-aos-delay="100">
        <i className="bi bi-code-square fs-1 text-primary"></i>
        <h5>Step 1: Code Submission</h5>
        <p>Upload your code through our secure platform.</p>
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <i className="bi bi-search fs-1 text-success"></i>
        <h5>Step 2: Real-Time Analysis</h5>
        <p>Our AI analyzes the code to detect any copied content.</p>
      </div>
      <div className="col-md-4" data-aos="fade-left" data-aos-delay="300">
        <i className="bi bi-file-earmark-text fs-1 text-info"></i>
        <h5>Step 3: Detailed Report</h5>
        <p>Receive a comprehensive report with originality scores.</p>
      </div>
    </div>
  </section>

  )
}

export default Steps
