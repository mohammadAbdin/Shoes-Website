import React, { useState, useEffect } from "react";
import { getAShoe } from "../Api/HttpRequest";

const UseGetProduct = () => {
  const [data, setData] = useState([]);

  const fetching = async (id) => {
    console.log(id);
    const response = await getAShoe(id);
    setData(response);
  };
  // console.log(data);
  return {
    fetching,
    data,
    setData,
  };
};
export default UseGetProduct;
