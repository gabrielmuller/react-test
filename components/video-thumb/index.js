import React from 'react'

import './styles.css'


const VideoThumb = props => (
    <div className="video-thumb" style={{
        backgroundImage: `url("${props.url}")`,
    }}></div>
)

export default VideoThumb
