import pokemons from "../models/pokemonModel.js";

export const listarPokemons = (req, res) => {
  res.render("pokemons", { pokemons });
};