import React from "react";

const Gallery = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Gallery
        </h1>
        <p className="text-[#1f2937] dark:text-[#b2b2b2] font-normal text-3xl -mt-20 pl-8">My life in media</p>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          <ImageCard />
        </div>
      </div>
    </section>
  );
};

const ImageCard = () => {
  return (
    <div className="flex justify-between m-6">
      <div className="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
        <img
          className="rounded-lg rounded-b-none h-[500px] object-cover"
          src="https://hmroakcxqcchmjnuqrlq.supabase.in/storage/v1/object/public/supakan-bucket/Photo.jpg"
          alt="thumbnail"
          loading="lazy"
        />
        <div className="flex justify-between -mt-4 px-4">
          <span className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5">
            Tech
          </span>
        </div>
        <div className="px-4 space-y-2">
          <p className="text-gray-400 font-normal leading-5 tracking-wide">
            Taken in Jodhpur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
