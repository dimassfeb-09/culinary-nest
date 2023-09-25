import React from "react";

export const CardGlass = () => {
    return (
        <div className="w-96 h-80 relative">
            <div className="w-96 h-80 left-0 top-0 absolute bg-gradient-to-r from-zinc-300 to-neutral-200 rounded-2xl border-2 border-white" />
            <div className="w-96 left-[33px] top-[65px] absolute text-justify text-white text-3xl font-medium font-['Roboto']">Culinary Nest is a website that makes it easy for you to find places to eat that suit your culinary tastes and budget. Our features include menu search, discount filters, reviews, and custom recommendations. Explore endless food options and enjoy an unforgettable culinary experience with Culinary Nest!</div>
        </div>
    );
};