import React from "react";
import lang from "../utils/language";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const langKey=useSelector((store)=>store.changeLang.lang)
  return (
    <div className="">
      <div className="bgImage h-screen absolute top-0 -z-10 w-full"></div>
      <div className="flex justify-center mt-20 ">
        <form className="bg-black p-4 rounded">
          <input
            placeholder={lang[langKey].searchPlaceholder}
            className="px-1 md:w-[500px] h-10 rounded"
          />
          <button className="px-2 bg-red-500 rounded mx-1 h-10">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;