import React, {useEffect, useState} from 'react';
import * as _ from 'lodash';
import axios from 'axios';
import moment from 'moment';

function Projects() {
    const [myRepos, setRepos] = useState(undefined);

    useEffect(() => {
        axios.get(window.encodeURI(`https://api.github.com/users/Nienormalny/repos`)).then(response => {
            console.log('AXIOS', response);
            setRepos(response.data);
        });
    }, []);

    return (
        <section>
            <h1>My public projects</h1>
            <div className="flex-box">
                {myRepos && _.map(myRepos, (repo, key) => {
                    return (
                        <div className="repo-box" key={key}>
                            <div className="dotted-border">
                                <span className="top"></span>
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <span className="left"></span>
                            </div>
                            <h3>{repo.name}</h3>
                            <ul>
                                <li className="start-date"><b>Created at:</b> {moment(repo.created_at).format('DD-MM-YYYY')}</li>
                            </ul>
                            <div className="description">
                                {repo.description}
                                <div className="dotted-border orange">
                                    <span className="top"></span>
                                    <span className="right"></span>
                                    <span className="bottom"></span>
                                    <span className="left"></span>
                                </div>
                            </div>
                            <a href={repo.html_url} target="blank" className="btn m-top-auto">
                                Go to repository
                                <div className="dotted-border">
                                    <span className="top"></span>
                                    <span className="right"></span>
                                    <span className="bottom"></span>
                                    <span className="left"></span>
                                </div>
                            </a>
                            {repo.homepage && repo.homepage !== "" && <a href={repo.homepage} target="blank" className="btn btn-secondary">
                                Go to website
                                <div className="dotted-border">
                                    <span className="top"></span>
                                    <span className="right"></span>
                                    <span className="bottom"></span>
                                    <span className="left"></span>
                                </div>
                            </a>}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Projects;