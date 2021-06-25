import React from 'react';
import heroBG from './../../../images/hero-bg.jpg';

function HeroBanner() {
  return (
    <section id="home" className="dtr-section dtr-section-with-bg dtr-hero-section-top-padding" style={{backgroundImage: `url(${heroBG})`}}>
            <div className="dtr-overlay dtr-overlay-dark"></div>
            <div className="container">

                <div className="row dtr-pt-100 dtr-pb-130 dtr-sm-pb-80 dtr-overlay-content">
                  <div className="col-12 text-center">
                    <h1 className="color-white">Improve Quality And Length Of<br />
                        Your Life</h1>
                    <p className="color-white-muted"> There are many variations of passages of lorem Ipsum available but the majority have<br />
                        suffered alteration in some form, by injected humour or<br />
                        randomised words which don't look even. </p>
                    <p className="text-size-lg font-weight-extrabold color-gold">10% off online booking!</p>
                    <a href="#dtr-footer" className="dtr-btn btn-white dtr-scroll-link dtr-mt-40">Book a Session</a>
                  </div>
                </div>

            </div>
        </section>
  );
}

export default HeroBanner;