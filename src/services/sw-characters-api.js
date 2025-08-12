import axios from "axios";

export const getCharacters = async () => {
  const { data } = await axios.get("https://swapi.info/api/people");
  return data;
};

export const getCharacterInfo = async (id) => {
  const { data } = await axios.get(`https://swapi.info/api/people/${id}`);
  return data;
};
