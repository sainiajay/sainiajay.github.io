import React from 'react';
import './App.css';

import Hello from './components/Hello/Hello';
import Skills from './components/Skills/Skills';

const  App = () => {
  return (
    <div className="App">
      <div className="Nav-Links-Container">
        <a className="Nav-Link" href="/#">
          About Me
        </a>
        <a className="Nav-Link" href="/#">
          Projects
        </a>
        <a className="Nav-Link" href="/#">
          Work Experience
        </a>
        <a className="Nav-Link" href="/#">
          Education
        </a>
      </div>
      <Hello />
      <Skills />
      <div className="Social-Links">
        <i className="lni lni-linkedin" />
        <i className="lni lni-github" />
        <i className="lni lni-stackoverflow" />
        <i className="lni lni-twitter" />
        <i className="lni lni-medium" />
      </div>
    </div>
  );
}

export default App;
