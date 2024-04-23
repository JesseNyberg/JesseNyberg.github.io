import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Gauge } from 'react-circular-gauge';
import '../Gauge.css';

export const Skills = () => {
  const [values, setValues] = useState({
    cSharp: 0,
    java: 0,
    cplusplus: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setValues({
        cSharp: 80,
        java: 75,
        cplusplus: 60,
      });
    }, 1750);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="item">
                <div className="gauge-container">
                  <Gauge
                    value={values.cSharp}
                    maxValue={100}
                    startValue={0}
                    endValue={100}
                    arcWidth={0.1}
                    trackWidth={0.05}
                    arcColor={({ value }) => (value > 0 ? '#11998e' : 'transparent')}
                    animated={true}
                  />
                  <div className="gauge-label">C#</div>
                </div>
                <div className="gauge-container">
                  <Gauge
                    value={values.java}
                    maxValue={100}
                    startValue={0}
                    endValue={100}
                    arcWidth={0.1}
                    trackWidth={0.05}
                    arcColor={({ value }) => (value > 0 ? '#11998e' : 'transparent')}
                    animated={true}
                  />
                  <div className="gauge-label">Java</div>
                </div>
                <div className="gauge-container">
                  <Gauge
                    value={values.cplusplus}
                    maxValue={100}
                    startValue={0}
                    endValue={100}
                    arcWidth={0.1}
                    trackWidth={0.05}
                    arcColor={({ value }) => (value > 0 ? '#11998e' : 'transparent')}
                    animated={true}
                  />
                  <div className="gauge-label">C++</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};