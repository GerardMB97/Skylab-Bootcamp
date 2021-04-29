/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { BiMenu } from 'react-icons/bi';
import './StickyHeader.css';

export default function StickyHeader() {
  return (
    <div className="menu" id="menu">

      <div className="container">
        <div className="menu__wrapper">
          <button className="mobile-menu" type="button"><BiMenu /></button>
          <nav>
            <ul>
              <li>
                {' '}
                <a href="/#hello">HELLO</a>
              </li>
              <li><a href="/#resume">RESUME</a></li>
              <li><a href="/#portfolio">PORTFOLIO</a></li>
              <li>
                {' '}
                <a href="/#getintouch">GET IN TOUCH</a>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
