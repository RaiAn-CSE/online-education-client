import React from 'react';
import './Footer.css'
import { FaFacebook, FaFacebookMessenger, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div class="footer-title">
                <h2>Online Education</h2>
            </div>
            <hr></hr>
            <div class="footer-menu">
                <a href="#">Contact Us</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Privacy Settings</a>
                <a href="#">Support</a>
                <a href="#">Live Class</a>
            </div>
            <div class="social-media-link">
                <a class="fb" href="https://web.facebook.com//?_rdc=1&_rdr"><FaFacebook></FaFacebook></a>
                <a class="messenger" href="https://web.facebook.com//?_rdc=1&_rdr"><FaFacebookMessenger></FaFacebookMessenger></a>
                <a class="twitter"
                    href="https://twitter.com/?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%"><FaTwitterSquare></FaTwitterSquare></a>
                <a class="youtube" href="https://www.youtube.com/"><FaYoutube></FaYoutube></a>
            </div>
            <h6 className='mt-3'>Copyright © 2022 Programming-hero.com</h6>
        </footer >
    );
};

export default Footer;