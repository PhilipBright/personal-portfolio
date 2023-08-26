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
            
            <p>Built and Designed by Saw Kaung Set Hein</p><span> All Rights Reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}