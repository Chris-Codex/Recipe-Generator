import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Header />

      <div className="flex justify-between max-w-[1340px] px-10 mt-[50px] mx-auto items-center">
        <div className="flex flex-wrap justify-between items-center w-full flex-shrink">
          <div className="w-[340px]">
            <h1 className="text-[40px]">Recipes</h1>
          </div>
          <div className="mt-3 w-[810px] flex-auto flex items-center  md:w-[810px] md:flex-auto md:flex md:items-center">
            <input
              className="w-[100%] h-[50px] px-4 bg-[#b3b3b338] rounded-lg outline-none md:w-[66%] md:h-[50px] md:px-4 md:bg-[#b3b3b338] md:rounded-lg md:outline-none"
              placeholder="Search for recipes"
            />
          </div>
        </div>
      </div>

      <section className="flex justify-between max-w-[1340px] h-full px-10 mx-auto mt-[40px] items-center">
        <div className="flex flex-wrap flex-shrink w-full h-full gap-10">
          <div className="w-full bg-black md:w-[300px] md:bg-black md:h-[400px]">
            Nav lsit
          </div>
          <div className="max-sm:w-[810px] max-sm:flex max-sm:flex-col max-sm:flex-auto gap-6 md:w-[810px] md:flex md:flex-wrap md:flex-auto md:gap-6 md:h-full">
            <aside className="bg-[#492525] flex-auto h-[200px] rounded-[10px]">
              Aside 1
            </aside>
            <aside className="bg-[#999] flex-auto rounded-[10px]">
              Aside 2
            </aside>
            <aside className="bg-[#c06d6d] flex-auto rounded-[10px]">
              Aside 3
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
