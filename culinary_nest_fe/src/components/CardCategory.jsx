import React from "react";

const CardCategory = ({ image, title }) => {
  return (
    <div className="py-2 sm:py-5 md:py-0 w-52 md:h-56 md:w-80 border rounded-xl shadow-lg flex flex-col gap-2 items-center justify-center bg-white">
      <img
        src="/assets/category/category_01.png"
        className="h-3/4 w-full px-5"
        alt="category_01"
      />
      <div className="text-xl font-bold">{title}</div>
    </div>
  );
};

export default CardCategory;
