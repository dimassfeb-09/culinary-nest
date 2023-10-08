import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CardResto from "../components/CardResto";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

const Search = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchRestaurant = queryParams.get("q") || "";
  const navigate = useNavigate();

  const [searchCity, setSearchCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const handleCityChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleSearch = () => {
    if (searchCity) {
      navigate(`?q=${searchCity}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const fetchDataRestaurants = async () => {
    try {
      setRestaurants([]);
      const res = await axios.get(
        `${BASE_URL}/restaurants/search?q=${searchRestaurant}`
      );
      setRestaurants(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDataRestaurants();
  }, [searchRestaurant]);

  useEffect(() => {
    if (searchRestaurant) {
      setSearchCity(searchRestaurant);
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
            placeholder="Search by resto name, city or district..."
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
            Taste Map of {searchRestaurant}
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
          <div>{searchRestaurant} Destination</div>
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
        {restaurants ? (
          restaurants.map((value) => {
            return (
              <CardResto
                key={value.id}
                title={value.title}
                imageUrl={value.photos[0].image_url}
                description={value.description}
                rating={5}
                open={value.open}
                closed={value.closed}
                location={value.address}
              />
            );
          })
        ) : (
          <div className="flex justify-center items-center text-3xl font-semibold mb-20">
            Data not found
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
