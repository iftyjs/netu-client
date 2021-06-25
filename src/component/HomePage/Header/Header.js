import React from 'react';
import {
    Link
} from "react-router-dom";
import logo from './../../../images/logo-light.png';

function Header() {
    const localStorageData = localStorage.getItem('nuto-user');
  return (
    <>
    <div className="dtr-responsive-header header-with-slick-menu fixed-top">
        <div className="container">

            <div className="dtr-responsive-header-left">
              <a className="dtr-logo" to="/">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <button id="dtr-menu-button" className="dtr-hamburger" type="button"><span className="dtr-hamburger-lines-wrapper"><span className="dtr-hamburger-lines"></span></span></button>
        </div>
        <div className="dtr-responsive-header-menu"></div>
    </div>
    <header id="dtr-header-global" className="fixed-top">
        <div className="d-flex align-items-center justify-content-between">

            <div className="dtr-header-left">

                <Link className="logo-default dtr-scroll-link" to="#home"><img src={logo} alt="logo" /></Link>

                <Link className="logo-alt dtr-scroll-link" to="#home"><img src={logo} alt="logo" /></Link>

            </div>

            <div className="main-navigation">
                <ul className="sf-menu dtr-scrollspy dtr-nav light-nav-on-load light-nav-on-scroll">
                    <li> <Link className="nav-link" to="/">Home</Link> </li>
                    <li> <Link className="nav-link" to="#about">About</Link> </li>
                    <li> <Link className="nav-link" to="#services">Services</Link> </li>
                    <li> <Link className="nav-link" to="#plans">Plans</Link> </li>
                    <li> <Link className="nav-link" to="#dtr-footer">Contact</Link></li>
                    {
                        JSON.parse(localStorageData)?.email ?
                        (<li> <Link className="nav-link" to="/dashboard">Welcome, {JSON.parse(localStorageData).name}</Link></li>) :
                        (<li> <Link className="nav-link" to="/login">Login</Link></li>)
                    }
                </ul>
            </div>

            <div className="dtr-header-social dtr-social-large dtr-social-light">
                <ul className="dtr-social dtr-social-list text-right">
                    <li><Link to="#" className="dtr-twitter" target="_blank" title="twitter"></Link></li>
                    <li><Link to="#" className="dtr-facebook" target="_blank" title="facebook"></Link></li>
                    <li><Link to="#" className="dtr-whatsapp" target="_blank" title="whatsapp"></Link></li>
                </ul>
            </div>
        </div>
    </header>
    </>
  );
}

export default Header;