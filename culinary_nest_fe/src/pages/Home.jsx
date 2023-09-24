import React, { useEffect } from "react";
import {Link} from "react-router-dom";

export default function Home() {
  const fetchDataCategory = () => {
    console.log("hello world");
  };

  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <div className="container">
      <div className="image-container">
        <nav className="header" draggable="false">
          <img src="assets/Logo.png" className="logo" alt="bg" draggable="false"/>
          <Link to='/login' className="register_btn" draggable="false">Sign Up</Link>
        </nav>
        <img
            src="assets/Title_CulinaryNest.png"
            className="culinaryNestImage"
            alt="bg"
            draggable="false"
        />
      </div>
    </div>
  );
}
