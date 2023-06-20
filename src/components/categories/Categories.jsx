import React, { useEffect, useState } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { fetchAllCategories, fetchRecipes } from "../../services/api";
import Pagination from "../Pagination";
import SearchForms from "../SearchForms";
import Loading from "../Loading";
import recipeImg from "../../assets/recipe.jpeg";
import { motion } from "framer-motion";

const Categories = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [listCategories, setListCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  //This useEffect Hook fetches categories list of recipes from the API and updates the local state
  useEffect(() => {
    setLoading(true);
    try {
      fetchAllCategories()
        .then((res) => {
          setListCategories(res.categories);
          setActiveCategory(res.categories[0].strCategory);
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  //This useEffect hook fetches various recipes based on filtering through the category
  useEffect(() => {
    setLoading(true);
    try {
      activeCategory &&
        fetchRecipes(activeCategory)
          .then((response) => {
            setRecipe(response.meals);
          })
          .catch((error) => {
            throw new Error(error);
          })
          .finally(() => {
            setLoading(false);
          });
    } catch (error) {
      throw new Error(error);
    }
  }, [activeCategory]);

  //Define the pagination settings for displaying the list ingredients
  const listRecipesPerPage = 12;
  const nPagesVisited = pageNumber * listRecipesPerPage;

  //Calculates the number of pages to be displayed
  const pageCount = recipe ? Math.ceil(recipe.length / listRecipesPerPage) : 0;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //This logic helps render list of ingredients based on pagi9nation
  const displayCategories =
    recipe &&
    recipe
      .slice(nPagesVisited, nPagesVisited + listRecipesPerPage)
      .map((list) => {
        const { idMeal, strMeal, strMealThumb } = list;

        return (
          <aside
            className="w-[100%] relative md:w-[30%] flex-auto h-[200px] rounded-[20px] group"
            key={idMeal}
          >
            <img
              src={strMealThumb}
              alt="yam"
              className="w-full h-[200px] object-cover rounded-[20px] md:w-full md:h-[200px] md:object-cover md:rounded-[20px]"
            />
            <div className="absolute top-0 bottom-0 inset-0 bg-[#5f68687c] opacity-50 rounded-[15px] shadow-lg group-hover:opacity-100"></div>
            <div className="absolute top-0 bottom-0 w-full flex-col justify-center items-center opacity-100 ">
              <div className="absolute top-0 bottom-0 flex justify-center w-8/12 h-[40px] items-center bg-[#18b648] rounded-br-[30px]">
                <p className="text-[#fff] text-[15px] font-bold ">{strMeal}</p>
              </div>

              <div className="absolute top-20 bottom-0 w-full flex items-center justify-center h-[40px] opacity-0 group-hover:opacity-100">
                <div className="flex justify-center items-center w-8/12 h-[40px] bg-[#18b648]  cursor-pointer rounded-sm">
                  <Link to={`/category_recipe_detail/${idMeal}`}>
                    <p className="text-[#fff] font-bold">View More</p>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        );
      });

  return (
    <main>
      <Navbar />
      <Header />
      <SearchForms />

      <section>
        <div className="flex justify-between max-w-[1340px] px-10 mt-[30px] mx-auto items-center">
          <div className="flex flex-wrap justify-between items-center w-full flex-shrink">
            <div className="w-[340px]">
              <h1 className="text-[40px]">Recipes</h1>
            </div>
            <div className="mt-3 w-[810px] flex-auto items-center  md:w-[810px] md:flex-auto md:flex md:items-center">
              <div className="max-sm:flex-row flex flex-wrap w-full items-center gap-6">
                <h1 className="text-[20px]">Category </h1>
                <div className="max-sm:w-[74%] w-[88%] border border-b border-l-transparent border-r-transparent border-t-transparent border-[#999]"></div>
              </div>
            </div>
          </div>
        </div>

        <motion.section
          animate={{ y: -10, scale: 1 }}
          initial={{ scale: 0 }}
          className="flex justify-between max-w-[1340px] h-full px-10 mx-auto mt-[40px] items-center"
        >
          {/*Category button*/}
          <div className="flex flex-wrap flex-shrink w-full h-full gap-10">
            <div className="relative w-full  md:w-[300px] md:bg-[#4551] md:h-auto">
              <p className="px-3 pt-6 text-[#605e5e]">Search By:</p>
              <div className="mx-10 mt-4 flex-col">
                {listCategories.map((category) => {
                  return (
                    <div
                      key={category.idCategory}
                      className={`w-full h-[40px] bg-[#18b648] flex justify-center items-center rounded-md my-3 ${
                        activeCategory === category.strCategory &&
                        "bg-[#0e5624]"
                      }`}
                      onClick={() => setActiveCategory(category.strCategory)}
                    >
                      <p className="text-[#fff] tetx-[16px]">
                        {category.strCategory}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {loading ? (
              <Loading />
            ) : (
              <div className="max-sm:w-[810px] max-sm:flex max-sm:flex-col max-sm:flex-auto max-sm:gap-6 md:w-[810px] md:flex md:flex-wrap flex-auto  md:gap-6 md:h-full pb-20">
                {displayCategories ? (
                  displayCategories
                ) : (
                  <div className="flex items-center justify-center w-full h-screen">
                    <div className="relative flex items-center justify-center">
                      <img
                        src={recipeImg}
                        className="w-[50%] h-[50%]"
                        alt="Not Available"
                      />
                    </div>
                    <div className="absolute px-[370px] pt-[500px] bottom-[450px] flex justify-center items-center z-50">
                      <p className="text-[#999] font-bold">
                        No RECIPES AVAILABLE
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.section>

        {!displayCategories ? null : (
          <Pagination pageCount={pageCount} changePage={changePage} />
        )}
      </section>
    </main>
  );
};

export default Categories;
