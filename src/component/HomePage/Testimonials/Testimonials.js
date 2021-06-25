import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import testimonialBG from './../../../images/testimonial-bg.jpeg';
import userTwo from './../../../images/user-2.jpeg';

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

function Testimonials() {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('https://damp-basin-39861.herokuapp.com/get-review')
        .then(res => res.json())
        .then(json => setTestimonial(json))
    },[])
  return (
    <section id="reviews" className="dtr-section overflow-hidden dtr-section-with-bg dtr-py-100 color-white" style={{backgroundImage: `url(${testimonialBG})` }}>
      <div className="dtr-overlay dtr-overlay-dark"></div>
        <div className="container">
          <div className="row dtr-overlay-content">
              <div className="col-12 col-lg-10 offset-lg-1">
                  <i className="dtr-testimonial-icon icon-np_quote2 color-gold"></i>
                    <Slider {...settings} className="dtr-slick-slider slick-xl-arrows dtr-testimonial-number-slider text-center">
                  {
                    testimonial.map((item) => (
                        <div className="dtr-testimonial">
                          <div className="dtr-testimonial-content clearfix">{item.quote}</div>
                          <div className="dtr-client-info clearfix">
                              <div className="dtr-testimonial-user"><img src={userTwo} alt="user-two" /> </div>
                              <div className="dtr-testimonial-user-info">
                                  <h5 className="dtr-client-name">{item.name}</h5>
                                  <span className="dtr-client-job color-grey">{item.location}</span> </div>
                          </div>
                      </div>
                    ))
                  }
                    </Slider>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Testimonials;