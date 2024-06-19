import React, { useState, useEffect } from "react";
import { getAllShoes } from "../Api/HttpRequest";

const UseProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const response = await getAllShoes();
      setData(response);
    };
    fetching();
    console.log(data);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return {
    data,
    setData,
  };
};
export default UseProducts;
