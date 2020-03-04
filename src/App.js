import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import './styles/style.scss';
import Projects from './components/projects.component';
import HelloPage from './components/hellopage.component';
import Navigation from './components/navigation.component';
import classnames from 'classnames';
import Videos from './components/videos.component';
import AboutMe from './components/aboutme.component';
import MiniEditor from './components/minieditor.component';
import Archive from './components/archive.component';

function App() {
  const [pr, setPr] = useState(false);
  const [hp, setHp] = useState(true);
  const [vp, setVp] = useState(false);
  const [ap, setAp] = useState(false);
  const [me, setMe] = useState(false);
  const [arp, setArp] = useState(false);
  const [toggleHelp, setToggleHelp] = useState(false);
  const [reloadNav, setReloadNav] = useState(true);
  const [eggs, setEggs] = useState({
    'ed': {
      title: 'Mini Editor',
      checked: false
    },
    'archive-x': {
      title: 'Archive X',
      checked: false
    }
  });

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
        console.log(page, page.toLowerCase())
        if (page === 'Projects') {
          setHp(false);
          setVp(false);
          setAp(false);
          setMe(false);
          setArp(false);
          setPr(true);
          setReloadNav(!reloadNav);
        } else if (page === 'Home') {
          setPr(false);
          setVp(false);
          setAp(false);
          setMe(false);
          setArp(false);
          setHp(true);
          setReloadNav(!reloadNav);
        }
        else if (page === 'Videos') {
          setPr(false);
          setHp(false);
          setAp(false);
          setMe(false);
          setArp(false);
          setVp(true);
          setReloadNav(!reloadNav);
        } else if (page === 'About me') {
          setPr(false)
          setHp(false);
          setVp(false);
          setMe(false);
          setArp(false);
          setAp(true);
          setReloadNav(!reloadNav);
        } else if (page === 'ed') {
          setPr(false)
          setHp(false);
          setVp(false);
          setAp(false);
          setArp(false);
          setMe(true);
          setReloadNav(!reloadNav);
          setEggs({...eggs, 'ed': {...eggs['ed'], checked: true}});
        } else if (page === 'archive-x') {
          setPr(false)
          setHp(false);
          setVp(false);
          setAp(false);
          setMe(false);
          setArp(true);
          setReloadNav(!reloadNav);
          setEggs({...eggs, 'archive-x': {...eggs['archive-x'], checked: true}});
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
      {ap && <AboutMe/>}
      {me && <MiniEditor/>}
      {arp && <Archive/>}
      <div id="egg-counter">
        <p>Find eggs</p>
        <div class="eggs">
          {_.map(eggs, (egg, key) => {
            return (
              <div className="egg" key={key}>
                <div className="dotted-border">
                  <span className="top"></span>
                  <span className="right"></span>
                  <span className="bottom"></span>
                  <span className="left"></span>
                </div>
                <span className={classnames('checkmark', {checked: egg.checked})}>&#10004;</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
