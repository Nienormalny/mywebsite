import React, { useState } from 'react';
import * as _ from 'lodash';
import {RegExps} from '../utils/config';

const MiniEditor = () => {
    const [codeLines, setCodeLines] = useState({
        html: 1,
        css: 1
    });
    const [codeAreaHeight, setCodeAreaHeight] = useState({
        html: 0,
        css: 0
    })
    const handleHTML = (e) => {
        const value = e.target.value;
        const lines = value.split(/\r*\n/).length;
        const linesPreviewHeight = document.getElementById('html-lines').scrollHeight;

        setCodeLines({...codeLines, html: parseFloat(lines)});
        setCodeAreaHeight({...codeAreaHeight, html: linesPreviewHeight + 15});

        if (new RegExp(RegExps.html2, 'g').test(value)) {
            const preview = document.getElementById('preview');
            preview.innerHTML = value;
        }
        if (value === '') {
            setCodeAreaHeight({...codeAreaHeight, html: 0});
        }
    }
    const handleCSS = (e) => {
        const value = e.target.value;
        const lines = value.split(/\r*\n/).length;
        const linesPreviewHeight = document.getElementById('css-lines').scrollHeight;

        setCodeLines({...codeLines, css: parseFloat(lines)});
        setCodeAreaHeight({...codeAreaHeight, css: linesPreviewHeight + 15});

        if (new RegExp(RegExps.css, 'igm').test(value)) {
            const stylePreview = document.getElementById('preview-style');
            stylePreview.innerHTML = value;
        }
        if (value === '') {
            setCodeAreaHeight({...codeAreaHeight, css: 0});
        }
    }
    return (
        <section id="mini-editor">
            <h1>Mini Editor</h1>

            <div className="flex-box">
                <div className="editor-box">
                    <div className="html">
                        <h2>HTML</h2>
                        <div className="box">
                            <ul id="html-lines">
                                {_.times(codeLines.html, (i) => {
                                    return <li key={i + '-html'}>{i + 1}.</li>
                                })}
                            </ul>
                            <textarea style={{height: codeAreaHeight.html}} onChange={(e) => handleHTML(e)}/>
                        </div>
                    </div>
                    <div className="css">
                        <h2>CSS</h2>
                        <div className="box">
                            <ul id="css-lines">
                                {_.times(codeLines.css, (i) => {
                                    return <li key={i + '-css'}>{i + 1}.</li>
                                })}
                            </ul>
                            <textarea style={{height: codeAreaHeight.css}} onChange={(e) => handleCSS(e)}/>
                        </div>
                    </div>
                </div>
                <div className="preview-box">
                    <h2>Preview</h2>
                    <div id="preview" className="preview"/>
                    <style id="preview-style"/>
                </div>
            </div>
        </section>
    )
}

export default MiniEditor;