import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FBURL, FDURL } from "./Projects";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
         
        </div>
      </div>
    </Col>
  )
}