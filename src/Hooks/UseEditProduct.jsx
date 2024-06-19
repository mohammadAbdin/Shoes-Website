import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editAShoe } from "../Api/HttpRequest";
const UseEditProduct = () => {
  const navigate = useNavigate();

  return {
    navigateEditProduct: (id) => {
      navigate(`/Edit-shoe/${id}`);
    },
    editProduct: (data, id) => {
      editAShoe(data, id);
    },
  };
};
export default UseEditProduct;
