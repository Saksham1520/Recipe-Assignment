import axios from "axios";
import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const ingrearr = [1, 2, 3, 4];
  const { id } = useParams();
  const [recipedetails, setRecipeDetails] = useState(null);
  console.log("Recipe ID:", id);
  useEffect(() => {
    const fetchingRecipeDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=848e42f16bf04e818ed21503d293cbc8`
        );
        if (res) {
          setRecipeDetails(res.data);
          console.log("Details", res.data);
        }
      } catch (error) {
        alert(res.data.message);
        console.log(error);
      }
    };
    fetchingRecipeDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-2">
            Dish name bfsdjkjkdskjdfkjsdh
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            natus aliquam omnis ipsum! Alias, voluptates, minus labore sunt,
          </p>

          <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc ml-6">
            {ingrearr.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={recipedetails?.image}
            className="w-[50%] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
