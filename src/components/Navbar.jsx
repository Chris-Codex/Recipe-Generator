import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="w-full mx-auto">
      <div className="w-full flex flex-row space-x-16  items-center px-[170px] pt-[30px] pb-[30px]">
        <h1 className="text-3xl font-bold text-[#f17373]">Recipes.</h1>
        <div className="flex flex-row justify-between items-center w-full">
          <nav className="w-full">
            <ul className="flex flex-row w-full items-center  text-[#646464]">
              <li className="p-4">Home</li>
              <li className="p-4">Recipe</li>
              <li className="p-4">Search</li>
              <li className="p-4">Contact</li>
            </ul>
          </nav>
          <div className="flex flex-row w-full space-x-6 justify-end items-center">
            <p className="text-[#646464] p-4">Sign in</p>
            <div className="w-3/12 h-[40px] rounded-full bg-[#f17373]">
              <div className="flex justify-center pt-2  items-center">
                <p className="text-[#fff]">Sign Up</p>
              </div>
            </div>
            <GiHamburgerMenu size={20} color="#000" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
