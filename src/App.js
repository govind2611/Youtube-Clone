import React, { useState } from "react";


import SearchBar from "./Components/SearchBar";
import VideoList from "./Components/VideoList";
import VideoPlay from "./Components/VideoPlay";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <SearchBar addVideos={setVideos} className="search-bar" />

      <div className="container">
        <div className="video-container">
          <VideoPlay video={selectedVideo} className="video-play" />
        </div>

        <div className="video-list-container">
          <VideoList
            videos={videos}
            videoChosen={setSelectedVideo}
            className="video-list"
          />
        </div>
      </div>
    </div>
  );
};

export default App;