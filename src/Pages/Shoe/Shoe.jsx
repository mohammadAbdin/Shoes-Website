import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UseGetProduct from "../../Hooks/UseGetProduct";
import { deleteAShoe } from "../../Api/HttpRequest";
import UseEditProduct from "../../Hooks/UseEditProduct";
function Shoe() {
  const { navigateEditProduct } = UseEditProduct();
  const { data, fetching } = UseGetProduct();
  const { shoeId } = useParams();
  console.log(shoeId);
  useEffect(() => {
    console.log(shoeId);

    fetching(shoeId);
  }, []);

  return (
    <div className="shoe-container">
      {data.length != 0 ? (
        <a href="#" className="group relative block overflow-hidden w-[400px]">
          <img
            src={`${data.ImageURL[0]}`}
            alt=""
            className="h-64 w-[400px] transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="bg-custom-beij relative border border-gray-100 p-6 w-[400px]">
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {data.Name}
            </h3>

            <p className="mt-1.5 text-sm text-gray-700">${data.Price}</p>
            <p className="mt-1.5 text-sm text-gray-700">.</p>
            <span className=" bg-custom-beij px-3 py-0.5  text-custom-blue font-medium w-[400px]">
              {data.Desc}
            </span>

            <section className="mt-4 flex justify-between">
              <button
                onClick={() => navigateEditProduct(shoeId)}
                className="w-1/2 mx-1 rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
              >
                Edit
              </button>
              <button
                onClick={() => deleteAShoe(shoeId)}
                className="w-1/2 mx-1 rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
              >
                Delete
              </button>
            </section>
          </div>
        </a>
      ) : (
        <div
          className="spinner inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
    </div>
  );
}

export default Shoe;
