import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterInfo } from "../services/sw-characters-api";

const CharacterDetails = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      try {
        setLoading(true);
        const data = await getCharacterInfo(id);
        console.log(data);
        setItems({ ...data });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacterInfo();
  }, [id]);

  const {
    name,
    birth_year,
    gender,
    height,
    mass,
    eye_color,
    hair_color,
    skin_color,
  } = items;

  return (
    <>
      <h2>Character Details:</h2>
      <div>
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Birth year:</b>
          {birth_year}
        </p>
        <p>
          <b>Gender:</b>
          {gender}
        </p>
        <p>
          <b> Height:</b>
          {height}
        </p>
        <p>
          <b> Mass:</b>
          {mass}
        </p>
        <p>
          <b>Eye color:</b>
          {eye_color}
        </p>
        <p>
          <b> Hair color:</b>
          {hair_color}
        </p>
        <p>
          <b>Skin color:</b>
          {skin_color}
        </p>
        {error && <p>Failed to download character. Try again later.</p>}
        {loading && <p>...loading</p>}
      </div>
    </>
  );
};

export default CharacterDetails;
