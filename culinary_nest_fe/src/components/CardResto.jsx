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
    <div className="flex flex-col md:flex-row justify-between border-2 border-stone-200 mb-5">
      {/* Image */}
      <div className="h-64 w-full  md:h-56 md:w-56  bg-teal-500">
        <img className="w-full h-full" src={imageUrl} alt={title}/>
      </div>


       {/*Content*/}
      <div className="flex flex-col justify-between w-full p-5">
        <div>
          {/* Title */}
          <span className="text-lg font-semibold mb-2">{title}</span>

          <div className="flex justify-between">
            {/* Stars */}
            <div className="flex items-center mb-2">
              <span>{stars}</span>
            </div>
            {/* Menu */}
            <div>
              <Link to="/menu" className="underline pl-2 text-red-500">
                Menu
              </Link>
            </div>
          </div>

          {/* Description */}
          <div className="text-sm lg:text-lg text-justify w-full h-20 overflow-hidden">{description}</div>
        </div>

        <div className="flex gap-4 mt-2 items-center text-sm">
          {/* Lokasi dan Ikon Lokasi */}
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt} // Menggunakan ikon lokasi
              className="h-4 w-4 mr-2 text-red-500"
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
