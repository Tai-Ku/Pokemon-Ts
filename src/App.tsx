import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import PokemonList from "./component/PokemonList";
import { Pokemon, Pokemons, Detail } from "./interface";
const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [isLoad, setIsload] = useState<boolean>(false);
  const [detail, setDetail] = useState<Detail>({
    isOpened: false,
    id: 0,
  });
  console.log(pokemons);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );
      setNextUrl(res.data.next);
      setIsload(false);
      res.data.results.map(async (pokemon: Pokemons) => {
        const data = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((prev) => [...prev, data.data]);
      });
      setIsload(true);
    };

    getPokemon();
  }, []);
  const nextPage = async () => {
    const res = await axios.get(nextUrl);
    res.data.results.map(async (pokemon: Pokemons) => {
      const data = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((prev) => [...prev, data.data]);
    });
    setIsload(true);
  };
  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header"> Pokemon</header>
        <PokemonList
          pokemons={pokemons}
          detail={detail}
          setDetail={setDetail}
        />
        <div className="btn">
          <button onClick={nextPage}>
            {isLoad ? "Load More" : "Loading..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
