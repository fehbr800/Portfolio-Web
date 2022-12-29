import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from '../assets/img/github.png';
import NavIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href='https://www.linkedin.com/in/matheus-emanoel-995b23181/'><img src={NavIcon1} /></a>
              <a target="_blank" href='https://github.com/fehbr800'><img src={NavIcon2} /></a>
              <a target="_blank" href='https://www.instagram.com/math_emanoel/'><img src={NavIcon3} /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}