import Profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
  const [rotate, setRotate] = useState(false);
  useEffect(() => {
    setRotate(true);
  }, []);
  return (
    <div className="w-full min-h-[calc(100vh-60px)] h-full grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-[#1c1c1c]  to-[#003366] text-[#bfbfbf] relative pb-20 lg:pb-0">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-start p-8 lg:pl-30">
        <TypeAnimation
          sequence={[
            "Hello!",
            1000, // Waits 1s
            "Mahmoud Awwad",
            (e) => e.classList.add("animate-pulse"), // Callback function after typing
          ]}
          wrapper="h1"
          cursor={false}
          className={`text-4xl min-h-[60px] md:text-6xl font-bold bg-gradient-to-r from-[#3d70c8] to-[#d64d68] bg-clip-text text-transparent mb-4`}
        />
        <p className="text-2xl md:text-3xl h-[36px] mb-8">
          Full Stack Developer <span className="text-blue-300">|</span> React{" "}
          <span className="text-blue-300">|</span> Node.js
        </p>
        <p className="text-lg md:text-xl mb-3">
          Passionate about building scalable web applications and exploring new
          technologies.
        </p>
        <a
          href="#projects"
          className="cursor-pointer bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-md font-semibold"
        >
          View Projects
        </a>
      </div>
      {/* Right Side */}
      <div className="flex justify-center items-center p-8 ">
        <div className="h-min relative w-[18rem] sm:w-[22rem] lg:w-[25rem] xl:w-[30rem]">
          <div
            className={`w-full h-full absolute ${
              rotate ? "-rotate-10" : ""
            } bg-green-300 transition-transform duration-500`}
          ></div>
          <div
            className={`w-full h-full absolute ${
              rotate ? "-rotate-5" : ""
            } bg-cyan-400 transition-transform duration-500`}
          ></div>
          <div
            className={`w-full h-full absolute ${
              rotate ? "rotate-5" : ""
            } bg-blue-300 transition-transform duration-500`}
          ></div>
          <div
            className={`w-full h-full absolute ${
              rotate ? "rotate-10" : ""
            } bg-emerald-400 transition-transform duration-500`}
          ></div>
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-auto shadow-lg rotate-0 relative z-40"
          />
        </div>
      </div>
      {/* Scroll Button */}
      <a
        // onClick={() =>
        //   window.scrollTo({
        //     top: heroRef.current.scrollHeight,
        //     behavior: "smooth",
        //   })
        // }
        href="#projects"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300 text-md font-semibold animate-bounce cursor-pointer"
      >
        <FaArrowDown className="size-6" />
      </a>
    </div>
  );
};

export default Hero;
