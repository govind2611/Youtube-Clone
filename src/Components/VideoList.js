import React, { useEffect } from "react";


const VideoList = ({ videos, videoChosen }) => {
  useEffect(() => {
    if (videos.length > 0) {
      videoChosen(videos[0]);
    }
  }, [videos]);

  const handleVideoClick = (video) => {
    videoChosen(video);
  };

  const renderVideoItems = () => {
    if (videos.length <= 1) {
      return <div>No videos available</div>;
    }

    return videos.slice(1).map((video, index) => (
      <div
        key={index}
        className="video-item"
        onClick={() => handleVideoClick(video)}
      >
        <img
          className="thumbnail"
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />
        <div className="video-info">
          <h3 className="video-title">{video.snippet.title}</h3>
        </div>
      </div>
    ));
  };

  return <div className="video-list">{renderVideoItems()}</div>;
};

export default VideoList;
