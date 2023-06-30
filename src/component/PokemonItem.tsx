import React, { useEffect, useState } from "react";
import "./PokemonList.css";
import { ViewDetail, Detail } from "../interface";

interface Props {
  detail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
  id: number;
  img: string;
  name: string;
  abilities:
    | {
        ability: {
          name: string;
        };
      }[]
    | undefined;
}
const PokemonItem: React.FC<Props> = (props) => {
  const { name, img, id, abilities, detail, setDetail } = props;
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(id === detail?.id);
  }, [detail]);
  const closeDetail = () => {
    setDetail({
      id: 0,
      isOpened: false,
    });
  };
  console.log("isSelected", isSelected);
  return (
    <div className="">
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
            <div className="detail-info">
              <img src={img} alt="pokemon" className="detail-img" />
              <p className="detail-name"> {name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability"> Ablities: </p>
              {abilities?.map((i) => {
                return <div className=""> {i.ability.name}</div>;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name"> {name} </p>
          <img src={img} alt="pokemon" />
        </section>
      )}
    </div>
  );
};

export default PokemonItem;
