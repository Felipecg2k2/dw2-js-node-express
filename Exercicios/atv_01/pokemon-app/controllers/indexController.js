import pokemons from "../dados/pokemons.js";

const indexController = {
  show: (req, res) => {
    const pokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    res.render("index", { pokemon });
  }
};

export default indexController;
