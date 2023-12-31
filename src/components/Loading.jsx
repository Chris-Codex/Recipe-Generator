import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div
      className="flex justify-between max-w-[1340px] px-10 mt-[30px] mx-auto items-center"
      data-cy="container"
    >
      <div className="flex flex-wrap justify-center items-center w-full h-screen flex-shrink">
        <img src={loading} className="w-[80px] h-[80px]" alt="loading" />
      </div>
    </div>
  );
};

export default Loading;
