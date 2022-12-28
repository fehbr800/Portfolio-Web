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
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>

                        <div className='skill-bx mt-4'>

                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem praesentium numquam similique impedit maxime totam ex, quisquam nobis nemo reiciendis repellat odio aliquam quidem voluptatem exercitationem laborum enim quia cupiditate?</p>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                            <div className='item'>
                                                <img src={Meter1} />
                                                <h5>Web Development</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={Meter2} />
                                                <h5>Brand Identity</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={Meter3} />
                                                <h5>Logo Design </h5>
                                            </div>
                                            <div className='item'>
                                                <img src={Meter1} />
                                                <h5>Web Development</h5>
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