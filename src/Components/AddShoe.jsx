import React, { useContext, useState, useEffect } from "react";
import InputComp from "./InputComp";
import { FormContext, FormProvider } from "../Context/FormContext";
import { useParams } from "react-router-dom";
import UseGetProduct from "../Hooks/UseGetProduct";

function AddShoe({ button }) {
  const { data, fetching } = UseGetProduct();

  const { shoeId } = useParams();
  if (shoeId) {
    useEffect(() => {
      fetching(shoeId);
    }, []);
  }
  const { formData, handleSubmitAddShoe, handleSubmitEditShoe } =
    useContext(FormContext);
  const [imageURLs, setImageURLs] = useState(formData.ImageURL);

  const addImageURLInput = () => {
    setImageURLs([...imageURLs, ""]);
  };
  useEffect(() => {
    if (data.ImageURL) {
      // console.log(data.ImageURL);
      setImageURLs(data.ImageURL);
    }
  }, [data]);
  return (
    <div className="form-container">
      <form action="submit">
        <InputComp data={data ? data.Name : undefined} input="Name" />
        <InputComp data={data ? data.Price : undefined} input="Price" />
        {imageURLs.map((url, index) => (
          <InputComp
            key={index}
            data={data.ImageURL ? imageURLs[index] : undefined}
            input={`ImageURL${index}`}
            index={index}
          />
        ))}
        <button type="button" onClick={addImageURLInput}>
          Add Another Image URL
        </button>
        <InputComp data={!data ? undefined : data.Desc} input="Desc" />
        <button
          onClick={(e) =>
            button == "Add Shoe"
              ? handleSubmitAddShoe(e)
              : handleSubmitEditShoe(e, data.id)
          }
        >
          {button}
        </button>
      </form>
    </div>
  );
}

export default AddShoe;
