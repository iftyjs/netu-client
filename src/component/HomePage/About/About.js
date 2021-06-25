import React from 'react';
import aboutImage from './../../../images/about-img.jpeg';
import sig from './../../../images/sig.png';

function About() {
  return (
    <section id="about" className="dtr-mb-100">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="dtr-about">
                      <div className="dtr-about-content bg-dark">
                          <p className="text-size-md font-weight-extrabold color-gold">Certified Nutrition Coach</p>
                          <h2 className=" color-white">Amelia Rachel</h2>
                          <p className="color-grey">There are many variations of passages of lorem Ipsum available but the majority have suffered
                              alteration in some form, by injected humour or randomised words.</p>
                          <p className="color-grey">If you are going to use a passage of lorem ipsum sed do eiusmod tempor.</p>
                          <div className="dtr-about-info dtr-mt-40">
                              <p className="dtr-about-info-number color-gold">20</p>
                              <p className="dtr-about-info-text color-gold mr-auto">Years of <br />
                                  Nourishing</p>
                              <img src={sig} alt="signature" /> </div>
                      </div>
                      <div className="dtr-about-img" style={{backgroundImage: `url(${aboutImage})`}}> </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  );
}

export default About;