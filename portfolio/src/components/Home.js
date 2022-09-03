import React from "react";
import pic from "../img/pic.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-blue-900 to-purple-700"
    >
      {/* Container */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen pt-8 px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-screen pt-8 ">
          <p className="text-white text-2xl sm:text:4xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Bilal Vasa
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Front-End Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-md">
            I have experience in building web applications using technologies
            such as React, Tailwind and Bootstrap. Currently, I’m focused on
            building responsive web applications.
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-l from-blue-600 to-purple-800  hover:bg-gradient-to-r from-blue-600 to-purple-800">
              <Link to="project" smooth={true} duration={500}>
                View Work👇
              </Link>
            </button>
          </div>
        </div>
        <div className="pb-4 h-98">
          <img
            src={pic}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
