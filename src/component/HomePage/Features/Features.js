import React from 'react';
import featureIconOne from './../../../images/feature-icon1.png';
import featureIconTwo from './../../../images/feature-icon2.png';
import featureIconThree from './../../../images/feature-icon3.png';

function Features() {
  return (
    <section className="dtr-section dtr-box-layout dtr-py-100">
        <div className="dtr-section-heading text-center">
            <h2>Good Nutrition Can Help!</h2>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 col-xl-3">
                <div className="dtr-feature dtr-feature-top">
                    <div className="dtr-feature-img"><img src={featureIconOne} alt="feature-one" /></div>
                    <div className="dtr-feature-content">
                        <h4 className="color-gold">Woman's health</h4>
                        <p>There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form by injected humour.</p>
                    </div>
                </div>

            </div>

            <div className="col-12 col-md-4 col-xl-3 offset-xl-1">
                <div className="dtr-feature dtr-feature-top">
                    <div className="dtr-feature-img"><img src={featureIconTwo} alt="feature-two" /></div>
                    <div className="dtr-feature-content">
                        <h4 className="color-gold">Weight Loss</h4>
                        <p>There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form by injected humour.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-xl-3 offset-xl-1">
                <div className="dtr-feature dtr-feature-top">
                    <div className="dtr-feature-img"><img src={featureIconThree} alt="feature-three" /></div>
                    <div className="dtr-feature-content">
                        <h4 className="color-gold">Detoxification</h4>
                        <p>There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form by injected humour.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Features;