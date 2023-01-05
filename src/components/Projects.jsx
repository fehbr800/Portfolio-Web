import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projeto1.png";
import projImg2 from "../assets/img/projeto2.png";
import projImg3 from "../assets/img/projeto3.png";
import ColorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {
    const projects = [
        {
            title: "DH Flix",
            description: "Design & Development",
            imgUrl: projImg1,
            url: "https://digital-house-checkpoint2-frontend.vercel.app/",
        },
        {
            title: "Game-Cards",
            description: "Design & Development",
            imgUrl: projImg2,
            url: "https://digital-house-checkpoint1-front-end2.vercel.app/",
        },
        {
            title: "Movie DB",
            description: "Design & Development",
            imgUrl: projImg3,
            url: "https://react-filmes-eight.vercel.app/",
            
        },
      
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>

                                <Col>

                                    <h2>Projetos</h2>
                                    <p>
                                       Projetos desenvolvidos ao longo de minha jornada
                                    </p>

                                    <Tab.Container id="projects-tab" defaultActiveKey='first'>
                                        {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">DH</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab Third</Nav.Link>
                                            </Nav.Item>
                                        </Nav> */}
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            {/* <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane> */}
                                        </Tab.Content>
                                    </Tab.Container>

                                </Col>
                            </div>}
                    </TrackVisibility>
                </Row>
            </Container>
            <img className="background-image-right" src={ColorSharp2} />
        </section>
    )
}