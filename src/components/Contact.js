import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Contact = () => {
  
const handleCopyEmail = () => {
    const email = "jesse.nyberg3@gmail.com";
    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Email address copied to clipboard: " + email);
        })
        .catch((error) => {
            console.error("Error copying email:", error);
        });
};

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact me</h2>
				<p>If you have any questions, feel free to contact me</p>
				<div className="social-icon">
					<a href="https://www.linkedin.com/in/nyberg-jesse/"><img src={navIcon1} alt="" /></a>
					<a onClick={handleCopyEmail}>
						<img src={navIcon3} alt="" />
					</a>
				<p></p>
				
              </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
