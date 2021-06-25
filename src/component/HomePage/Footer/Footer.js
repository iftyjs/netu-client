import React from 'react';
import { Link } from 'react-router-dom';
import footerBG from './../../../images/footer-bg.jpeg';
import logo from './../../../images/logo-light.png';

function Footer() {
  return (
    <footer id="dtr-footer" className="dtr-section-with-bg" style={{backgroundImage: `url(${footerBG})` }}>
        <div className="dtr-footer-main">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                  <div className="dtr-pb-30 dtr-pr-50 dtr-sm-pr-0">

                      <img src={logo} alt="logo" className="dtr-mb-35" />
                      <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages of lorem ipsum available but the majority have in some form.</p>

                      <ul className="dtr-contact-widget dtr-mt-50">
                          <li><i className="icon-phone-alt color-grey"></i>1 800 234 5678</li>
                          <li><i className="icon-envelope color-grey"></i><a href="mailto:#">Email: hello@example.com</a></li>
                      </ul>
                      <p className="dtr-mt-50">&copy; 2021. Template by <Link to="https://themeforest.net/user/tansh">Tansh</Link></p>
                  </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                  <div className="dtr-pb-30 dtr-pr-50 dtr-sm-pr-0">

                      <h4>Links<span className="color-gold">.</span></h4>

                      <div className="row">
                          <div className="col-6">
                              <ul className="dtr-list-block">
                                  <li><Link to="#">About Us</Link></li>
                                  <li><Link to="#">Plans</Link></li>
                                  <li><Link to="#">Services</Link></li>
                                  <li><Link to="#">Blog</Link></li>
                                  <li><Link to="#">Contact</Link></li>
                              </ul>
                          </div>

                          <div className="col-6">
                              <ul className="dtr-list-block">
                                  <li><Link to="#">Women's Health</Link></li>
                                  <li><Link to="#">Weight Loss</Link></li>
                                  <li><Link to="#">Fatigue</Link></li>
                                  <li><Link to="#">Stress</Link></li>
                              </ul>
                          </div>
                      </div>

                  </div>
              </div>

              <div className="col-12 col-md-12 col-lg-4">
                  <div className="dtr-pb-30">
                      <h4>Connect<span className="color-gold">.</span></h4>

                      <div className="dtr-form dtr-styled-form dtr-mt-minus20">
                          <form id="contactform" method="post" action="php/contact-form.php">
                              <fieldset>
                                  <div className="dtr-form-row dtr-form-row-2col clearfix">
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
                                  </div>

                                  <p className="dtr-form-field">
                                      <input name="phone"  type="text" placeholder="Phone number" />
                                  </p>
                                  <p className="antispam">Leave this empty: <br />
                                      <input name="url" />
                                  </p>
                                  <p className="dtr-form-field">
                                      <textarea rows="4" name="message" className="required"  placeholder="Type your message here..."></textarea>
                                  </p>
                                  <p className="dtr-mt-40">
                                      <button className="dtr-btn btn-white" type="submit">Book Now</button>
                                  </p>
                                  <div id="contactresult"></div>
                              </fieldset>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;