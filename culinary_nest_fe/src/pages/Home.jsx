import React, { useEffect } from "react";

export default function Home() {
  const fetchDataCategory = () => {
    console.log("hello world");
  };

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <div>
      <div className="home">
        <img className="bg-home" src="assets/home.png" alt="Culiner" />
        <img src="assets/Title_CulinaryNest.png" alt="Title" />
      </div>
    </div>
  );
}
