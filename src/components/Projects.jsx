import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import Projeto1 from "../assets/img/projeto1.png";
import Projeto2 from "../assets/img/projeto2.png";
import Projeto3 from "../assets/img/projeto3.png";
import Projeto4 from "../assets/img/projeto4.png";
import Projeto5 from "../assets/img/projeto5.png";
import Projeto6 from '../assets/img/projeto6.png'
import Projeto7 from '../assets/img/projeto7.png'
import Projeto8 from '../assets/img/projeto8.png'
export const Projects = () => {

    const projects = ([

        {

            title: "DH Flix",
            description: "Eu participei do primeiro Checkpoint em grupo com outros sete membros, como parte da matéria Front-end I oferecida pela Digital House. O projeto teve como objetivo a aplicação prática dos conhecimentos adquiridos durante o curso. Foi uma ótima oportunidade para consolidar nossas habilidades e trabalhar em equipe para desenvolver um projeto sólido.",
            languages: ["JavaScript", "CSS", "HTML", "Bootstrap", "Git", "GitHub"],
            image: Projeto1,
            projectLink: "https://digital-house-checkpoint2-frontend.vercel.app/",
            githubLink: "https://github.com/fehbr800/Digital-House-Checkpoint2-Frontend-",
        },
        {

            title: "Game-Cards",
            description: "Eu e mais dois colegas desenvolvemos o projeto Game-Cards como parte da matéria Front-end II. O objetivo foi aplicar na prática os conhecimentos adquiridos durante o curso, trabalhando em equipe para criar um projeto que utilizasse os conceitos mais avançados da linguagem de programação. Foi uma experiência enriquecedora que nos permitiu aprimorar nossas habilidades em programação e colaboração em equipe.",
            languages: ["JavaScript", "CSS", "HTML", "Bootstrap", "Git", "GitHub"],
            image: Projeto2,
            projectLink: "https://digital-house-checkpoint1-front-end2.vercel.app",
            githubLink: "https://github.com/fehbr800/Digital-House-Checkpoint1-Front-End2",
        },
        {

            title: "Movie DB",
            description: "Eu desenvolvi o projeto Movie DB como parte dos meus estudos pessoais. O objetivo foi aprimorar minhas habilidades em programação e colocar em prática os conhecimentos adquiridos em cursos e estudos independentes. O projeto consistiu em criar um banco de dados de filmes, o que me permitiu explorar diferentes tecnologias e técnicas de programação. Foi uma experiência desafiadora e gratificante, que me ajudou a crescer como programador.",
            languages: ["ReactJS", "Node.Js", "Bootstrap", "HTML", "CSS"],
            image: Projeto3,
            projectLink: "https://react-filmes-eight.vercel.app",
            githubLink: "https://github.com/fehbr800/React-Filmes",
        },
        {

            title: "Clone Amazon Prime",
            description: "Eu desenvolvi o projeto Clone Amazon Prime como parte dos meus estudos na Danki.Code. O projeto consistiu em criar um layout semelhante ao da plataforma de streaming Amazon Prime e em realizar requisições de API para exibir informações de filmes e séries. Foi um desafio interessante que me permitiu aplicar meus conhecimentos em design e programação, além de me familiarizar com as tecnologias de requisição de API.",
            languages: ["HTML", "CSS", "Jquery"],
            image: Projeto4,
            projectLink: "https://danki-code-clone-amazon.vercel.app/",
            githubLink: "https://github.com/fehbr800/Danki-Code-FrontEnd/tree/main/amazon-youtube",
        },

        {

            title: "Challenge Alura Decodificador de Texto",
            description: "Desenvolvi o Decodificador de Texto, um projeto em HTML, CSS e JavaScript como parte do desafio de portfolio da Alura. Este programa é capaz de criptografar e descriptografar texto. Este projeto foi uma excelente oportunidade para praticar minhas habilidades em HTML, CSS e JavaScript e me desafiar a desenvolver uma solução prática e funcional para um problema de criptografia de texto.",
            languages: ["HTML", "CSS", "JavaScript"],
            image: Projeto5,
            projectLink: "https://challenge-alura-decodificador-texto.vercel.app/",
            githubLink: "https://github.com/fehbr800/Challenge-Alura-Decodificador-Texto",
        },
        {

            title: "Avancy.co",
            description: "Na criação da página institucional da Avancy, utilizei o Next.js para otimizar o desempenho e o SEO, garantindo uma entrega rápida de conteúdo. Com o Tailwind CSS, desenvolvi uma interface responsiva e personalizada, resultando em uma página que reflete a identidade da empresa com profissionalismo e modernidade.",
            languages: [ "NextJs", "TailwindCss"],
            image: Projeto6,
            projectLink: "https://avancy.co",
           
        },
        {

            title: "Pagina de Vagas Agro Vagas",
            description: "Para a página de Vagas da Agro Vagas, utilizei o Next.js para garantir um carregamento rápido e otimizado, melhorando a experiência do usuário e o SEO. Com o Tailwind CSS, criei uma interface clara e responsiva, facilitando a navegação e a busca por oportunidades, resultando em uma página que alia funcionalidade e eficiência, alinhada com a identidade profissional da Agro Vagas.",
            languages: [ "NextJs", "TailwindCss", "Golang"],
            image: Projeto7,
            projectLink: "https://agrovagas.avancy.co/",
           
        },
        {

            title: "Agro Vagas",
            description: "Para a página da Agro Vagas, utilizei o Next.js para garantir um carregamento rápido e otimizado, melhorando a experiência do usuário e o SEO. Com o Tailwind CSS, criei uma interface clara e responsiva, facilitando a navegação e a busca por oportunidades, resultando em uma página que alia funcionalidade e eficiência, alinhada com a identidade profissional da Agro Vagas.",
            languages: [ "NextJs", "TailwindCss"],
            image: Projeto8,
            projectLink: "https://www.agrovagas.com/",
           
        },
        
    ]);


    return (



        <div className=" card-container d-flex justify-content-center align-items-center flex-wrap row p-0 m-0">

            <div className="titulo text-center mb-5">
                <h2>Projetos</h2>
            </div>
            <div className="project-card d-flex flex-wrap justify-content-center p-0 ">


                {projects.map((project) => (

                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        languages={project.languages}
                        image={project.image}
                        projectLink={project.projectLink}
                        githubLink={project?.githubLink}
                    />
                ))}
            </div>
        </div>

    );


};



