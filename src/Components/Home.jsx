import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import axios from "axios";
import { Circles } from "react-loader-spinner";

function Home() {
  const [allRecipe, setAllRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
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
        console.log(error);
      }
    };
    fetchingRecipe();
  }, []);
  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Circles className="h-[80px] w-[80px]" />
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center  mb-4 ">
            <input
              className="w-[50%] border-2 rounded-lg p-2 "
              type="text"
              placeholder="Search here"
            />
            <button className=" absolute right-[376px] bg-black text-white rounded-lg mx-1 px-4 py-2">
              Search
            </button>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {allRecipe.map((item) => {
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
