import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCard({
  img, tittle, description, stack
}) {
  return (
    <div className="project-card">
      <div className="project__img">
        <img src={img} alt="" />
      </div>
      <div className="project__info">
        <h3>{tittle}</h3>
        <p>{description}</p>
        <p>Used Stack:</p>
        <ul className="tags">
          {stack.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired

};
