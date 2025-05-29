import { useParams } from "react-router-dom";

const Gallery = () => {
  const { dogId } = useParams();

  //   useEffect(()=>{
  // HTTP request if needed
  // }, []);

  return <div>Image gallery: {dogId}</div>;
};

export default Gallery;
