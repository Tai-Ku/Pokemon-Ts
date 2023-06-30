import React from "react";
export interface Pokemons {
  name: string;
  url: string;
}
export interface Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
}

export interface Detail {
  id: number;
  isOpened: boolean;
}
export interface ViewDetail extends Pokemon {
  abilities?:
    | {
        ability: {
          name: string;
        };
      }[]
    | undefined;
}
