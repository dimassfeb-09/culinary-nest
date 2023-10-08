import { faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import RangeTime from "../helpers/rangeTime";
import { Star } from "@mui/icons-material";

const CardRecommendation = ({
  photos,
  title,
  description,
  address,
  open,
  closed,
}) => {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col border rounded-md w-96 mt-5 h-96 text-sm">
      <div>
        <img src={photos[0].image_url || "assets/image-404.png"} alt="" />
        <Star />
      </div>
      <div className="flex flex-col justify-between h-full p-2">
        <div>
          <h5 className="text-lg font-bold">{title}</h5>
          <p>{description}</p>
        </div>

        <div className="flex gap-5 text-xs sm:text-sm">
          {/* Lokasi dan Ikon Lokasi */}
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt} // Menggunakan ikon lokasi
              className="h-4 w-4 mr-2 text-red-500"
            />
            <p>Lokasi: {address}</p>
          </div>
          {/* Waktu Buka dan Ikon Jam */}
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faClock} // Menggunakan ikon jam
              className="h-4 w-4 mr-2 text-gray-500"
            />
            <p className="text-xs">
              {RangeTime(open, closed) == 24 ? (
                <p>24 hours</p>
              ) : (
                <p>
                  {open}-{closed}
                </p>
              )}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecommendation;
