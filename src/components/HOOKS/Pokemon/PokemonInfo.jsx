import { useState, useEffect } from "react";
import { TbRuler } from "react-icons/tb";
import PokemonDataView from "./PokemonDataView";
import PokemonErrorView from "./PokemonErrorView";
import PokemonPendingView from "./PokemonPendingView";
import pokemonAPI from "../../../services/pokemon-api";

// const Status = {
//   IDLE: "idle",
//   PENDING: "pending",
//   RESOLVED: "resolved",
//   REJECTED: "rejected",
// };

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus("pending");
    pokemonAPI
      .fetchPokemon(pokemonName)
      .then((pokemon) => {
        setPokemon(pokemon);
        setStatus("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [pokemonName]);

  if (status === "idle") {
    return <div>Enter pokemon name</div>;
  }
  if (status === "pending") {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }
  if (status === "rejected") {
    return <PokemonErrorView message={error.message} />;
  }
  if (status === "resolved") {
    return <PokemonDataView pokemon={pokemon} />;
  }
}
