import { useEffect, useState } from "react";
import { getProducts } from "../services/products-list-api";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(page);
        console.log(page);
        console.log(data);
        setItems((prevItems) => [...prevItems, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts(page);
  }, [page]);

  //   const loadMore = () => {
  //     setSearchParams((page) => page + 1);
  //   };

  const updateQueryString = (e) => {
    const characterIdValue = e.target.value;
    if (characterIdValue === "") {
      return setSearchParams({});
    }
    setSearchParams({ name: e.target.value });
  };
  const elements = items.map(({ name, id }) => <li key={id}>{name}</li>);

  return (
    <>
      <ul>{elements}</ul>
      <button
        type="button"
        // onClick={loadMore}
        onClick={() => setSearchParams({ page: Number(page) + Number(1) })}
      >
        Load more
      </button>
    </>
  );
};

export default ProductsList;
