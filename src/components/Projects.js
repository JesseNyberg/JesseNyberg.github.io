import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {ProjectCard} from './ProjectCard';

export const Projects = () => {

  const projects = [
    {
      title: "Dayz Barter",
      description: "A bartering system for the video game DayZ",
      imgUrl: projImg1,
      projectUrl: "https://github.com/JesseNyberg/DayzBarter",
    },
    {
      title: "DayZ Discord Admin API",
      description: "API system to manage DayZ server through discord",
      imgUrl: projImg2,
      projectUrl: "https://github.com/JesseNyberg/DayZ-DiscordAdminAPI",
    },
    {
      title: "CoaP Pub/Sub service",
      description: "CoaP protocol Publish/subscribe service made in Rust",
      imgUrl: projImg3,
      projectUrl: "https://github.com/CoAPConnect/coap-pubsub-rust",
    },
  ];
  
  const projects2 = [
    {
      title: "KideLokki",
      description: "Android app made for reserving tickets in kide.app",
      imgUrl: projImg4,
      projectUrl: "https://github.com/JesseNyberg/KideLokki",
    },
    {
      title: "VidSlim",
      description: "Video compressor that helps share large videos",
      imgUrl: projImg5,
      projectUrl: "https://github.com/JesseNyberg/VidSlim",
    },
    {
      title: "HLTV Stats Collector",
      description: "Collects match data from HLTV.org",
      imgUrl: projImg6,
      projectUrl: "https://github.com/JesseNyberg/HLTVStats",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are my GitHub projects.</p>
				<p>Clicking the images will link you to their repository pages. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects tab #1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects tab #2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projects tab #3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Awaiting next projects...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
