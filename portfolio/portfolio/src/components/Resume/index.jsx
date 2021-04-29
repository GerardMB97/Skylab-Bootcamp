import React from 'react';
import ProgressBar from '../ProgressBar';
import './Resume.css';

export default function Resume() {
  const skills = [{ name: 'JavaScript', mastery: '90%' }, { name: 'typescript', mastery: '65%' }, { name: 'Python', mastery: '70%' }, { name: 'html5', mastery: '70%' }, { name: 'CSS3', mastery: '80%' }, { name: 'React', mastery: '75%' }, { name: 'Redux', mastery: '90%' }, { name: 'Angular', mastery: '60%' }, { name: 'React - Native', mastery: '80%' }];
  const languages = ['catalan', 'english', 'spanish'];
  return (
    <section id="resume" className="container section">
      <h2>Resume_</h2>
      <p>
        I discovered what programming was during the 2020 pandemic, I started enrolling in online
        courses and investigating on my own, but it was in 2021 that my path as a developer really
        began.
        I figured out programming was something I really enjoyed so I decided to get some guidance
        in my learning process. That is why,
        in January 2021 I joined the Skylab Coders Academy full stack Bootcamp in Barcelona,
        an intensive project oriented 3 months training program, currently ranked as the best
        Bootcamp in the world by SwitchUp
      </p>

      <section className="education">
        <h3 className="education__title">Education</h3>
        <div className="education__timeline">
          <span className="dot" />
          <h4>Skylab Coders Academy</h4>
          <p className="timeline__date">2021</p>
          <p>
            Full stack web development bootcamp, over +1.200 hours of programming, rated as
            the best bootcamp in the world in 2021 by SwitchUp. There I gained a really solid basis
            on both JavaScript, and good practices. Which has allowed me to keep learning
            by myself once finnished.
          </p>
        </div>
      </section>
      <section className="skills">

        <div className="skills-container">
          <h3 className="skills__title">General skills</h3>
          {skills.map((skill) => <ProgressBar skill={skill.name} barWidth={skill.mastery} />)}
        </div>

        <div className="skills-container">
          <h3 className="skills__title">Languages</h3>
          {languages.map((language) => <ProgressBar skill={language} barWidth="100%" />)}
        </div>

      </section>

    </section>
  );
}
