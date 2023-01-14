import React, { useState } from 'react';
import CardProject from './ProjectCard';
import scrollImg from '../assets/img/scroll.png';
import { projects, moreProjects } from '../data/projectsData';

import '../styles/components/Projects.sass';

function Projects() {
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState('Mais');

  const togleShowMore = () => {
    setShow(!show);
    if (show) setBtnText('Mais');
    else setBtnText('Menos');
  };

  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="cardContainer">
        {
            projects.map((project) => (
              <CardProject
                key={project.id}
                {...project}
              />
            ))
          }
      </div>
      { show && (
      <div className="cardContainer" hidden>
        {
              moreProjects.map((project) => (
                <CardProject
                  key={project.id}
                  {...project}
                />
              ))
            }
      </div>
      )}
      <div className="showMore">
        <button type="button" onClick={togleShowMore}>
          {btnText}
          <img src={scrollImg} alt="" />
        </button>
      </div>
    </section>
  );
}

export default Projects;
