import { useState } from "react";
import { addShoe } from "../Api/HttpRequest";
const add_product = () => {
  return {
    addProduct: (product) => {
      addShoe(product);
    },
  };
};
export default add_product;
