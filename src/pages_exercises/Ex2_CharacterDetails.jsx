import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <ul>Character Details</ul>;
};

export default CharacterDetails;
