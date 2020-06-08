import React from 'react';
import './App.css';

function App() {
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
      <h1 className="App-header">AJAY SAINI</h1>
      <div className="Social-Links">
        <i class="lni lni-linkedin" />
        <i class="lni lni-github" />
        <i class="lni lni-stackoverflow" />
        <i class="lni lni-twitter" />
        <i class="lni lni-medium" />
      </div>
    </div>
  );
}

export default App;
