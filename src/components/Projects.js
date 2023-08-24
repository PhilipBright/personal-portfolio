import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/facebook.png";
import projImg2 from "../assets/img/wordScramble.png";
import projImg3 from "../assets/img/foodDeli.png";
import projImg4 from "../assets/img/e-commerce.png";
import ainu from '../assets/img/ainu.png'
import github from "../assets/img/github.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects1 = [
    {
      title: "Ainu-Sushi-Kriftel",
      description: "Design & Development with PHP, Laravel & MySQL",
      imgUrl: ainu,
    },
    {
      title: "E-commerce Website",
      description: "Design & Development with PHP & MySQL",
      imgUrl: projImg4,
    },
   
    {
      title: "Food Delivery",
      description: "Design & Development with Java",
      imgUrl: projImg3,
      
    },
    
  ];
  const projects2 = [{
    title: "Word Scramble",
    description: "Design & Development with JavaScript",
    imgUrl: projImg2,
  },
  {
      
    title: "Facebook Clone",
    description: "Design & Development with HTML & CSS",
    imgUrl: projImg1,
  },];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Project creations</h2>
                <p>Here are some projects and all of the project source codes can be found on Github.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="bounce" className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> 
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    <h2>I am working on it...</h2>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
     
    </section>
  )
}