import axios from "axios";

export const getProducts = async (page) => {
  const { data } = await axios.get(
    `https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products?page=${page}&limit=1`
  );
  return data;
};
