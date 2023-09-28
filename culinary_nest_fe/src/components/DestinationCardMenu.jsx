import React from "react";
import { useNavigate } from "react-router-dom";

const DestinationCardMenu = () => {
  const navigate = useNavigate();

  const handleClick = (city) => {
    navigate(`/search?city=${city}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-lg">
      <div
        className="px-10 border-[0.5px] border-black rounded-full text-center hover:bg-btn-destination"
        onClick={() => handleClick("Ambon")}
      >
        Ambon
      </div>
      <div
        className="px-10 border-[0.5px] border-black rounded-full text-center hover:bg-btn-destination"
        onClick={() => handleClick("Bandung")}
      >
        Bandung
      </div>
      <div
        className="px-10 border-[0.5px] border-black rounded-full text-center hover:bg-btn-destination"
        onClick={() => handleClick("Bali")}
      >
        Bali
      </div>
      <div
        className="px-10 border-[0.5px] border-black rounded-full text-center hover:bg-btn-destination"
        onClick={() => handleClick("Jakarta")}
      >
        Jakarta
      </div>
      <div
        className="px-10 border-[0.5px] border-black rounded-full text-center hover:bg-btn-destination"
        onClick={() => handleClick("Surabaya")}
      >
        Surabaya
      </div>
      <div
        className="px-10 border-[0.5px] border-black rounded-full text-center hover:bg-btn-destination"
        onClick={() => handleClick("Manado")}
      >
        Manado
      </div>
    </div>
  );
};

export default DestinationCardMenu;
