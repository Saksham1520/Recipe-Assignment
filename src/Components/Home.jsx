import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import axios from "axios";
import { Circles } from "react-loader-spinner";

function Home() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState([]);
  console.log(search);
  useEffect(() => {
    const fetchingRecipe = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=848e42f16bf04e818ed21503d293cbc8"
        );
        if (res) {
          setAllRecipe(res.data.results);
          console.log("All Recipes ", res.data.results);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.response.data.message);
        alert(error.response.data.message, "Please try again later");
      }
    };
    fetchingRecipe();
  }, []);

  useEffect(() => {
    const filteredData =
      allRecipe.length > 0
        ? allRecipe.filter((recipe) => {
            if (!search) {
              return true;
            }
            return recipe?.title?.toLowerCase().includes(search.toLowerCase());
          })
        : [];
    setFilterList(filteredData);
  }, [search, allRecipe]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Circles className="h-[80px] w-[80px]" />
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center mb-6">
            <div className="flex w-full max-w-lg">
              <input
                className="flex-grow border-2 border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search here"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800">
                Search
              </button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filterList?.map((item) => {
              return (
                <div>
                  <DishCard items={item} key={item.id} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
