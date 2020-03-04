import React, { useEffect, useState } from 'react';
import * as _ from 'lodash';
import axios from 'axios';
import {Apis} from '../utils/config';

const Videos = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search?key='+ Apis.GOOGLEAPI +'&channelId=UCMViGP-LyHRtsr5uGcnig1w&part=snippet,id&order=date&maxResults=50').then(res => {
            setVideos(res.data.items);
        });
    }, []);

    const openInNewTab = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <section id="videos">
            <h1>My Youtube Videos</h1>
            <div className="flex-box">
                {!_.isEmpty(videos) && _.map(videos, (video, index) => {
                    console.log(video)
                    return video.id.kind === 'youtube#video' && (
                        <div className="video" key={index} onClick={() => openInNewTab('https://www.youtube.com/watch?v=' + video.id.videoId)}>
                            <div className="dotted-border">
                                <span className="top"></span>
                                <span className="right"></span>
                                <span className="bottom"></span>
                                <span className="left"></span>
                            </div>
                            <div className="video-details">
                                <div className="title">
                                    <h3 className="text-green">{video.snippet.title}</h3>
                                </div>
                                <img className="thumb" src={video.snippet.thumbnails.high.url}/>
                            </div>
                            <div className="tags">
                                {_.map(video.snippet.tags, tag => {
                                    return <span>{tag}</span>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
};

export default Videos;