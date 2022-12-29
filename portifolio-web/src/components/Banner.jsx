import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.png"
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (

        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Bem-vindo ao meu Portfólio</span>
                                    <h1>{`Olá, me chamo Matheus Emanoel`}<br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'></span><span className="wrap">{text}</span></h1>
                                    <p>Tenho 21 anos, atualmente estudo desenvolvimento Full-Stack com especialização Front-End pela Rocketseat.

                                        Meu objetivo profissional é me especializar e aprimorar minhas habilidades de desenvolvimento Front-end e ferramentas de testes unitários, focando sempre em qualidade e acessibilidade da aplicação.</p>
                                    <button onClick={() => console.log("testando")}>Vamos nos Conectar<ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} />
                    </Col>
                </Row>
            </Container>
        </section>


    )
}
