import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGithubAlt } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import "./Footer.css"

function Footer() {
    return (
    <div className="Footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>About</h4>
                    <div className="about">
                    <ul>
                        <li><a href="#">Vision</a></li>
                        <li><a href="#">Mission</a></li>
                        <li><a href="#">Types of Events</a></li>
                        <li><a href="#">Google Technologies</a></li>
                    </ul>
                    </div>
                </div>
                <div class="footer-col">
                    <div class="evt">
                    <h4>Events</h4>
                    <div class="events">
                    <ul>
                        <li><a href="#">Featured Events</a></li>
                        <li><a href="#">Study Jams</a></li>
                        <li><a href="#">Hands-on Workshops</a></li>
                        <li><a href="#">Tech Talks</a></li>
                    </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-col">
                    <div class="tm">
                    <h4>Team</h4>
                    <div class="team">
                    <ul>
                        <li><a href="#">Executive Board</a></li>
                        <li><a href="#">Departments</a></li>
                        <li><a href="#">Join Us</a></li>
                    </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-col">
                    <div class="fus">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaGithubAlt /></a>
                        <a href="#"><FaLinkedinIn /></a>
                </div>
                </div>
                </div>
            </div>
  	    </div>
    </div>
    );
}

export default Footer
