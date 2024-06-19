import React, { createContext, useEffect, useState } from "react";
import add_product from "../Hooks/UseAddProduct";
import UseEditProduct from "../Hooks/UseEditProduct";

export const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const { addProduct } = add_product();
  const { editProduct } = UseEditProduct();

  const [updatedImageURLs, setUpdatedImageURLs] = useState([]);
  const [formData, setFormData] = useState({
    Name: "",
    Price: "",
    Desc: "",
    ImageURL: [""],
  });
  const updateFormData = (field, value, index = null) => {
    if (field.includes("ImageURL") && index !== null) {
      setFormData((prevData) => {
        const newImageURLs = [...prevData.ImageURL];
        newImageURLs[index] = value;
        return {
          ...prevData,
          ImageURL: newImageURLs,
        };
      });
    } else {
      setFormData((prevData) => {
        return {
          ...prevData,
          [field]: value,
        };
      });
    }
  };
  useEffect(() => {
    console.log("formData", formData);
  }, [formData.ImageURL]);

  const handleSubmitAddShoe = (e) => {
    console.log(formData);
    addProduct(formData);
    e.preventDefault();
  };
  const handleSubmitEditShoe = (e, id) => {
    e.preventDefault();
    console.log(formData);
    editProduct(formData, id);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        handleSubmitAddShoe,
        handleSubmitEditShoe,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
