import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import '../styles/components/ProjectDetail.sass';

function ProjectDetail({
  title, video, description, gitLink, deployLink, event,
}) {
  return (
    <div className="detail-container">
      <div className="detail">
        <Icon className="close-detail" icon="mdi:close-circle" onClick={event} />
        <video controls="controls">
          <source src={video} type="video/mp4" />
          <track kind="captions" />
        </video>
        <h4>{title}</h4>
        <nav className="navProject">
          <a href={gitLink} target="_blank" rel="noreferrer">GitHub</a>
          <a href={deployLink} target="_blank" rel="noreferrer">Ver Online</a>
        </nav>
        <p>{description}</p>
      </div>
    </div>
  );
}

ProjectDetail.propTypes = {
  deployLink: PropTypes,
  description: PropTypes,
  gitLink: PropTypes,
  video: PropTypes,
  title: PropTypes,
}.string;

export default ProjectDetail;
