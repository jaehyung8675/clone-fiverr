import React from 'react';
import './ProjectCard.scss';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link className='link' to='/'>
      <div className='project-card'>
        <img src={project.img} alt={project.cat} />
        <div className='info'>
          <img src={project.pp} alt={project.cat} />
          <div className='copy'>
            <h2>{project.cat}</h2>
            <span>{project.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
