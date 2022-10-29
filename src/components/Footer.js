import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/pblogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/saw-kaung-set-hein-64a35a21a/" target="_blank" rel="noOpener noReferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/philip.bright.351/" target="_blank" rel="noOpener noReferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/brightbenotyours/" target="_blank" rel="noOpener noReferrer"><img src={navIcon3} alt="" /></a>
               </div>
            <p>Built and Designed by Philip Bright</p><span> All Rights Reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}