import React from 'react';

import './GetInTouch.css';

export default function GetInTouch() {
  return (
    <div id="getintouch" className="section--background">
      <section className="container section">
        <h2>Get in Touch_</h2>
        <div className="contact">
          <div className="contact__info">
            <dl>
              <dt>PHONE:</dt>
              <dd>664884276</dd>
              <dt>EMAIL:</dt>
              <dd>gerardcoding@gmail.com</dd>

            </dl>
          </div>
          <div className="contact__form">
            <p>Or just write me a letter here_</p>
            <textarea type="text" placeholder="Your name" />
            <textarea type="text" placeholder="Your e-mail" />
            <textarea type="text" placeholder="Leave your message here" />
          </div>
        </div>
      </section>
    </div>
  );
}
