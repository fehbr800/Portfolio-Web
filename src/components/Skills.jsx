import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LogoHtml from '../assets/img/logo-html-5-256.png';
import LogoCss from '../assets/img/logo-css-3-256.png';
import LogoJs from '../assets/img/logo-javascript-256.png';
import LogoReact from '../assets/img/logo-react-256.png';
import LogoBs from '../assets/img/bootstrap-256.png';
import LogoGit from '../assets/img/git-256.png';
import LogoGitHub from '../assets/img/github-256.png';
import LogoUiUx from '../assets/img/ui-ux-logo.png';
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

                            <h2 className='mb-'>Skills</h2>
                            
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                            <div className='item'>
                                                <img src={LogoHtml} />
                                                <img src={LogoCss} />
                                                <h5>HTML/CSS</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={LogoJs} />
                                                <h5>JAVASCRIPT</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={LogoReact} />
                                                <h5>REACT</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={LogoBs} />
                                                <h5>BOOSTSTRAP </h5>
                                            </div>
                                            <div className='item'>
                                                <img src={LogoGit} />
                                                <h5>GIT</h5>
                                            </div>
                                            <div className='item'>
                                                <img src={LogoGitHub} />
                                                <h5>GITHUB</h5>
                                            </div>
                                            <div className='item'>
                                                <img className='mt-5' src={LogoUiUx} />
                                                <h5 className='mt-4'>UX/UI</h5>
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