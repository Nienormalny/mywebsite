import React, {useEffect, useState} from 'react';
import * as _ from 'lodash';
import classnames from 'classnames';
import {baseCommands} from '../utils/commands';

let myinput;

const Navigation = ({onSelect}) => {
    const [inputsArray, setInputsArray] = useState(['start']);
    const [toggle, setToggle] = useState(true);
    const pages = [
        'Projects',
        'About me',
        'Videos',
        'Home'
    ]

    const handleEnter = (e, ind) => {
        const target = e.target;
        if (e.key === 'Enter') {
            const fragment = document.createDocumentFragment();
            let el;
            console.log(target.value.trim().indexOf('cdls'), target.value.trim())

            setInputsArray([...inputsArray, target.value]);
            if (_.includes(baseCommands, target.value.split(' ')[0])) {
                if (target.value === 'ls') {
                    el = document.createElement('ul');
                    el.classList.add('pages');

                     _.map(pages, page => {
                        el.innerHTML += `<li>${page}</li>`
                    });
                } else if (_.includes(pages, target.value.split('cd')[1].trim())) {
                    onSelect(target.value.split('cd')[1].trim());
                } else {
                    el = document.createElement('p');
                    el.classList.add('not-found');
                    el.innerHTML = `Command "<span>${target.value}"</span>" not found.`;
                }
            } else {
                el = document.createElement('p');
                el.classList.add('not-found');
                el.innerHTML = `Command "<span>${target.value}"</span>" not found.`;
            }

            fragment.append(el);
            target.setAttribute('disabled', true);
            target.setAttribute('autofocus', false);
            target.classList.add('disabled');
            target.parentElement.appendChild(fragment);
        }
    }
    return (
        <div className={classnames("flex-box", {closed: toggle})} id="navigation" onClick={(e) => {
            if (e.target.parentElement.classList.contains('closed')) {
                setToggle(!toggle);
                setTimeout(() => {
                    myinput.focus();
                }, 400)
            }
        }}>
            <div className="close-btn" onClick={(e) => {
                if (!e.target.parentElement.classList.contains('closed')) {
                    setToggle(!toggle);
                }
            }}>
            <div className="dotted-border">
                    <span className="top"></span>
                    <span className="right"></span>
                    <span className="bottom"></span>
                    <span className="left"></span>
                </div>
                <span className="line-1"></span>
                <span className="line-2"></span>
            </div>
            <div className="dotted-border">
                <span className="top"></span>
                <span className="right"></span>
                <span className="bottom"></span>
                <span className="left"></span>
            </div>
            <div className="command-box" disabled>
                {_.map(inputsArray, (e, i) => {
                    return (
                        <div className="input-box" key={i}>
                            <span>nienormalny@nienormalny.org:</span>
                            <input className="standard-input" placeholder="" type="text" autoFocus={true} onKeyDown={(e) => handleEnter(e, i)} ref={ip => myinput = ip} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Navigation;