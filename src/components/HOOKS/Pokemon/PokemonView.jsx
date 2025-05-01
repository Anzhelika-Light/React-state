import { useState } from "react";
import { ToastContainer } from "react-toastify";
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
}
