import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Meter1 from '../assets/img/meter1.svg';
import Meter2 from '../assets/img/meter2.svg';
import Meter3 from '../assets/img/meter3.svg';
import ColorSharp from '../assets/img/color-sharp.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill mt-5 mb-5' id='skills'>
            <Container>
                <Row>
                    <Col>

                        <div className='skill-bx mt-4'>

                            <h2 className='mb-5'>Skills</h2>
                            
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                            <div className='item'>
                                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                                                <h5>HTML/CSS</h5>
                                            </div>
                                            <div className='item'>
                                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                                                <h5>JavaScript</h5>
                                            </div>
                                            <div className='item'>
                                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                                                <h5>React </h5>
                                            </div>
                                            <div className='item'>
                                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
                                                <h5>NodeJS</h5>
                                            </div>
                                            <div className='item'>
                                                <img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/512/external-ux-media-agency-flaticons-flat-circular-flat-icons.png" />
                                                <h5>UX/UI</h5>
                                            </div>
                                        </Carousel>
                                    </div>}
                            </TrackVisibility>
                        </div>


                    </Col>
                </Row>
            </Container>
            {/* <img className='backgroung-image-left' src={ColorSharp} /> */}
        </section>
    )
}