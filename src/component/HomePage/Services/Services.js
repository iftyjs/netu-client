import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NutoModal from '../Modal/Modal';
import planImageOne from './../../../images/plan-img1.jpeg';

function Services() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://damp-basin-39861.herokuapp.com/all-services')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <section id="plans" className="dtr-section dtr-pt-100">
      <div className="container">

          <div className="dtr-section-heading text-center">
              <h2>Plans & Pricing</h2>
          </div>

        {
          services.map((service) => (
          <div className="row mb-5">
              <div className="col-12">
                  <div className="dtr-pricing">
                  <img src={service} alt="" />
                  {/* <div className="dtr-pricing-img" style={{backgroundImage: `url({data:image/jpeg;base64,${service.uploadedImage.data})` }}> </div> */}
                      <div className="dtr-pricing-img" style={{backgroundImage: `url(${planImageOne})` }}> </div>
                        <div className="dtr-pricing-content">
                          <h4>{service.name}</h4>
                          <p>{service.des}</p>
                          <div className="d-flex align-items-center justify-content-between dtr-mt-30">
                              <p className="dtr-pricing-info color-grey"> <i className="icon-clock"></i><span className="color-gold dtr-mr-30">{service.hour}</span> <i className="icon-wallet"></i><span className="color-gold">${service.price}</span></p>
                              <Link to="#" onClick={openModal} className="dtr-btn dtr-btn-xl-px btn-white-bordered">Book Now</Link><NutoModal openModal={openModal} modalIsOpen={modalIsOpen} closeModal={closeModal} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        ))
      }
      </div>
  </section>
  );
}

export default Services;