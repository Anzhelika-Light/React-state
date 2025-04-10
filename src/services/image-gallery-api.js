import axios from "axios";

const API_KEY = "33057565-d3f4ca79a5c4be950c2fc9706";

const instance = axios.create({
  baseURL: "https://pixabay.com/api",
  params: {
    image_type: "photo",
    key: API_KEY,
    orientation: "horizontal",
    per_page: 12,
  },
});

// export const getPosts = async (_page = 1) => {
//   const { data } = await instance.get("/", {
//     params: { _page },
//   });
//   return data;
// };

export const searchImages = async (q, page = 1) => {
  const { data } = await instance.get("/", {
    params: { q, page },
  });
  return data;
};
