// src/Api/HttpRequest.js
const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";

export const getAllShoes = async () => {
  return axios
    .get(`${apiUrl}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAShoe = async (id) => {
  const url = `${apiUrl}/${id}`;
  return axios
    .get(`${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteAShoe = async (id) => {
  const url = `${apiUrl}/${id}`;
  return axios
    .delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const editAShoe = async (data, id) => {
  const url = `${apiUrl}/${id}`;
  return axios
    .put(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error updating the shoe:", error);
      throw error; // Re-throw the error to be handled by the caller
    });
};
export const addShoe = async (obj) => {
  console.log(obj);
  axios
    .post(`${apiUrl}`, obj)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
// export { getAllShoes, getAShoe };
