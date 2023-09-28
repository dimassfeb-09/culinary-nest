import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_URL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";

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
          <img src="assets\search.png" alt="filter" height={45} width={45} />
          <Link
            to="/register"
            className="px-8 py-2 bg-button-gray text-lg rounded-full text-black"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="bg-cover bg-hero-search h-[300px] w-full">
        <div className="h-[300px] w-full bg-black/50  flex justify-center items-center">
          <div className="text-7xl font-bold text-white">Taste Map of Bali</div>
        </div>
      </div>

      {/* Linked to home */}
      <div className="w-full mt-6 mb-8 mx-10">
        <div className="flex items-center">
          <Link to="/">Home</Link>
          <span className="mx-2" style={{ fontSize: "1.5rem" }}>
            {" "}
            &gt;{" "}
          </span>
          <div>Bali Destination</div>
        </div>
        <hr className="my-2" style={{ borderTop: "1px solid #000" }} />
      </div>

      {/* Pilihan */}
      <div className="flex flex-nowrap">
        <div>
          <img src="assets\Most_Popular.png" alt="most popular"></img>
        </div>
        <div>
          <img src="assets\Typical_Food.png" alt="Typical Food"></img>
        </div>
        <div>
          <img
            className="fig-size"
            src="assets\Family_Choice.png"
            alt="Family Choice"
          ></img>
        </div>
      </div>
      <div className="grid grid-flow-row auto-rows-max">
        <div className="container h-80 mx-auto flex items-center border-2 border-stone-200 mb-5 mt-5">
          <div className="grid grid-rows-3 grid-flow-col gap-4 w-full">
            <div className="row-span-3">
              {/* Gambar (01) */}
              <img
                src="assets\resto1.png"
                alt="Gambar"
                className="w-64 h-80 object-cover"
              />
            </div>
            <div className="col-span-2 mt-4">
              {/* Judul dengan Rating (01) */}
              <h1 className="text-3xl font-semibold mb-2">Judul Gambar</h1>
              <div className="flex items-center">
                {/* Rating Bintang (Anda bisa menambahkannya sesuai kebutuhan) */}
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-gray-400 text-xl">☆</span>
              </div>
            </div>
            <div className="row-span-2 col-span-2 mt-4">
              {/* Deskripsi (01) */}
              <p className="mx-2 text-lg text-justify">
                Our restaurant provides a stunning garden feel from the moment
                you step inside. Surrounded by shady trees, beautiful ornamental
                plants, and colorful flowers, visitors will feel as if they are
                in the middle of a stunning flower garden. Our restaurant
                provides a stunning garden feel from the moment you step inside.
                Surrounded by shady trees, beautiful ornamental plants, and
                colorful flowers, visitors will feel as if they are in the
                middle of a stunning flower garden.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Lokasi dan Ikon Lokasi */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt} // Menggunakan ikon lokasi
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Lokasi: Nama Lokasi</p>
                </div>
                {/* Waktu Buka dan Ikon Jam */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faClock} // Menggunakan ikon jam
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Waktu Buka: 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container h-80 mx-auto flex items-center border-2 border-stone-200 mb-5">
          <div className="grid grid-rows-3 grid-flow-col gap-4 w-full">
            <div className="row-span-3">
              {/* Gambar (02) */}
              <img
                src="assets\resto2.png"
                alt="Gambar"
                className="w-64 h-80 object-cover"
              />
            </div>
            <div className="col-span-2 mt-4">
              {/* Judul dengan Rating (02) */}
              <h1 className="text-3xl font-semibold mb-2">Judul Gambar</h1>
              <div className="flex items-center">
                {/* Rating Bintang (Anda bisa menambahkannya sesuai kebutuhan) */}
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-gray-400 text-xl">☆</span>
              </div>
            </div>
            <div className="row-span-2 col-span-2 mt-4">
              {/* Deskripsi (02) */}
              <p className="mx-2 text-lg text-justify">
                Our restaurant provides a stunning garden feel from the moment
                you step inside. Surrounded by shady trees, beautiful ornamental
                plants, and colorful flowers, visitors will feel as if they are
                in the middle of a stunning flower garden. Our restaurant
                provides a stunning garden feel from the moment you step inside.
                Surrounded by shady trees, beautiful ornamental plants, and
                colorful flowers, visitors will feel as if they are in the
                middle of a stunning flower garden.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Lokasi dan Ikon Lokasi */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt} // Menggunakan ikon lokasi
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Lokasi: Nama Lokasi</p>
                </div>
                {/* Waktu Buka dan Ikon Jam */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faClock} // Menggunakan ikon jam
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Waktu Buka: 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container h-80 mx-auto flex items-center border-2 border-stone-200 mb-5">
          <div className="grid grid-rows-3 grid-flow-col gap-4 w-full">
            <div className="row-span-3">
              {/* Gambar (03) */}
              <img
                src="assets\resto3.png"
                alt="Gambar"
                className="w-64 h-80 object-cover"
              />
            </div>
            <div className="col-span-2 mt-4">
              {/* Judul dengan Rating (03) */}
              <h1 className="text-3xl font-semibold mb-2">Judul Gambar</h1>
              <div className="flex items-center">
                {/* Rating Bintang (Anda bisa menambahkannya sesuai kebutuhan) */}
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-gray-400 text-xl">☆</span>
              </div>
            </div>
            <div className="row-span-2 col-span-2 mt-4">
              {/* Deskripsi (03) */}
              <p className="mx-2 text-lg text-justify">
                Our restaurant provides a stunning garden feel from the moment
                you step inside. Surrounded by shady trees, beautiful ornamental
                plants, and colorful flowers, visitors will feel as if they are
                in the middle of a stunning flower garden. Our restaurant
                provides a stunning garden feel from the moment you step inside.
                Surrounded by shady trees, beautiful ornamental plants, and
                colorful flowers, visitors will feel as if they are in the
                middle of a stunning flower garden.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Lokasi dan Ikon Lokasi */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt} // Menggunakan ikon lokasi
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Lokasi: Nama Lokasi</p>
                </div>
                {/* Waktu Buka dan Ikon Jam */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faClock} // Menggunakan ikon jam
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Waktu Buka: 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container h-80 mx-auto flex items-center border-2 border-stone-200 mb-5">
          <div className="grid grid-rows-3 grid-flow-col gap-4 w-full">
            <div className="row-span-3">
              {/* Gambar (04) */}
              <img
                src="assets\resto4.png"
                alt="Gambar"
                className="w-64 h-80 object-cover"
              />
            </div>
            <div className="col-span-2 mt-4">
              {/* Judul dengan Rating (04) */}
              <h1 className="text-3xl font-semibold mb-2">Judul Gambar</h1>
              <div className="flex items-center">
                {/* Rating Bintang (Anda bisa menambahkannya sesuai kebutuhan) */}
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-gray-400 text-xl">☆</span>
              </div>
            </div>
            <div className="row-span-2 col-span-2 mt-4">
              {/* Deskripsi (04) */}
              <p className="mx-2 text-lg text-justify">
                Our restaurant provides a stunning garden feel from the moment
                you step inside. Surrounded by shady trees, beautiful ornamental
                plants, and colorful flowers, visitors will feel as if they are
                in the middle of a stunning flower garden. Our restaurant
                provides a stunning garden feel from the moment you step inside.
                Surrounded by shady trees, beautiful ornamental plants, and
                colorful flowers, visitors will feel as if they are in the
                middle of a stunning flower garden.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Lokasi dan Ikon Lokasi */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt} // Menggunakan ikon lokasi
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Lokasi: Nama Lokasi</p>
                </div>
                {/* Waktu Buka dan Ikon Jam */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faClock} // Menggunakan ikon jam
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Waktu Buka: 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container h-80 mx-auto flex items-center border-2 border-stone-200 mb-5">
          <div className="grid grid-rows-3 grid-flow-col gap-4 w-full">
            <div className="row-span-3">
              {/* Gambar (04) */}
              <img
                src="assets\resto5.png"
                alt="Gambar"
                className="w-64 h-80 object-cover"
              />
            </div>
            <div className="col-span-2 mt-4">
              {/* Judul dengan Rating (04) */}
              <h1 className="text-3xl font-semibold mb-2">Judul Gambar</h1>
              <div className="flex items-center">
                {/* Rating Bintang (Anda bisa menambahkannya sesuai kebutuhan) */}
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-gray-400 text-xl">☆</span>
              </div>
            </div>
            <div className="row-span-2 col-span-2 mt-4">
              {/* Deskripsi (04) */}
              <p className="mx-2 text-lg text-justify">
                Our restaurant provides a stunning garden feel from the moment
                you step inside. Surrounded by shady trees, beautiful ornamental
                plants, and colorful flowers, visitors will feel as if they are
                in the middle of a stunning flower garden. Our restaurant
                provides a stunning garden feel from the moment you step inside.
                Surrounded by shady trees, beautiful ornamental plants, and
                colorful flowers, visitors will feel as if they are in the
                middle of a stunning flower garden.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Lokasi dan Ikon Lokasi */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt} // Menggunakan ikon lokasi
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Lokasi: Nama Lokasi</p>
                </div>
                {/* Waktu Buka dan Ikon Jam */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faClock} // Menggunakan ikon jam
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Waktu Buka: 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container h-80 mx-auto flex items-center border-2 border-stone-200 mb-5">
          <div className="grid grid-rows-3 grid-flow-col gap-4 w-full">
            <div className="row-span-3">
              {/* Gambar (04) */}
              <img
                src="assets\resto6.png"
                alt="Gambar"
                className="w-64 h-80 object-cover"
              />
            </div>
            <div className="col-span-2 mt-4">
              {/* Judul dengan Rating (04) */}
              <h1 className="text-3xl font-semibold mb-2">Judul Gambar</h1>
              <div className="flex items-center">
                {/* Rating Bintang (Anda bisa menambahkannya sesuai kebutuhan) */}
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-gray-400 text-xl">☆</span>
              </div>
            </div>
            <div className="row-span-2 col-span-2 mt-4">
              {/* Deskripsi (04) */}
              <p className="mx-2 text-lg text-justify">
                Our restaurant provides a stunning garden feel from the moment
                you step inside. Surrounded by shady trees, beautiful ornamental
                plants, and colorful flowers, visitors will feel as if they are
                in the middle of a stunning flower garden. Our restaurant
                provides a stunning garden feel from the moment you step inside.
                Surrounded by shady trees, beautiful ornamental plants, and
                colorful flowers, visitors will feel as if they are in the
                middle of a stunning flower garden.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Lokasi dan Ikon Lokasi */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt} // Menggunakan ikon lokasi
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Lokasi: Nama Lokasi</p>
                </div>
                {/* Waktu Buka dan Ikon Jam */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faClock} // Menggunakan ikon jam
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Waktu Buka: 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container h-80 mx-auto flex items-center border-2 border-stone-200 mb-5">
          <div className="grid grid-rows-3 grid-flow-col gap-4 w-full">
            <div className="row-span-3">
              {/* Gambar (04) */}
              <img
                src="assets\resto7.png"
                alt="Gambar"
                className="w-64 h-80 object-cover"
              />
            </div>
            <div className="col-span-2 mt-4">
              {/* Judul dengan Rating (04) */}
              <h1 className="text-3xl font-semibold mb-2">Judul Gambar</h1>
              <div className="flex items-center">
                {/* Rating Bintang (Anda bisa menambahkannya sesuai kebutuhan) */}
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-gray-400 text-xl">☆</span>
              </div>
            </div>
            <div className="row-span-2 col-span-2 mt-4">
              {/* Deskripsi (04) */}
              <p className="mx-2 text-lg text-justify">
                Our restaurant provides a stunning garden feel from the moment
                you step inside. Surrounded by shady trees, beautiful ornamental
                plants, and colorful flowers, visitors will feel as if they are
                in the middle of a stunning flower garden. Our restaurant
                provides a stunning garden feel from the moment you step inside.
                Surrounded by shady trees, beautiful ornamental plants, and
                colorful flowers, visitors will feel as if they are in the
                middle of a stunning flower garden.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Lokasi dan Ikon Lokasi */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt} // Menggunakan ikon lokasi
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Lokasi: Nama Lokasi</p>
                </div>
                {/* Waktu Buka dan Ikon Jam */}
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faClock} // Menggunakan ikon jam
                    className="h-6 w-6 mr-2 text-gray-500"
                  />
                  <p className="text-lg">Waktu Buka: 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
