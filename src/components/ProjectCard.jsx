import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ProjectDetails from './ProjectDetail';

import '../styles/components/ProjectCard.sass';

function ProjectCard({
  title, img, video, description, gitLink, deployLink,
}) {
  const [popup, setPopup] = useState(false);

  const showPopup = () => {
    setPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const hidePopup = () => {
    setPopup(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div className="card" onClick={showPopup}>
        <div className="cardImg">
          <img src={img} alt="" />
          <div className="title">
            <h4>{title}</h4>
          </div>
        </div>
      </div>
      {popup && (
      <ProjectDetails
        title={title}
        video={video}
        description={description}
        gitLink={gitLink}
        deployLink={deployLink}
        event={hidePopup}
      />
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  deployLink: PropTypes,
  description: PropTypes,
  gitLink: PropTypes,
  img: PropTypes,
  video: PropTypes,
  title: PropTypes,
}.string;

export default ProjectCard;
