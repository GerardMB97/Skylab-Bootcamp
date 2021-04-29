/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './PersonalProfile.css';
import avatar from '../../avatar.jpg';

export default function UserInfo() {
  return (
    <div className="background">
      <section className="personal-profile container">
        <div className="profile__info">
          <div className="info__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="info__details">
            <p className="detail__name">Gerard Mangues</p>
            <p className="detail__position">Full Stack developer</p>
            <div className="detail__contact">
              <dl>
                <dt>AGE:</dt>
                <dd>24</dd>
                <dt>PHONE:</dt>
                <dd>664884276</dd>
                <dt>EMAIL:</dt>
                <dd>gerardcoding@gmail.com</dd>
                <dt>ADDRESS:</dt>
                <dd>Barcelona Arnau 2, Spain</dd>
              </dl>
              <nav className="contact__social">
                <a href="https://github.com/GerardMB97"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/gerard-mangues/"><AiFillLinkedin /></a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
