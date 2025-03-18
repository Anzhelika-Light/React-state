import { Component } from "react";
import { TbRuler } from "react-icons/tb";
import PokemonDataView from "./PokemonDataView";
import PokemonErrorView from "./PokemonErrorView";
import PokemonPendingView from "./PokemonPendingView";
import pokemonAPI from "../../services/pokemon-api";

// const Status = {
//   IDLE: "idle",
//   PENDING: "pending",
//   RESOLVED: "resolved",
//   REJECTED: "rejected",
// };

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      pokemonAPI
        .fetchPokemon(nextName)
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

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
}
