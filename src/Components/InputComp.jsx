import React, { useContext, useEffect } from "react";
import { FormContext } from "../Context/FormContext";

function InputComp({ data, input, index = null }) {
  const { formData, updateFormData } = useContext(FormContext);
  const handleChange = (e) => {
    updateFormData(input, e.target.value, index);
  };
  let value;

  useEffect(() => {
    if (data) {
      value = data;
      updateFormData(input, data, index);
    } else value = index !== null ? formData.ImageURL[index] : formData[input];
  }, [data]);
  return (
    <label
      htmlFor="UserEmail"
      className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
    >
      {formData &&
      formData[input.substring(0, 8)] &&
      formData[input.substring(0, 8)][index] ? (
        <input
          type={input}
          onChange={handleChange}
          value={formData[input.substring(0, 8)][index]}
          placeholder={input}
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      ) : (
        <input
          type={input}
          onChange={handleChange}
          value={data ? formData[input] : value}
          placeholder={input}
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      )}

      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
        {input}
      </span>
    </label>
  );
}

export default InputComp;
