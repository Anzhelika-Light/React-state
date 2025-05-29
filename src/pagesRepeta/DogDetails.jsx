import { Suspense, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

const DogDetails = () => {
  const location = useLocation();
  // console.log(location);
  const backLinkLocationRef = useRef(location.state?.from ?? "/dogs");
  const { dogId } = useParams();

  //   useEffect(()=>{
  // HTTP request if needed
  // }, []);

  return (
    <>
      <h1>Dog details: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Back to collection</Link>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
