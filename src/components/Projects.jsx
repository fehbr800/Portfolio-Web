import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import Projeto1 from "../assets/img/projeto1.png";
import Projeto2 from "../assets/img/projeto2.png";
import Projeto3 from "../assets/img/projeto3.png";
import Projeto4 from "../assets/img/projeto4.png";

export const Projects = () => {

    const projects = ([

        {

            title: "DH Flix",
            description: "Primeiro Checkpoint em grupo de 7 membros, onde estive to da instituição Digital House, da matéria Front-end I. Com finalidade de colocar em prática todo o conhecimentos adquirido na matéria ",
            languages: ["JavaScript", "CSS", "HTML", "Bootstrap", "Git", "GitHub"],
            image: Projeto1,
            projectLink: "https://digital-house-checkpoint2-frontend.vercel.app/",
            githubLink: "https://github.com/fehbr800/Digital-House-Checkpoint2-Frontend-",
        },
        {

            title: "Game-Cards",
            description: "Segundo Projeto desenvolvido em trio, da matéria Front-End II, com a finalidade de colocar em prática todo o conhecimento adquirido na matéria",
            languages: ["JavaScript", "CSS", "HTML", "Bootstrap", "Git", "GitHub"],
            image: Projeto2,
            projectLink: "https://digital-house-checkpoint1-front-end2.vercel.app",
            githubLink: "https://github.com/fehbr800/Digital-House-Checkpoint1-Front-End2",
        },
        {

            title: "Movie DB",
            description: "Projeto pessoal desenvolvido a fim de estudos",
            languages: ["ReactJS", "Node.Js", "Bootstrap", "HTML", "CSS"],
            image: Projeto3,
            projectLink: "https://react-filmes-eight.vercel.app",
            githubLink: "https://github.com/fehbr800/React-Filmes",
        },
        {

            title: "Clone Amazon Prime",
            description: "Projeto desenvolvido em estudo pela instituição Danki.Code",
            languages: ["HTML", "CSS", "Jquery"],
            image: Projeto4,
            projectLink: "https://danki-code-clone-amazon.vercel.app/",
            githubLink: "https://github.com/fehbr800/Danki-Code-FrontEnd/tree/main/amazon-youtube",
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
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>

    );


};



