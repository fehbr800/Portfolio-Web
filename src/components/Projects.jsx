import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import Projeto1 from "../assets/img/projeto1.png";
import Projeto2 from "../assets/img/projeto2.png";
import Projeto3 from "../assets/img/projeto3.png";

export const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [projects, setProjects] = useState([

        {

            title: "DH Flix",
            description: "Primeiro Checkpoint em grupo de 7 membros da instituição Digital House. Matéria Front-end I. Com finalidade de colocar em prática todo o conhecimentos adquirido na matéria ",
            languages: ["JavaScript", "CSS", "HTML", "Bootstrap", "Git", "GitHub"],
            image: Projeto1,
            category: "Digital House",
            projectLink: "https://digital-house-checkpoint2-frontend.vercel.app/",
            githubLink: "https://github.com/fehbr800/Digital-House-Checkpoint2-Frontend-",
        },
        {

            title: "Game-Cards",
            description: "Segundo Projeto desenvolvido em trio, da matéria Front-End II, com a finalidade de colocar em prática todo o conhecimento adquirido na matéria",
            languages: ["JavaScript", "CSS", "HTML", "Bootstrap", "Git", "GitHub"],
            image: Projeto2,
            category: "Digital House",
            projectLink: "https://digital-house-checkpoint1-front-end2.vercel.app",
            githubLink: "https://github.com/fehbr800/Digital-House-Checkpoint1-Front-End2",
        },
        {

            title: "Movie DB",
            description: "Projeto desenvolvido a fim de estudos",
            languages: ["ReactJS", "Node.Js", "Bootstrap", "HTML", "CSS"],
            image: Projeto3,
            category: "Projetos Pessoais",
            projectLink: "https://react-filmes-eight.vercel.app",
            githubLink: "https://github.com/fehbr800/React-Filmes",
        },
    ]);
    const categories = ['Digital House', 'Danki.Code', 'Projetos Pessoais'];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);


    return (



        <div className="portfolio align-items-center flex-wrap p-4">

            <h2>Projetos</h2>
            <p>
                Projetos desenvolvidos ao longo de minha jornada
            </p>
            <ul className="categories d-flex justify-content-center align-content-center flex-wrap ">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
            <div className=" d-flex justify-content-center flex-wrap">
                {filteredProjects.map((project) => (
                    <div className=" project-card d-flex justify-content-center flex-wrap">
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            languages={project.languages}
                            image={project.image}
                            projectLink={project.projectLink}
                            githubLink={project.githubLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    );


};



