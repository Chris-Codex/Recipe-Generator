import React from "react";
import recipeVideo from "../assets/recipe.mp4";

const Header = () => {
  return (
    <header
      className="flex justify-between max-w-[1340px] mt-10 px-10 mx-auto items-center overflow-hidden"
      data-cy="container"
    >
      <div className="relative flex w-full h-[450px] rounded-[30px]">
        <video
          src={`${recipeVideo}`}
          autoPlay
          loop
          muted
          alt="recipeVideo"
          className="w-full object-cover h-[450px]  rounded-[30px]"
        />
        <div
          className="absolute w-auto h-auto inset-0 bg-black opacity-50 rounded-[30px]"
          data-cy="overlay"
        ></div>
        <div className="absolute top-0 bottom-0 px-20 w-full flex justify-center items-center">
          <article className="leading-[1.2] text-[50px] text-[#fff] md:text-[50px] md:text-[#fff]">
            <p> Endless Possibilities, Delicious Results</p>
          </article>
        </div>
      </div>
    </header>
  );
};

export default Header;
