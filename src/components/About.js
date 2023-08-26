import { Container, Row, Col } from "react-bootstrap";
import Grad from "../assets/img/Grad.jpg";
import democracy from "../assets/img/democracy.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"




export const About = () => {

  return (
    <section className="about" id="about">
      <Container>
      <h1 className="tagline">About me</h1>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                     
                
                  <img className="aboutImg" src={Grad} alt="Grad IMG"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                  <p className="about-text">I'm currently a <span>B.Sc</span>  student of <span>Software Engineer</span>  Major at <span>Info Myanmar University</span> of Yangon. 
                  While I am studying, I work as a freelancer in <span> Full-Stack </span> web developing and sometimes I create <span> Applications </span>.
                  After final year, I will be joining as a <span>Master of Computer Science</span> student in United State.<br></br> <br></br> 
                  Outside of work, I am interested in exploring about <span>Artificial Intelligence Technology</span>.
                  
                  </p>

                  
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image1" />

    </section>
  )
}