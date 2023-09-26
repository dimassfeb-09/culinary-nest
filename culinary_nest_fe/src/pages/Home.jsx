import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const fetchDataCategory = () => {
    console.log("hello world");
  };

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-teal-500">
        <div className="bg-hero-home h-screen bg-cover justify-center items-center flex">
          <nav className="absolute top-0 flex w-full px-14 mt-5 items-center justify-between">
            <img
              className="w-20 h-20"
              src="/assets/Logo.png"
              draggable="false"
              alt="Logo"
            />
            <Link
              to="/login"
              className="px-8 py-2 bg-button-gray text-lg rounded-full"
            >
              Log In
            </Link>
          </nav>
          <img
            className="absolute px-5 sm:px-0 sm:w-1/2"
            src="/assets/Title_CulinaryNest.png"
            draggable="false"
            alt="Logo"
          />
          <div className="absolute bottom-0 translate-y-14 find-city shadow-2xl md:h-40 rounded-3xl md:w-1/2 bg-white">
            <div className="flex items-center justify-between mx-20 my-8">
              <p className="font-bold text-xl ">Enter your city</p>
              <div className="flex gap-5">
                <div className="px-5 rounded-md bg-primary text-white">
                  Destination
                </div>
                <div className="px-5 rounded-md bg-primary text-white">
                  Explore
                </div>
              </div>
            </div>
            <div className="mx-20 h-10 border-2 border-black rounded-full flex items-center px-5">
              <img
                src="/assets/logos_google-maps.png"
                alt="maps"
                className="h-6 w-6"
              />
              <div className="border-l-2 h-5 mx-2"></div>
              <input
                className="w-full ml-2 outline-0"
                type="text"
                placeholder="Bali"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  translate-y-20 px-20 justify-center items-center ">
        <div className="w-[886px]">
          <img src="/assets/our_serve.png" draggable="false" alt="Our Serve" />
        </div>
        <div className="w-1/2 ">
          <div className="text-7xl font-bold">Our Serve</div>
          <div className="text-lg text-justify ">
            Discover the perfect dining spot that matches your taste, budget,
            and preferences with trusted reviews, a variety of delicious dishes,
            and exclusive discounts all in one place.
          </div>
        </div>
      </div>
    </>
  );
}
