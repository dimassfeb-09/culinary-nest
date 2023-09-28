import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_URL";

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
    <div>
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
        <Link
          to="/register"
          className="px-8 py-2 bg-button-gray text-lg rounded-full text-black"
        >
          Sign Up
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Search;
