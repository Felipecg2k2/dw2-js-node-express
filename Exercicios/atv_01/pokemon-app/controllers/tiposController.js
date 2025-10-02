import pokemons from "../models/pokemonModel.js";

export const listarTipos = (req, res) => {
  const pokemonsPorTipo = {};

  pokemons.forEach(p => {
    if (!pokemonsPorTipo[p.tipo]) {
      pokemonsPorTipo[p.tipo] = [];
    }
    pokemonsPorTipo[p.tipo].push(p);
  });

  res.render("tipos", { pokemonsPorTipo });
};
