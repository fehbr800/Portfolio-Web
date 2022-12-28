import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from '../assets/img/logo.svg';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/github.png';
import NavIcon3 from '../assets/img/nav-icon3.svg';
export  const NavBar = () => {
    const [activeLink, setActiveLink ] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        } 
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    } 
    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Logo" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link' } onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link' } onClick={()=> onUpdateActiveLink('projects')}>Projetos</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a target="_blank" href='https://www.linkedin.com/in/matheus-emanoel-995b23181/'><img src={NavIcon1}/></a>
                                <a target="_blank" href='/'><img src={NavIcon2}/></a>
                                <a target="_blank"href='/'><img src={NavIcon3}/></a>
                            </div>
                            <button className='' onClick={() => console.log('funcionando')} ><span>Vamos nos Conectar</span></button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
