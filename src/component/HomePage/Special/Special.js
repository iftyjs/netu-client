import React from 'react';
import serviceIconOne from './../../../images/service-icon1.png';
import serviceIconTwo from './../../../images/service-icon2.png';
import serviceIconThree from './../../../images/service-icon3.png';
import serviceIconFour from './../../../images/service-icon4.png';

function Special() {
  return (
    <section id="services" className="dtr-section dtr-py-100">
      <div className="container">
          <div className="dtr-section-heading text-center">
              <h2>What I Specialize In</h2>
          </div>
          <div className="row">
              <div className="col-12 col-md-6">
                  <div className="dtr-feature dtr-feature-left bg-grey dtr-p-50">
                      <div className="dtr-feature-img"><img src={serviceIconOne} alt="service-one" /></div>
                      <div className="dtr-feature-content">
                          <h4><span className="color-gold">01.</span> Digestion</h4>
                          <p>There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form, by injected humour or randomised words.</p>
                      </div>
                  </div>
              </div>

              <div className="col-12 col-md-6">
                  <div className="dtr-feature dtr-feature-left bg-grey dtr-p-50">
                      <div className="dtr-feature-img"><img src={serviceIconTwo} alt="service-two" /></div>
                      <div className="dtr-feature-content">
                          <h4><span className="color-gold">02.</span> Stress</h4>
                          <p>There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form, by injected humour or randomised words.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-12 col-md-6">
                  <div className="dtr-feature dtr-feature-left bg-grey dtr-p-50">
                      <div className="dtr-feature-img"><img src={serviceIconThree} alt="service-three" /></div>
                      <div className="dtr-feature-content">
                          <h4><span className="color-gold">03.</span> Depression</h4>
                          <p>There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form, by injected humour or randomised words.</p>
                      </div>
                  </div>
              </div>

              <div className="col-12 col-md-6">
                  <div className="dtr-feature dtr-feature-left bg-grey dtr-p-50">
                      <div className="dtr-feature-img"><img src={serviceIconFour} alt="service-four" /></div>
                      <div className="dtr-feature-content">
                          <h4><span className="color-gold">04.</span> Fatigue</h4>
                          <p>There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form, by injected humour or randomised words.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  );
}

export default Special;