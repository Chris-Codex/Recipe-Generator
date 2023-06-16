import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Header />

      <section className="flex justify-between max-w-[1240px] px-10 mx-auto items-center overflow-hidden">
        <div className="grid ">
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
