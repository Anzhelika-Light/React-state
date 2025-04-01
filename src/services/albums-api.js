import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/albums",
  params: { _limit: 10 },
});

export const getAlbums = async (_page = 1) => {
  const { data } = await instance.get("/", {
    params: { _page },
  });
  return data;
};
