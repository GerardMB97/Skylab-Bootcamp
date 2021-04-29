import React from 'react';
import { PropTypes } from 'prop-types';

export default function ProgressBar({ skill, barWidth }) {
  return (

    <div className="skill__bar">
      <p>
        <span>{skill}</span>
        <span>{barWidth}</span>
      </p>
      <div className="progress">
        <div className="progress__bar" style={{ width: barWidth }} />
      </div>
      <div />
    </div>

  );
}
ProgressBar.propTypes = {
  skill: PropTypes.string.isRequired,
  barWidth: PropTypes.string.isRequired
};
