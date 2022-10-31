import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/facebook.png";
import projImg2 from "../assets/img/wordScramble.png";
import projImg3 from "../assets/img/foodDeli.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Facebook Clone",
      description: "Design & Development with HTML & CSS",
      imgUrl: projImg1,
  
    },
    {
      title: "Word Scrumble",
      description: "Design & Development with JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Food Delivery",
      description: "Design & Development with Java",
      imgUrl: projImg3,
      
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Project creations</h2>
                <p>Here are some projects and that will link to the Github for source codes.</p>
                <a href="https://github.com/PhilipBright"><img src="../assets/img/github.png"></img></a>

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
                          projects.map((project, index) => {
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
                       <h2>I am working on it...</h2>
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