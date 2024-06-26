import React, { useState } from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { BASE_URL } from "../constants/BASE_URL";
import axios from "axios";
import { CardGlass } from "../components/CardGlass";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(BASE_URL + "/auth/login", {
        email: email,
        password: password,
      });
      if (res.status === 200) {
        console.log("BERHASIL LOGIN");
      } else {
        throw Error("Gagal login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="h-screen w-full bg-primary">
      <Link to={"/"}>
        <div className="title flex gap-2 p-5 absolute">
          <img className="h-12 w-12" src="/assets/Logo.png" alt="Logo" />
          <img
            className="h-12"
            src="/assets/Title_CulinaryNest.png"
            alt="Logo"
          />
        </div>
      </Link>
      <div className="w-full h-full flex items-center">
        <div className="w-full md:w-1/2 translate-y-8 px-5 md:px-10">
          <div className="flex flex-col justify-center gap-4 items-center">
            <div className="text-white text-7xl font-bold">Welcome!</div>
            <div className="text-white text-sm text-center">
              Welcome back to CulinaryNest! Please enter your credentials to log
              in to your account.
            </div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <form
              className="flex flex-col w-full gap-5"
              onSubmit={handleSubmit}
            >
              <TextField
                label="Email"
                value={email}
                placeholder="Enter your email"
                onChange={handleChangeEmail}
              />
              <TextField
                label="Password"
                value={password}
                placeholder="Enter your password"
                onChange={handleChangePassword}
              />
              <button type="submit">
                <Button title="Login" />
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 text-white gap-1">
            <div>Don't have an account?</div>
            <Link to={"/register"} className="font-bold text-sm">
              Register Here!
            </Link>
          </div>
        </div>
        <div className="bg-home hidden md:block sm:h-screen sm:w-1/2">
          <div className="absolute bottom-0 mt-auto">
            <CardGlass />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
