import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://swapi.info/api/people/",
//   params: { limit: 12 },
// });

// export const getCharacters = async (page = 1) => {
//   const { data } = await instance.get("/", {
//     params: { page },
//   });
//   return data;
// };

export const getCharacters = async () => {
  const { data } = await axios.get("https://swapi.info/api/people");
  return data;
};
