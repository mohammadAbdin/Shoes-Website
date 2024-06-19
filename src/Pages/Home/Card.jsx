import React from "react";

function Card({ data }) {
  return (
    <div className="w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-md bg-white">
      <a href={`/product/${data.id}`} className="group block overflow-hidden">
        <img
          src={data.ImageURL[0]}
          alt=""
          className="h-64 w-full transition duration-500 group-hover:scale-105"
        />

        <div className="relative p-4  bg-custom-beij">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {data.Name}
          </h3>

          <p className="mt-2">
            <span className="tracking-wider text-gray-900"> £{data.Price}</span>
          </p>
        </div>
      </a>
    </div>
  );
}

export default Card;
