import React, {useEffect, useState} from 'react';
import * as _ from 'lodash';
import classnames from 'classnames';
import {YoutubeArchive, PhotoArchive} from '../utils/config';

const Archive = () => {
    const [vt, setVt] = useState(true);
    const [pt, setPt] = useState(false);

    const openTab = (e, tab) => {
        switch (tab) {
            case 'videos':
                setVt(true);
                setPt(false);
                break;
            case 'photos':
                setPt(true);
                setVt(false);
                break;
            default:
                setVt(true);
                setPt(false);
                return;
        }
    }

    return (
        <section id="archive">
            <h1>Title</h1>
            <div className="flex-box">
                <div className="btns-nav">
                    <div type="button" className={classnames("standard-btn blue-btn", {active: vt})} onClick={(e) => openTab(e, 'videos')}>
                        <div className="dotted-border">
                            <span className="top"></span>
                            <span className="right"></span>
                            <span className="bottom"></span>
                            <span className="left"></span>
                        </div>
                        <span>videos</span>
                    </div>
                    <div type="button" className={classnames("standard-btn orange-btn", {active: pt})} onClick={(e) => openTab(e, 'photos')}>
                        <div className="dotted-border">
                            <span className="top"></span>
                            <span className="right"></span>
                            <span className="bottom"></span>
                            <span className="left"></span>
                        </div>
                        <span>photos</span>
                    </div>
                </div>
                {vt && <div className="videos-box">
                    <div className="dotted-border">
                        <span className="top"></span>
                        <span className="right"></span>
                        <span className="bottom"></span>
                        <span className="left"></span>
                    </div>
                    <div className="videos">
                        {_.map(YoutubeArchive, (video, index) => {
                            return (
                                <div className="video" key={'video' + index}>
                                    <iframe src={"https://www.youtube.com/embed/" + video.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            )
                        })}
                    </div>
                </div>}
                {pt && <div className="photos-box">
                    <div className="photos">
                        {_.map(PhotoArchive, (photo, index) => {
                            return (
                                <div className={classnames("image", [photo.type])} key={'image' + index} onClick={(e) => {
                                    const target = e.target;
                                    const images = document.querySelectorAll('.image');
                                    _.map(images, img => {
                                        if (img.classList.contains('show')) {
                                            img.classList.remove('show');
                                        }
                                    });
                                    target.classList.toggle('show');
                                }}>
                                    <div className="dotted-border">
                                        <span className="top"></span>
                                        <span className="right"></span>
                                        <span className="bottom"></span>
                                        <span className="left"></span>
                                    </div>
                                    <h2>{photo.title}</h2>
                                    <img src={photo.url} alt={photo.title} />
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </div>
        </section>
    )
}

export default Archive;