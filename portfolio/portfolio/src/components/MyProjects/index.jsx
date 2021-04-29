/* eslint-disable no-console */
import React from 'react';
import ProjectCard from '../ProjectCard';
import projects from '../../constants/projects';

import './MyProjects.css';

export default function MyProjects() {
  return (
    <section className="container section" id="portfolio">
      <h2>My Projects_</h2>
      {projects[0].stack && projects.map(({
        img, tittle, description, stack
      }) => <ProjectCard img={img} tittle={tittle} description={description} stack={stack} />)}
    </section>
  );
}
