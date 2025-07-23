import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterInfo } from "../services/sw-characters-api";

const CharacterDetails = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      try {
        setLoading(true);
        const data = await getCharacterInfo(id);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacterInfo();
  }, [id]);

  return <ul>Character Details: {id}</ul>;
};

export default CharacterDetails;
