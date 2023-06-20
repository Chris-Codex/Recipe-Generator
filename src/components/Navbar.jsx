import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { SearchContext } from "../context/Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const { handleSearchToggle } = useContext(SearchContext);

  // Function to toggles the navigation components on mobile view
  const handleToggle = () => {
    setToggleHamburger((prevState) => !prevState);
  };

  return (
    <nav
      className="sticky top-0 bottom-0 z-50 bg-[#000] w-full h-auto"
      data-cy="container"
    >
      <div className="flex flex-row justify-between max-w-[1340px] p-10 mx-auto items-center">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="text-3xl font-bold text-[#18b648] ">
            <Link to="/">Recipes.</Link>
          </h1>
          <nav className="hidden md:flex">
            <ul className="flex flex-row text-[#fff]">
              <li className="p-4 hover:text-[#18b648]">
                <Link to="/" data-cy="Home">
                  Home
                </Link>
              </li>
              <li className="p-4 cursor-pointer hover:text-[#18b648]">
                <Link to="/recipe" data-cy="Recipe">
                  Recipe
                </Link>
              </li>
              <li
                className="p-4 cursor-pointer hover:text-[#18b648]"
                onClick={handleSearchToggle}
                data-cy="search-recipes"
              >
                Search Recipes
              </li>
            </ul>
          </nav>
          <div className="block md:hidden" onClick={handleToggle}>
            {toggleHamburger ? (
              <AiOutlineClose size={20} color="#000" onClick={handleToggle} />
            ) : (
              <GiHamburgerMenu size={25} color="#fff" />
            )}
          </div>
        </div>

        {/*Mobile View*/}
        {toggleHamburger ? (
          <motion.header
            animate={{ x: -194, scale: 1 }}
            // transition={{ delay: 0.2 }}
            className="fixed top-0 right-0 w-[60%] bg-[#000] px-3 h-full border-r border-r-[#cbcbcb] ease-in-out duration-500 z-50"
          >
            <div className="flex flex-row justify-between items-center pt-4 ">
              <h4 className="text-2xl font-bold text-[#18b648] ">Recipes.</h4>
              <AiOutlineClose
                size={20}
                color="#18b648"
                onClick={handleToggle}
              />
            </div>
            <ul className="flex-col pt-[10px] text-[#646464] text-[15px] uppercase">
              <li className="p-4  border-b border-b-[#cbcbcb29]">
                <Link to="/" data-cy="Home">
                  Home
                </Link>
              </li>
              <li className="p-4 border-b  border-b-[#cbcbcb29]">
                <Link to="/recipe" data-cy="Recipe">
                  Recipe
                </Link>
              </li>
              <li
                className="p-4 cursor-pointer hover:text-[#18b648]"
                onClick={handleSearchToggle}
                data-cy="search-recipes"
              >
                Search Recipes
              </li>
            </ul>
            <div className="w-full h-[40px] mt-10  bg-[#18b648] rounded-full">
              <p className="text-[#fff] text-center pt-2">Sign up</p>
            </div>
            <div className="flex flex-row justify-center space-x-4 items-center pt-[30px] text-[#fff] md:hidden">
              <FaTwitter size={20} color="#fff" />
              <FaFacebookF size={20} color="#fff" />
              <AiOutlineInstagram size={20} color="#fff" />
              <BsWhatsapp size={20} color="#fff" />
            </div>
          </motion.header>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
