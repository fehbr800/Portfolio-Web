import React from "react";
import { ProjectCard } from "./ProjectCard";
import Projeto1 from "../assets/img/projeto1.png";
import Projeto2 from "../assets/img/projeto2.png";
import Projeto3 from "../assets/img/projeto3.png";

export const Projects = () => {
    const projects = [
        {
        
            title: "DH Flix",
            description: "Primeiro Checkpoint em grupo de 7 membros da instituição Digital House. Matéria Front-end I. Com finalidade de colocar em prática todo o conhecimentos adquirido na matéria ",
            languages: ["JavaScript", "CSS", "HTML", "Bootstrap", "Git", "GitHub"],
            image: Projeto1,
            projectLink: "https://digital-house-checkpoint2-frontend.vercel.app/",
            githubLink: "https://github.com/fehbr800/Digital-House-Checkpoint2-Frontend-",
        },
        {
          
            title: "Game-Cards",
            description: "Segundo Projeto desenvolvido em trio, da matéria Front-End II, com a finalidade de colocar em prática todo o conhecimento adquirido na matéria",
            languages: ["JavaScript", "CSS", "HTML", "Bootstrap","Git", "GitHub"],
            image: Projeto2,
            projectLink: "https://digital-house-checkpoint1-front-end2.vercel.app",
            githubLink: "https://github.com/fehbr800/Digital-House-Checkpoint1-Front-End2",
        },
        {
          
            title: "Movie DB",
            description: "Projeto desenvolvido a fim de estudos",
            languages: ["ReactJS", "Node.Js", "Bootstrap", "HTML", "CSS"],
            image: Projeto3,
            projectLink: "https://react-filmes-eight.vercel.app",
            githubLink: "https://github.com/fehbr800/React-Filmes",
        },
    ];

    return (
        <div className="d-flex justify-content-center flex-wrap p-0">
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
    );
};


