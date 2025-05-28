import { useParams } from "react-router-dom";

export const Gallery = () => {
  const { dogId } = useParams();

  //   useEffect(()=>{
  // HTTP request if needed
  // }, []);

  return <div>Image gallery: {dogId}</div>;
};
