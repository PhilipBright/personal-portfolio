import { Container, Row, Col } from "react-bootstrap";
import Grad from "../assets/img/Grad.jpg";
import democracy from "../assets/img/democracy.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"




export const About = () => {

  return (
    <section className="about" id="home">
      <Container>
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                     <span className="tagline">About me</span>
                
                  <img className="aboutImg" src={Grad} alt="Grad IMG"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                  <p><h3>Lorem Ipsum has been the industry's</h3>Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. a galley of type and scrambled it to make a type specimen book.</p>

                  
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image1" />

    </section>
  )
}