import axios from "axios";
import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useParams } from "react-router-dom";

const removeHtmlTags = (html) => {
  return html?.replace(/<\/?[^>]+(>|)/g, "") || "";
};

function RecipeDetails() {
  const { id } = useParams();
  const [recipedetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchingRecipeDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=848e42f16bf04e818ed21503d293cbc8`
        );
        if (res) {
          setRecipeDetails(res.data);
          console.log("Details", res.data);
        }
      } catch (error) {
        alert(error.response.data.message, "Please try again later");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchingRecipeDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          {" "}
          <ColorRing />
        </div>
      ) : (
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-2">
                {recipedetails?.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {removeHtmlTags(recipedetails?.summary)}
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Steps and Ingredients:
              </h3>
              <ul className="list-disc ml-6">
                {recipedetails?.analyzedInstructions[0]?.steps?.map((steps) => (
                  <p key={steps.number}>
                    <span className="font-semibold">{steps.number + ")."}</span>{" "}
                    {steps.step} <br />{" "}
                    <h4 className="font-semibold ">Ingredients used:</h4>
                    {steps.ingredients.map((items, index) => {
                      return (
                        <>
                          <span key={`${steps.number}-${index}`} className="">
                            {items.name + ","}
                          </span>
                        </>
                      );
                    })}
                  </p>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 p-4 flex items- justify-center">
              <img
                src={recipedetails?.image}
                className="w-[75%] h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
