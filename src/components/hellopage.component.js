import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import {baseCommands} from '../utils/commands';

const HelloPage = ({onSelect}) => {
    const [inputsArray, setInputsArray] = useState(['start']);
    const pages = [
        'Projects',
        'About me',
        'Videos'
    ]

    useEffect(() => {
        console.log(inputsArray, baseCommands);
    }, [inputsArray]);

    const handleEnter = (e, ind) => {
        const target = e.target;
        if (e.key === 'Enter') {
            const fragment = document.createDocumentFragment();
            let el;

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
        <section id="hello-page">
            <h1>Hello Friend...</h1>
            <div className="flex-box">
                <div className="dotted-border">
                    <span className="top"></span>
                    <span className="right"></span>
                    <span className="bottom"></span>
                    <span className="left"></span>
                </div>
                <div className="command-box">
                    {_.map(inputsArray, (e, i) => {
                        console.log(i)
                        return (
                            <div className="input-box" key="i">
                                <span>nienormalny@nienormalny.org:</span>
                                <input className="standard-input" placeholder="" type="text" autofocus="true" onKeyDown={(e) => handleEnter(e, i)} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default HelloPage;