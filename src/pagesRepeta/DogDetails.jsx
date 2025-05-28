import { Link, Outlet, useParams } from "react-router-dom";

const DogDetails = () => {
  const { dogId } = useParams();

  //   useEffect(()=>{
  // HTTP request if needed
  // }, []);

  return (
    <>
      <h1>Dog details: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
