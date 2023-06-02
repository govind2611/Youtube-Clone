import React from "react";


const VideoPlay = ({ video }) => {
  return (
    <div className="video-play-container">
      {video == null ? (
        <h1>Loading .... </h1>
      ) : (
        <div>
          <iframe
            width="100%"
            height="515"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          ></iframe>
          <div className="video-info">
            <h2 className="video-title">{video.snippet.title}</h2>
            <p className="video-description">{video.snippet.description}</p>
            <p className="video-channel">{video.snippet.channelTitle}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlay;
