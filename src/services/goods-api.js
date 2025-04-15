import axios from "axios";
import { nanoid } from "nanoid";

axios.defaults.baseURL = "https://67e3b7b52ae442db76d13e6a.mockapi.io/api";

export const getGoods = async () => {
  const { data } = await axios.get("/products");
  return data;
};

export const addGood = async (values) => {
  const response = await axios.post("/products", values);
  return response.data;
};

export const deleteGood = async (id) => {
  const { data } = await axios.delete(`products/${id}`);
  return data;
};
