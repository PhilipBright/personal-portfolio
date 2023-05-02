import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import profile from "../assets/img/profile.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>Hi! Philip's here </h1>
                <h2>I repair ios devices somtimes.</h2>
                  <p>I am a web developer based in Yangon. I am very interested in full-stack Development, artificial intelligence and everything in between. If you need any project, just contact me and I would love to make it for you.</p>
                  <a href="mailto:sawkaungsethein123@gmail.com"> <i className="fa-solid fa-envelope"></i> Email me <ArrowRightCircle size={25}/> </a>
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="img1" src={headerImg} alt="Header Img"/>
                  <img className="img2" src={profile} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}