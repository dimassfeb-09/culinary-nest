import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const CardResto = ({imageUrl, title, rating, description, location, open}) => {

    // Looping untuk gambar icon bintang
    const stars = Array.from({ length: rating }, (_, index) => (
        <span className="text-yellow-500 text-xl" key={index}>&#9733;</span> // Menggunakan karakter bintang (☆) sebagai contoh
    ));

    return (
        <div className="container flex items-center border-2 border-stone-200 mb-5">
            <div className="grid grid-rows-3 grid-flow-col gap-5 w-full">
                <div className="row-span-3">
                    {/* Gambar dari parameter */}
                    <img
                        src={imageUrl}
                        alt="Gambar"
                        className="w-40 h-40 md:w-64 md:h-full object-cover"
                    />
                </div>
                <div className="col-span-2 mt-4">
                    {/* Judul dengan Rating (02) */}
                    <h1 className="text-xl sm:text-3xl font-semibold mb-2">{title}</h1>
                    <div className="flex items-center">
                        {/*Diambil dari variabel looping bintang*/}
                        {stars}
                    </div>
                </div>
                <div className="row-span-2 col-span-2 ">
                    {/* Deskripsi (02) */}
                    <p className="mx-2 text-sm md:text-lg text-justify" >
                        {description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm sm:text-lg">
                        {/* Lokasi dan Ikon Lokasi */}
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt} // Menggunakan ikon lokasi
                                className="h-6 w-6 mr-2 text-gray-500"
                            />
                            <p>Lokasi: {location}</p>
                        </div>
                        {/* Waktu Buka dan Ikon Jam */}
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                icon={faClock} // Menggunakan ikon jam
                                className="h-6 w-6 mr-2 text-gray-500"
                            />
                            <p>Waktu Buka: {open}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardResto;