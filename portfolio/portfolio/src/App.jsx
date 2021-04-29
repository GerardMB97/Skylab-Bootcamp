import React from 'react';

import StickyHeader from './components/StickyHeader';
import PersonalProfile from './components/PersonalProfile';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import MyProjects from './components/MyProjects';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <>
      <StickyHeader />
      <PersonalProfile />
      <AboutMe />
      <Resume />
      <MyProjects />
      <GetInTouch />
    </>
  );
}

export default App;
