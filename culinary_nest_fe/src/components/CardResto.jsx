import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import the Link component

const CardResto = ({
  imageUrl,
  title,
  rating,
  description,
  location,
  open,
}) => {
  // Looping untuk gambar icon bintang
  const stars = Array.from({ length: rating }, (_, index) => (
    <span className="text-yellow-500 text-xl" key={index}>
      &#9733;
    </span>
  ));

  return (
    <div className="container flex items-center border-2 border-stone-200 mb-5">
      {/* Image */}
      <div className="w-36 h-36 mr-6">
        <img
          src={imageUrl}
          alt="Gambar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        <div>
          {/* Title */}
          <span className="text-lg font-semibold mb-2">{title}</span>

          <div class="flex space-x-4">
            {/* Stars */}
            <div className="flex items-center mb-2">
              <span>{stars}</span>
            </div>
            {/* Menu */}
            <div>
              <Link to="/menu" className="underline ml-8 pl-2 text-red-500">
                Menu
              </Link>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-justify">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
          {/* Lokasi dan Ikon Lokasi */}
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt} // Menggunakan ikon lokasi
              className="h-4 w-4 mr-2 text-gray-500"
            />
            <p>Lokasi: {location}</p>
          </div>
          {/* Waktu Buka dan Ikon Jam */}
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faClock} // Menggunakan ikon jam
              className="h-4 w-4 mr-2 text-gray-500"
            />
            <p>Waktu Buka: {open}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardResto;
