import React from "react";

const VideoTitle = ({ singleMovie }) => {
  return (
    <div className="w-screen aspect-video text-white overflow-hidden">
      <div className="px-10 w-96 relative lg:top-30 md:top-10 top-8 md:text-xl">
        <h1 className="font-bold pb-4 lg:text-3xl sm:text-xl">{singleMovie.original_title}</h1>
        <p className="text-sm  text-justify">{singleMovie.overview}</p>
        <div className="flex gap-4 pt-2">
        <button className="bg-white rounded text-black w-20 ">Play</button>
        <button className="bg-white rounded text-black w-20 ">More</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
