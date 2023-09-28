import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardCategory from "../components/CardCategory";
import { KeyboardArrowDown } from "@mui/icons-material";
import DestinationCardMenu from "../components/DestinationCardMenu";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [showDestination, setShowDestination] = useState(false);

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    if (keyword) {
      // Arahkan ke halaman pencarian dengan parameter kota
      navigate(`/search?city=${keyword}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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
              to="/register"
              className="px-8 py-2 bg-button-gray text-lg rounded-full text-black"
            >
              Sign Up
            </Link>
          </nav>
          <img
            className="absolute px-14 sm:px-0 sm:w-1/2"
            src="/assets/Title_CulinaryNest.png"
            draggable="false"
            alt="Logo"
          />
          <div className="z-50 absolute bottom-0  translate-y-14 find-city px-10 py-7 shadow-2xl md:h-40 rounded-3xl w-3/4 md:w-1/2 bg-white">
            <div className="flex items-center justify-between">
              <p className="font-bold text-sm sm:text-xl">Enter your city</p>
              <div className="flex gap-5 mr-8">
                <div
                  className="px-2 text-sm sm:text-xl sm:px-5 rounded-md bg-primary text-white"
                  onClick={() => setShowDestination(!showDestination)}
                >
                  Destination <KeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className="h-10 mt-5 border-2 border-black rounded-full flex items-center px-5">
              <img
                src="/assets/logos_google-maps.png"
                alt="maps"
                className="h-6 w-6"
              />
              <div className="border-l-2 h-5 mx-2"></div>
              <input
                className="w-full ml-2 outline-0"
                type="text"
                value={keyword}
                onChange={handleChangeKeyword}
                onKeyDown={handleKeyPress}
                placeholder="Bali"
              />
            </div>
            <div
              className={
                showDestination
                  ? "absolute right-0 -translate-x-10 sm:translate-x-24 -translate-y-14 z-10 bg-white py-3 px-2 rounded-md border"
                  : "hidden"
              }
            >
              <DestinationCardMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="flex z-10 translate-y-20 px-20 justify-center items-center flex-col md:flex-row">
        <img
          src="/assets/our_serve.png"
          className="h-full w-full sm:w-1/2"
          draggable="false"
          alt="Our Serve"
        />
        <div className="flex flex-col items-center sm:items-start md:w-1/2 gap-5">
          <div className="text-5xl font-bold">Our Serve</div>
          <div className="text-lg text-justify ">
            Discover the perfect dining spot that matches your taste, budget,
            and preferences with trusted reviews, a variety of delicious dishes,
            and exclusive discounts all in one place.
          </div>
        </div>
      </div>

      <div className="w-full h-14 mt-32 bg-explore">
        <div className="text-xl font-bold text-white flex justify-center items-center w-full h-14 bg-black bg-opacity-70">
          Explore Eateries Tailored to You
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10 py-5">
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <CardCategory title={"Restaurant"} />
          <CardCategory title={"Cafe"} />
          <CardCategory title={"Steak House"} />
          <CardCategory title={"Food Court"} />
          <CardCategory title={"Seafood Shack"} />
          <CardCategory title={"Tea House"} />
        </div>
      </div>

      <div className="w-full h-16 mt-14 bg-explore">
        <div className="text-white flex flex-col justify-center items-center w-full h-16 bg-black bg-opacity-70">
          <div className="text-xl font-bold">Top Recommendation</div>
          <div>based on user reviews</div>
        </div>
      </div>

      <div className="w-full flex flex-col mb-20 justify-center items-center mt-20 gap-14">
        <div className="text-5xl font-bold">Let's Join Us !</div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex flex-col justify-center items-center gap-5">
            <img
              src="/assets/services/rate.png"
              height={80}
              width={80}
              alt=""
            />
            <div className="text-lg font-bold">Trusted Reviews</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <img
              src="/assets/services/coupon.png"
              height={80}
              width={80}
              alt=""
            />
            <div className="text-lg font-bold">Discount Information</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <img
              src="/assets/services/filter.png"
              height={80}
              width={80}
              alt=""
            />
            <div className="text-lg font-bold">Food Filters</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <img
              src="/assets/services/menu.png"
              height={80}
              width={80}
              alt=""
            />
            <div className="text-lg font-bold">Menu Options</div>
          </div>
        </div>
      </div>
    </>
  );
}
