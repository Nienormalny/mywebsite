import React, { useState } from 'react';
import './styles/style.scss';
import Projects from './components/projects.component';
import HelloPage from './components/hellopage.component';

function App() {
  const [pr, setPr] = useState(false);
  const [hp, setHp] = useState(true);
  return (
    <div className="App">
      {hp && <HelloPage/>}
      {pr && <Projects />}
    </div>
  );
}

export default App;
