import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <>
      <nav className="sticky top-0 overflow-auto bg-gradient-to-r bg-[#1c1c1c]  to-[#142942] text-white w-full shadow-xl flex items-center justify-center px-5 py-3 z-50">
        <div className="container items-center flex justify-between">
          <a
            href="#"
            className="text-3xl font-bold bg-gradient-to-r from-[#3d70c8] to-[#d64d68] bg-clip-text text-transparent cursor-pointer"
          >
            Mahmoud Awwad
          </a>
          <ul className="list-none hidden md:flex">
            <li>
              <a
                href="#"
                className="ml-8 text-lg hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="ml-8 text-lg hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="ml-8 text-lg hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="ml-8 text-lg hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              >
                About
              </a>
            </li>
          </ul>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          >
            <FaBars className="text-white hover:text-blue-500 transition-colors duration-300" />
          </button>
        </div>
      </nav>
      <div
        className={`${
          isMenuOpened ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-full top-[60px] left-0 bg-[#1c1c1c] shadow-lg fixed z-50 transition-transform duration-300 ease-in-out`}
      >
        <ul className="list-none flex flex-col items-center text-[#bfbfbf] py-4">
          <li className="border-b border-gray-700 w-full text-center py-1">
            <a
              href="#"
              className="text-lg hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              onClick={() => setIsMenuOpened(false)}
            >
              Home
            </a>
          </li>
          <li className="border-b border-gray-700 w-full text-center py-1">
            <a
              href="#projects"
              className="text-lg hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              onClick={() => setIsMenuOpened(false)}
            >
              Projects
            </a>
          </li>
          <li className="border-b border-gray-700 w-full text-center py-1">
            <a
              href="#contact"
              className="text-lg hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              onClick={() => setIsMenuOpened(false)}
            >
              Contact
            </a>
          </li>
          <li className="w-full text-center py-1">
            <a
              href="#about"
              className="text-lg hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              onClick={() => setIsMenuOpened(false)}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
