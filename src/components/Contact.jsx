import { isVisible } from "@testing-library/user-event/dist/utils";
import { useState } from "react"
import { Container } from "react-bootstrap";





export const Contact = () => {
  



    return (
        <Container fluid className="p-0">
        <section className="contact " id='connect'>
              <div className="contact-0 d-flex flex-column flex-wrap align-center align-items-center ">
              <h2 className="text-center">Que tal batermos um papo?</h2>
              <div className="contact ">
                <button> 
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5566999719231">
                    <span>Entre em contato
                    
                    </span>
                    </a> 
                </button>
              </div>
              </div>
             
           
        </section>
        </Container>

    )
}