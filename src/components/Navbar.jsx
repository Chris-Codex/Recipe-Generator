import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);

  // Function to toggles the navigation components on mobile view
  const handleToggle = () => {
    setToggleHamburger((prevState) => !prevState);
  };

  return (
    <header className="w-full h-auto ">
      <div className="flex flex-row justify-between max-w-[1240px]  p-10 mx-auto items-center">
        <div className="flex flex-row items-center gap-10">
          <h1 className="text-3xl font-bold text-[#f17373]">Recipes.</h1>
          <nav className="hidden">
            <ul className="flex flex-row text-[#646464]">
              <li className="p-4">Home</li>
              <li className="p-4">Recipe</li>
              <li className="p-4">Search</li>
              <li className="p-4">Contact</li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row justify-between items-center space-x-[30px]">
          <p className="text-[#646464] hidden">Sign in</p>
          <div className="sm:w-full h-[40px]  bg-[#f17373] rounded-full hidden">
            <p className="text-[#fff] text-center pt-2">Sign up</p>
          </div>
          <GiHamburgerMenu size={20} color="#646464" onClick={handleToggle} />
        </div>
        {/*Mobile View*/}
        {toggleHamburger ? (
          <nav className="fixed top-0 right-0 w-[60%] bg-[#000] px-3 h-full border-r border-r-[#cbcbcb]">
            <div className="flex flex-row justify-between items-center pt-4 ">
              <h4 className="text-2xl font-bold text-[#f17373]">Recipes.</h4>
              <AiOutlineClose size={20} color="#fff" onClick={handleToggle} />
            </div>
            <ul className="flex-col pt-[10px] text-[#646464] text-[15px] uppercase">
              <li className="p-4  border-b border-b-[#cbcbcb29]">Home</li>
              <li className="p-4 border-b  border-b-[#cbcbcb29]">Recipe</li>
              <li className="p-4 border-b  border-b-[#cbcbcb29]">Search</li>
              <li className="p-4 border-b  border-b-[#cbcbcb29]">Contact</li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
