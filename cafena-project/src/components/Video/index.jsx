import React from 'react';
import ReactPlayer from 'react-player';


function Video() {
    return (

        <ReactPlayer style={{ zIndex: '3' }}
            url="https://www.youtube.com/watch?v=SqcY0GlETPk&t=8s"
            width="640px"
            height="360px"
            controls
        />
    )
}

export default Video