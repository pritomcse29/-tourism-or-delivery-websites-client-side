import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Footer.css';
const Footer = () => {
    return (
        <div class="footer-container">
            <div class="row">
                <div class="col">


                    <h4>OUR INFO :</h4>
                    <hr />
                    <small>CHattogram info:01714-161223</small><br />
                    <small>Dhaka info:01714-161223</small><br />
                    <small>Bogra info:01714-161223</small><br />
                    <small>Khulna info:01714-161223</small><br />
                    <small>Cumilla info:01714-161223</small><br />
                    <small>Mymensingh info:01714-161223</small><br />
                    <samll>Narayanganj  info:01714-161223</samll><br />
                    <small>Noakhali info:01714-161223</small><br />
                    <small>Official: sarkarFOodDelivery@ncta.com</small>

                    <p>(Available : 24 Hour)</p>
                </div>
                <div class="col anchor-style">

                    <NavLink to="/home">Home</NavLink> <br /><br />
                    <NavLink to="/review">Order Review</NavLink><br /><br />
                    <Link to="/users">Manage All Orders</Link>


                </div>
                <div class="col">
                    <p>Follow On</p>

                    <i class="fab fa-facebook space"></i>
                    <i class="fab fa-twitter space"></i>
                    <i class="fab fa-youtube space"></i>
                    <i class="fab fa-instagram-square space"></i>


                    <p>  Privacy Policy</p>
                    <p>Emergency:</p>
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

