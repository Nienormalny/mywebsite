import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import {baseCommands} from '../utils/commands';
import Navigation from './navigation.component';

const HelloPage = () => {
    return (
        <section id="hello-page">
            <h1>H<span className="text-green">e</span>llo Frien<span className="text-green">d</span>...</h1>
        </section>
    );
};

export default HelloPage;