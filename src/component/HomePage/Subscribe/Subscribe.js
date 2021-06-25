import React from 'react';
import subscribeBG from './../../../images/subscribe-bg.png';

function Subscribe() {
  return (
    <section className="dtr-section dtr-section-with-bg dtr-py-100 bg-gold color-white" style={{backgroundImage: `url(${subscribeBG})` }}>
      <div className="container">
          <div className="row">
              <div className="col-12 col-md-10">
                  <h2>Get My Weekly Health Tips<br />
                      & Updates</h2>

                  <div className="dtr-form dtr-styled-form dtr-mt-40">
                      <form method="post" action="#">
                          <fieldset>

                              <div className="dtr-form-row dtr-form-row-3col clearfix">
                                  <div className="dtr-form-column">
                                      <p className="dtr-form-field">
                                          <input name="name"  type="text" placeholder="Your name" />
                                      </p>
                                  </div>
                                  <div className="dtr-form-column">
                                      <p className="dtr-form-field">
                                          <input name="email"  className="required email" type="text" placeholder="Email address" />
                                      </p>
                                  </div>
                                  <div className="dtr-form-column">
                                      <button className="dtr-btn btn-white w-100" type="submit">Subscribe</button>
                                  </div>
                              </div>

                          </fieldset>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </section>
  );
}

export default Subscribe;