import { Container, Row, Col } from "react-bootstrap";

import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from '../assets/img/github.png';


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href='https://www.linkedin.com/in/matheus-emanoel-995b23181/'><img src={NavIcon1} /></a>
              <a target="_blank" href='https://github.com/fehbr800'><img src={NavIcon2} /></a>
             
            </div>
           <p>Copyright {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}