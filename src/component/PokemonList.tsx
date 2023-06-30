import React, { useEffect } from "react";
import "./PokemonList.css";
import { Pokemon, ViewDetail, Detail } from "../interface";
import PokemonItem from "./PokemonItem";
interface Props {
  pokemons: ViewDetail[];
  detail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}
const PokemonList: React.FC<Props> = (props) => {
  const handleSelectId = (id: number) =>
    setDetail({
      isOpened: true,
      id: id,
    });
  const { pokemons, detail, setDetail } = props;
  console.log(detail.isOpened);
  return (
    <>
      <section
        className={
          detail.isOpened
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {detail.isOpened ? (
          <div className="overlay"></div>
        ) : (
          <div className=""></div>
        )}
        {pokemons.map((poke) => (
          <div onClick={() => handleSelectId(poke.id)}>
            <PokemonItem
              detail={detail}
              setDetail={setDetail}
              key={poke.id}
              name={poke.name}
              img={poke.sprites.front_default}
              abilities={poke?.abilities}
              id={poke.id}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default PokemonList;
