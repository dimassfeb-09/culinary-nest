import { Rating } from "@mui/material";
import React, { useState } from "react";

const DetailResto = () => {
  return (
    <div className="flex justify-center">
      <div className="border w-1/2 flex flex-col items-center">
        {/* // Header
      <div className="h-20 w-full bg-primary text-white flex items-center justify-between px-5">
        <Link to={"/"}>
          <div className="title flex gap-5 p-5">
            <img className="w-12" src="/assets/Logo.png" alt="Logo" />
            <img
              className="h-12"
              src="/assets/Title_CulinaryNest.png"
              alt="Logo"
            />
          </div>
        </Link>
        <div className="w-1/2 h-12 text-black">
          <input
            type="text"
            className="w-full h-full rounded-full px-5"
            value={searchCity}
            onChange={handleCityChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/assets/search.png"
            className="h-7 w-7 sm:h-[45px] sm:w-[45px]"
            alt="filter"
          />
          <Link
            to="/register"
            className="px-1 py-1 lg:px-8 lg:py-2 bg-button-gray text-sm md:text-lg rounded-full text-black"
          >
            Sign Up
          </Link>
        </div>
      </div> */}

        {/* Grid */}
        <div className="h-96 flex  mt-20">
          <div className="h-full border-r border">
            <img className="h-full" src="assets\detailresto1.png" />
          </div>

          <div class="flex flex-col h-96">
            <div className="h-1/2 border-l border-b border">
              <img className="h-full" src="assets\detailresto2.png" />
            </div>
            <div className="flex h-1/2">
              <div className="border-t border-l border-r">
                <img className="h-full" src="assets\detailresto4.png" />
              </div>
              <div className="border-l border-t ">
                <img className="h-full" src="assets\detailresto3.png" />
              </div>
            </div>
          </div>
        </div>

        {/* Resto Name */}
        <div className="p-2">
          <div>
            {/* Title */}
            <p className="text-4xl font-black mb-2">Restoran 1</p>
          </div>

          {/* Stars */}
          <div className="flex items-center mb-2">
            <Rating name="read-only" value={5} readonly />
          </div>

          {/* Description */}
          <div className="text-sm h-24 lg:text-lg text-justify md:text-justify">
            The Charming Palette Bistro is a stunning restaurant that combines
            the magic of culinary arts with a dazzling artistic feel. Located in
            Bandung City, this restaurant has elegant and charming decoration,
            with a soft and warm color palette that creates a relaxed and
            comfortable atmosphere. With soft lighting and artistic accents,
            this place is suitable for a variety of occasions, from romantic
            dates to important business meetings. The Charming Palette Bistro is
            renowned for its extensive culinary menu, including upscale dishes
            with fresh and innovative ingredients served with a creative twist.
            This is the perfect place to celebrate taste and artistry in food in
            a charming setting.
          </div>
        </div>

        {/* Button Menu */}
        <div className="w-full">
          <button className="h-14 w-full mt-36 bg-primary text-xl text-white font-bold">
            Menu
          </button>
        </div>

        {/* Linked to details */}
        <div>
          <link to="/details">Details</link>
        </div>
      </div>
    </div>
  );
};

export default DetailResto;
