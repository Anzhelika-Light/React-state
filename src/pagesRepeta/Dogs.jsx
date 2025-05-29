// import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Dogs = () => {
  const [dogs, setDogs] = useState([
    "dog-1",
    "dog-2",
    "dog-3",
    "dog-4",
    "dog-5",
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get("dogId") ?? "";
  const location = useLocation();
  console.log(location);

  //   useEffect(()=>{
  // HTTP request if needed
  // }, []);

  const updateQueryString = (e) => {
    const dogIdValue = e.target.value;
    if (dogIdValue === "") {
      return setSearchParams({});
    }
    setSearchParams({ dogId: e.target.value });
  };

  const visibleDogs = dogs.filter((dog) => dog.includes(dogId));

  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />

      <ul>
        {visibleDogs.map((dog) => {
          return (
            <li key={dog}>
              <Link to={`${dog}`} state={{ from: location }}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
