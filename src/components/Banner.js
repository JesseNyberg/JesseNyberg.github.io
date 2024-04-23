import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [chars, setChars] = useState([]);
  const [index, setIndex] = useState(0);
  const [delta] = useState(75);
  const toRotate = "Hey, I'm Jesse Nyberg";

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    if (index >= toRotate.length) {
      clearInterval(ticker);
    }

    return () => clearInterval(ticker);
  }, [index]);

  const tick = () => {
    if (index < toRotate.length) {
      setChars(prevChars => [...prevChars, toRotate[index]]);
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    <span>
                      <span className="wrap">
                        {chars.map((char, index) => (
                          <span key={index} className="fade-in-char">{char}</span>
                        ))}
                      </span>
                    </span>
                  </h1>
                  <p>&#8226; Junior Software Developer @ Tietoevry</p>
				  <p>&#8226; Part-time teacher (Programming 1, 2 courses) @ University Of Tampere</p>
				  <p>&#8226; Computer science student @ University Of Tampere</p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

