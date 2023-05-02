import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FBURL, FDURL } from "./Projects";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 style={{color:'#62f534', fontweight:'bold'}}>{title}</h4>
          <span style={{color:'purple', fontweight:'bold'}}>{description}</span><br></br>
         
        </div>
      </div>
    </Col>
  )
}