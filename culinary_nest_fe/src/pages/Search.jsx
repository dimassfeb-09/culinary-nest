import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_URL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import CardResto from "../components/CardResto";

const Search = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const currentCity = queryParams.get("city") || "";
  const navigate = useNavigate();

  const [searchCity, setSearchCity] = useState("");
  const [restaurant, setRestaurant] = useState("");

  const handleCityChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleSearch = () => {
    if (searchCity) {
      navigate(`?city=${searchCity}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const fetchDataRestaurants = async () => {
    try {
      //   const res = axios.get(`${BASE_URL}/api/restaurants?city=${currentCity}`);
      //   setRestaurant(res.data.data);

      setRestaurant([
        {
          id: 1,
          title: "Warung Pak Wardi",
          description: "Warung Pak Wardi is ...",
          address: "Jl Kusuma",
          open: "string",
          closed: "string",
          city: "Bekasi",
          category: "Cafe",
          photo_restaurant: ["http://google.com/image.png"],
        },
        {
          id: 2,
          title: "Warung Pak Wardi",
          description: "Warung Pak Wardi is ...",
          address: "Jl Kusuma",
          open: "string",
          closed: "string",
          city: "Bekasi",
          category: "Cafe",
          photo_restaurant: ["http://google.com/image.png"],
        },
        {
          id: 3,
          title: "Warung Pak Wardi",
          description: "Warung Pak Wardi is ...",
          address: "Jl Kusuma",
          open: "string",
          closed: "string",
          city: "Bekasi",
          category: "Cafe",
          photo_restaurant: ["http://google.com/image.png"],
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDataRestaurants();
  }, []);

  useEffect(() => {
    if (currentCity) {
      setSearchCity(currentCity);
    }
  }, []);

  return (
    <>
      {/* // Header */}
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
      </div>
      <div className="bg-cover bg-hero-search h-[300px] w-full">
        <div className="h-[300px] w-full bg-black/50  flex justify-center items-center">
          <div className="text-4xl md:text-7xl font-bold text-white">
            Taste Map of {currentCity}
          </div>
        </div>
      </div>

      {/* Linked to home */}
      <div className="w-full mt-6 mb-8 px-5">
        <div className="flex items-center">
          <Link to="/">Home</Link>
          <span className="mx-2" style={{ fontSize: "1.5rem" }}>
            {" "}
            &gt;{" "}
          </span>
          <div>{currentCity} Destination</div>
        </div>
        <div className="border-[1px] border-solid border-black"></div>
      </div>

      {/* Pilihan */}
      <div className="flex flex-nowrap">
        <div>
          <img src="/assets/Most_Popular.png" alt="most popular"></img>
        </div>
        <div>
          <img src="/assets/Typical_Food.png" alt="Typical Food"></img>
        </div>
        <div>
          <img
            className="fig-size"
            src="/assets/Family_Choice.png"
            alt="Family Choice"
          ></img>
        </div>
      </div>
      <div className="flex flex-col mx-5 sm:mx-10 lg:mx-20 mt-20">
        <CardResto
          title={"Restoran 1"}
          imageUrl={"/assets/resto1.png"}
          description={
            "Our restaurant provides a stunning garden feel from the moment you step inside. Surrounded by shady trees, beautiful ornamental plants, and colorful flowers, visitors will feel"
          }
          rating={5}
          open={"18.00"}
          location={"Bekasi, Jawa Barat"}
        />
        <CardResto
          title={"Restoran 2"}
          imageUrl={"/assets/resto2.png"}
          description={
            "Our restaurant provides a stunning garden feel from the moment you step inside. Surrounded by shady trees, beautiful ornamental plants, and colorful flowers, visitors will feel"
          }
          rating={5}
          open={"18.00"}
          location={"Bekasi, Jawa Barat"}
        />
      </div>
    </>
  );
};

export default Search;
