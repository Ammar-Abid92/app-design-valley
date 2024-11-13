import React from 'react';
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import AppLogo from '../../assets/images/logo1.png';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow sticky-top">
            <div className="container">
                {/* <a className="navbar-brand" href="">
                    <p style={{ marginBottom: '0px' }}><span>App </span>Design Valley</p>
                </a> */}
                <img src={AppLogo} alt="logo" style={{ width: '150px', height: '80px', marginBottom: 10 }} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ margin: 'auto' }}>
                        <li className="nav-item"><a className="nav-link active text-uppercase" aria-current="page" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-uppercase" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link text-uppercase" href="#why-choose-us">Why Choose Us</a></li>
                        {/* <li className="nav-item"><a className="nav-link text-uppercase" href="#faq">Technologies</a></li> */}
                        <li className="nav-item"><a className="nav-link text-uppercase" href="#accomplishments">Insights</a></li>
                    </ul>
                    <a className="rounded-pill btn-rounded" style={{ padding: '8px 60px 8px 8px', marginTop: 5, textDecoration:'none', color: '#9926f0'}} href='mailto:info@appdesignvalley.com' >
                    info@appdesignvalley.com
                        <span style={{ width: '2rem', height: '2rem' }}>
                            <FaMailBulk />
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header;