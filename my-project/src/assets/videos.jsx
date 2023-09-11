import React from 'react';
import video from './Videos.video1.mp4'

const VideoPlayer = () => {
  return (
    <div>
      <h2>Video Player</h2>
      <video src={video} width="800" height="400" controls />
    </div>
  );
};

export default VideoPlayer;
