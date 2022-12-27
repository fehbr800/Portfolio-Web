import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, SetLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front-End Developer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            ticker();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            SetLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (

        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem-vindo ao meu Portfólio</span>
                        <h1>{`Olá, me chamo Matheus Emanoel`}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero animi consequatur culpa, quod at exercitationem rerum ab numquam ad eos! Repellat, voluptas. Magni, accusantium deserunt. Est neque itaque molestiae soluta.</p>
                        <button onClick={() => console.log("testando")}>Vamos nos Conectar<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} />
                    </Col>
                </Row>
            </Container>
        </section>


    )
}
