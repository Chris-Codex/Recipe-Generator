import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllRecipes } from "../features/recipeSlice/recipeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        await axios
          .get("https://www.themealdb.com/api/json/v1/1/categories.php", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            setRecipes(res.data.categories);
            dispatch(setAllRecipes(res.data.categories));
          });
      } catch (error) {
        console.log("All Recipes Error", error);
        return error.message;
      }
    };
    fetchAllRecipes();
  }, [dispatch]);

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
          <div className="relative w-full bg-black md:w-[300px] md:bg-black md:h-[400px]">
            LIST
          </div>
          <div className="max-sm:w-[810px] max-sm:flex max-sm:flex-col max-sm:flex-auto max-sm:gap-6 md:w-[810px] md:flex md:flex-wrap flex-auto  md:gap-6 md:h-full">
            {recipes.map((items) => {
              const { idCategory, strCategory, strCategoryThumb } = items;

              return (
                <aside
                  className="w-[100%] relative md:w-[30%] flex-auto h-[200px] rounded-[20px] group"
                  key={idCategory}
                >
                  <img
                    src={strCategoryThumb}
                    alt="yam"
                    className="w-full h-[200px] object-cover rounded-[20px] md:w-full md:h-[200px] md:object-cover md:rounded-[20px]"
                  />
                  <div className="absolute top-0 bottom-0 inset-0 bg-[#00000071] opacity-50 group-hover:opacity-100 rounded-[20px]"></div>
                  <div className="absolute top-0 bottom-0 w-full flex-col justify-center items-center opacity-0 group-hover:opacity-100">
                    <div className="flex justify-center items-center h-full">
                      <p className="text-[#fff] text-[20px] font-bold ">
                        {strCategory}
                      </p>
                    </div>
                    <div className="absolute top-[120px] bottom-0 w-full flex items-center justify-center h-[40px]  ">
                      <div className="flex justify-center items-center w-7/12 h-[40px] bg-[#c06d6d] cursor-pointer">
                        <p className="text-[#fff] font-bold">View More</p>
                      </div>
                    </div>
                  </div>
                </aside>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
