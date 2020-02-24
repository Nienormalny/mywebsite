import React, { useState, useEffect } from 'react';
import './styles/style.scss';
import Projects from './components/projects.component';
import HelloPage from './components/hellopage.component';
import Navigation from './components/navigation.component';
import classnames from 'classnames';
import Videos from './components/videos.component';

function App() {
  const [pr, setPr] = useState(false);
  const [hp, setHp] = useState(true);
  const [vp, setVp] = useState(false);
  const [toggleHelp, setToggleHelp] = useState(false);
  const [reloadNav, setReloadNav] = useState(true);

  useEffect(() => {
    if (!reloadNav) {
      setReloadNav(true);
    }
  }, [reloadNav]);

  return (
    <div className="App">
      {hp && <HelloPage onSelect={page => {
        if (page === 'Projects') {
          setPr(!pr);
        }
        setHp(false);
      }}/>}
      {pr && <Projects />}
      {reloadNav && <Navigation onSelect={page => {
        if (page === 'Projects') {
          setHp(false);
          setVp(false);
          setPr(true);
          setReloadNav(!reloadNav);
        } else if (page === 'Home') {
          setPr(false);
          setVp(false);
          setHp(true);
          setReloadNav(!reloadNav);
        }
        else if (page === 'Videos') {
          setPr(false)
          setHp(false);
          setVp(true);
          setReloadNav(!reloadNav);
        }
      }}/>}
      <div className={classnames('help', {open: toggleHelp})} onClick={() => setToggleHelp(!toggleHelp)}>
        <div className="dotted-border">
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
        </div>
        {toggleHelp && <div>
          <p>Commands:</p>
          <ul>
            <li>ls - to see available pages</li>
            <li>cd - for selecting pages</li>
          </ul>
          <p>To go in another page type <span className="text-red">"cd "</span> and available page from <span className="text-red">"ls"</span>.</p>
          <p>Example: <span className="text-red">cd Projects</span></p>
        </div>}
      </div>
      {vp && <Videos/>}
    </div>
  );
}

export default App;
