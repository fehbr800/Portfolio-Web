import React from "react";

export const ProjectCard = ({ title, description, languages, image, projectLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-content">
        <h3 className="mt-3">{title}</h3>
        <p>{description}</p>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <div className="links d-flex">
          <a target="_blank" className="mx-2 mt-3" href={projectLink}>Ver Projeto</a>
          <a target="_blank" className="mx-2 mt-3" href={githubLink}>Repositório</a>
          
        </div>
      </div>
    </div>
  );
};


