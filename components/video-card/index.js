import React from 'react'

import VideoThumb from '../video-thumb'

import './styles.css'

const formatDate = dateISO => (
    dateISO.split('T')[0].split('-').reverse().join('/')
)

const truncateDescription = description => {
    if (description.length > 50) {
        return description.slice(0, 47) + '...';
    }

    return description;
}

const VideoCard = props => (
    <div className="video-card">
        <div className="video-card__thumb">
            <VideoThumb url={props.thumbUrl} />
        </div>
        <div className="video-card__details">
            <div className="video-card__title">
                {props.title}
            </div>
            <div className="video-card__date">
                {formatDate(props.date)}
            </div>
            <div className="video-card__description">
                {truncateDescription(props.description)}
            </div>
        </div>
    </div>
);

export default VideoCard;
