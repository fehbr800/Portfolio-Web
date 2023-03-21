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
    const toRotate = ["Front-End Developer", "UI/UX Designer"];
    const period = 2000;



    const PDF_FILE_URL = 'http://localhost:3000/CurriculoMatheus.pdf'
    const dowloadFileAtURL = (url) => {
        fetch(url).then(response => response.blob()).then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = url.split('/').pop()
            const aTag = document.createElement('a')
            aTag.href = blobURL
            aTag.setAttribute('download', fileName)
            document.body.appendChild(aTag)
            aTag.click()
            aTag.remove()
        })

    }


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
                                    <h1>{`Olá, me chamo Matheus Emanoel`}<br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Front-End Developer", "UI/UX Designer" ]'></span><span className="wrap">{text}</span></h1>
                                    <p>Tenho 21 anos, atualmente estudo desenvolvimento Full-Stack com especialização Front-End pela Rocketseat.


                                        Meu objetivo profissional é me especializar e aprimorar minhas habilidades de desenvolvimento Front-end e ferramentas de testes unitários, focando sempre em qualidade e acessibilidade da aplicação.</p>



                                        {/* ATUALIZAÇAO FUTURA DOWNLOAD DE CV */}
                                    {/* <button onClick={() => dowloadFileAtURL(PDF_FILE_URL)} class="download-button">
                                        <div class="docs"><svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Download Cv</div>
                                        <div class="download">
                                            <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                                        </div>
                                    </button> */}
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
