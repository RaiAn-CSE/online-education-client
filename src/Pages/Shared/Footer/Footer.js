import React from 'react';
import './Footer.css'
import { FaFacebook, FaFacebookMessenger, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-title">
                <h3>Online Education</h3>
            </div>
            <hr></hr>
            <div className="footer-menu">
                <Link href="#">Contact Us</Link>
                <Link href="#">Terms of Service</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Privacy Settings</Link>
                <Link href="#">Support</Link>
                <Link href="#">Live Class</Link>
            </div>
            <div className="social-media-link">
                <a className="fb" href="https://web.facebook.com//?_rdc=1&_rdr"><FaFacebook></FaFacebook></a>
                <a className="messenger" href="https://web.facebook.com//?_rdc=1&_rdr"><FaFacebookMessenger></FaFacebookMessenger></a>
                <a className="twitter"
                    href="https://twitter.com/?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%"><FaTwitterSquare></FaTwitterSquare></a>
                <a className="youtube" href="https://www.youtube.com/"><FaYoutube></FaYoutube></a>
            </div>
            <small className='mt-3'>Copyright © 2022 OnlineEducation.com</small>
        </footer >
    );
};

export default Footer;