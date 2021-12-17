import React from "react";
import data from "@constants/data";

const Gallery = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Gallery
        </h1>
        <p className="text-[#1f2937] dark:text-[#b2b2b2] font-normal text-3xl -mt-20 pl-8">
          My life in media
        </p>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {data.gallery.map(({ url, desc }, idx) => (
            <ImageCard url={url} desc={desc} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ImageCard = ({ url, desc }) => {
  return (
    <div className="flex justify-between m-6">
      <div className="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
        <img
          className="rounded-lg rounded-b-none h-[500px] object-cover"
          src={url}
          alt="thumbnail"
          loading="lazy"
        />
        <div className="px-4  py-3 space-y-2">
          <p className="text-gray-400 font-normal leading-5 tracking-wide">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
