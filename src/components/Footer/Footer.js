import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
const Footer = () => {
    return (
        <div class="footer-container">
            <div class="row">
                <div class="col">


                    <h4>OUR INFO CENTER:</h4>
                    <hr />
                    <small>Chattogram info:01714-161223</small><br />
                    <small>Dhaka info:01714-161223</small><br />
                    <small>Bogra info:01714-161223</small><br />
                    <small>Khulna info:01714-161223</small><br />
                    <small>Cumilla info:01714-161223</small><br />
                    <small>Mymensingh info:01714-161223</small><br />
                    <samll>Narayanganj  info:01714-161223</samll><br />
                    <small>Noakhali info:01714-161223</small><br />
                    <small>Official: sarkarHealthCare@ncta.com</small>

                    <p>(Available : 24 Hour)</p>
                </div>
                <div class="col anchor-style">

                    <p> <Link to="/home">Home</Link></p>
                    <p><Link to="/login-registration">Login</Link></p>
                    <p><Link to="/services">Services</Link></p>
                    <p><Link to="/doctors">Doctors</Link></p>
                    <p>  <Link to="/contact">Contacts</Link></p>
                    <p> <Link to="/about">About</Link></p>


                </div>
                <div class="col">
                    <p>Follow On</p>

                    <i class="fab fa-facebook space"></i>
                    <i class="fab fa-twitter space"></i>
                    <i class="fab fa-youtube space"></i>
                    <i class="fab fa-instagram-square space"></i>


                    <p>  Privacy Policy</p>
                    <p>Get Appointment:</p>
                    <hr />
                    <span>10678</span><br />
                    <span>10678</span><br />
                    <span>10678</span>
                </div>
            </div>
        </div >
    );
};
export default Footer;

