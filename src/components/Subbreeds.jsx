import { useParams } from "react-router-dom";

const Subbreeds = () => {
  const { dogId } = useParams();

  //   useEffect(()=>{
  // HTTP request if needed
  // }, []);

  return <div>Subbreeds: {dogId}</div>;
};

export default Subbreeds;
