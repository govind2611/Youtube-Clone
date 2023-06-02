import React, { useState, useEffect } from "react";
import youtube from "../APIS/Youtube";


const SearchBar = ({ addVideos }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  function getYoutubeVideos() {
    youtube
      .get("/search", {
        params: {
          q: searchTerm,
          type: "video",
        },
      })
      .then((response) => addVideos(response.data.items))
      .catch((error) => console.log(error));
  }

  const handleSearch = () => {
    getYoutubeVideos();
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
