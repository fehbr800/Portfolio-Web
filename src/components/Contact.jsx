import { isVisible } from "@testing-library/user-event/dist/utils";
import { useState } from "react"
import { Container } from "react-bootstrap";
import { WhatsappAnimation } from "../components/WhatsappAnimation";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import {
    BrowserRouter as Router
  } from "react-router-dom";
  
export const Contact = () => {
  



    return (
        <Container fluid className="p-0">
        <section className="contact d-flex flex-row flex-wrap align-content-end justify-content-center align-items-center " id='connect'>
              <div className="contact-0">
               <WhatsappAnimation/>
              </div>
              <div className="contact1 mx-5">
                <button> 
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5566999719231">
                    <span>Entre em contato
                    <WhatsAppIcon/>
                    </span>
                    </a> 
                </button>
              </div>
           
        </section>
        </Container>

    )
}