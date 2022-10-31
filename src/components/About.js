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
                
                  <p className="about-text">I'm currently a second year student of <span>Software Engineer</span>  Major at <span>Info Myanmar University</span> of Yangon. 
                  While I am studying, I work as a freelancer in <span> front-end </span> web developing and sometimes I repair <span> ios </span> devices.
                  After second year, I will be joining as a <span>Computer Science</span> student in Singapore.<br></br> <br></br> 
                  Outside of work, I am interested in reading horrific books. I also play guitar and upload fingerstyle videos on Facebook.
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