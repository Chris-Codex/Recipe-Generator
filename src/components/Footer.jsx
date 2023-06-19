import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaSnapchatGhost } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div
      className="flex justify-between max-w-[1340px] px-10 mt-[30px] mx-auto items-center"
      data-cy="container"
    >
      <div className="flex flex-wrap bg-[#18b648] px-10 justify-between items-center w-full h-[100px] flex-shrink">
        <div className="flex flex-row gap-3">
          <FaFacebookF size={20} color="#fff" data-cy="icon" />
          <FaTwitter size={20} color="#fff" data-cy="icon" />
          <FaInstagramSquare size={20} color="#fff" data-cy="icon" />
          <ImWhatsapp size={20} color="#fff" data-cy="icon" />
          <FaSnapchatGhost size={20} color="#fff" data-cy="icon" />
        </div>
        <div className="flex flex-row gap-2">
          <GiHotMeal size={24} color="#fff" data-cy="icon" />
          <p className="text-[#fff] font-bold">Recipe Generator</p>
        </div>
        <div className="flex flex-row gap-1">
          <BiCopyright size={24} color="#fff" data-cy="icon" />
          <p className="text-[#fff] font-bold">
            2023 R-Generator. Payroc Assessment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
