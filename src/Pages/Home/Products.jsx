import React from "react";
import UseProducts from "../../Hooks/UseProducts";
import Card from "./Card";

function Products() {
  let { data } = UseProducts();
  console.log(data);
  data = [];
  return (
    <div className="products-container">
      {data.length != 0 ? (
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {data.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
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

export default Products;
