import axios from "axios";

const instance = axios.create({
  baseURL: "https://swapi.py4e.com/api/people/",
});

export const searchCharacters = async (search) => {
  const { data } = await instance.get("/", {
    params: {
      search,
    },
  });
  return data;
};
