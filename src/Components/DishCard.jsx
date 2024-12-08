import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function DishCard({ items }) {
  return (
    <div className="w-[300px] h-[350px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-1/2">
        <img
          src={items.image}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 h-1/2 flex flex-col justify-center">
        <h2 className="text-xl font-bold text-gray-800">{items.title}</h2>
        <Link to={`/recipedetails/${items.id}`}>
          <button className="mt-2 font-semibold rounded-lg p-2 bg-green-600 hover:bg-green-700">
            Get more details about this Recipe
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DishCard;
