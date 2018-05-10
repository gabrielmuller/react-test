import React from 'react'

import VideoCard from '../../components/video-card'

import './styles.css'

const url = "http://i.dailymail.co.uk/i/pix/2011/02/26/article-0-0D5AAEC7000005DC-596_634x543.jpg"
class VideoListView extends React.Component {
    constructor() {
        super()

        this.state = {
            videos: [],
        }
    }

    render() {
        return (
            <div className="video-list">
                {this.state.videos.map(video => (
                    <VideoCard
                        /*thumbUrl={video.thumbUrl}
                        title={video.title}
                        date={video.date}
                        description={video.description}*/
                        {...video}
                    />
                ))}
                <VideoCard thumbUrl={url}
                    title="Um vídeo magnífico"
                    date="2018-05-08T20:38:00Z"
                    description="Orangotango comendo maçã com uma graciosidade indescritível!"
                />
            </div>
        )
    }
}

export default VideoListView;
