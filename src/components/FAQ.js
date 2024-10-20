import React from 'react'

export const FAQ = () => {
  return (
    <section className="container my-5" data-aos="fade-up">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                How does the tool detect copied code?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">We use AI models to compare code against known sources and detect copied patterns.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                Is my data secure?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">Yes, all data is encrypted and securely stored during analysis.</div>
            </div>
          </div>
        </div>
      </section>

  )
}
export default FAQ
