const pokemons = [
  { id: 1, nome: "Pikachu", tipo: "Elétrico"},
  { id: 2, nome: "Bulbasaur", tipo: "Grama/Veneno"},
  { id: 3, nome: "Charmander", tipo: "Fogo"},
  { id: 4, nome: "Squirtle", tipo: "Água"},
  { id: 5, nome: "Jigglypuff", tipo: "Normal/Fada"},
  { id: 6, nome: "Meowth", tipo: "Normal"},
];

const jogos = [
  { id: 1, nome: "Pokémon Red/Blue", console: "Game Boy", ano: 1996 },
  { id: 2, nome: "Pokémon Gold/Silver", console: "Game Boy Color", ano: 1999 },
  { id: 3, nome: "Pokémon Ruby/Sapphire", console: "Game Boy Advance", ano: 2002 },
  { id: 4, nome: "Pokémon Diamond/Pearl", console: "Nintendo DS", ano: 2006 },
  { id: 5, nome: "Pokémon Scarlet/Violet", console: "Nintendo Switch", ano: 2022 },
  { id: 6, nome: "Pokémon Legends: Arceus", console: "Nintendo Switch", ano: 2022 },
];

const treinadores = [
  { id: 1, nome: "Ash Ketchum", cidade: "Pallet", insígnias: 8 },
  { id: 2, nome: "Gary Carvalho", cidade: "Pallet", insígnias: 10 },
  { id: 3, nome: "Misty", cidade: "Cerulean", insígnias: 3 },
  { id: 4, nome: "Brock", cidade: "Pewter", insígnias: 2 },
  { id: 5, nome: "Jessie", cidade: "Desconhecida", insígnias: 0 },
];

export const getAllPokemons = () => pokemons;
export const getAllJogos = () => jogos; 
export const getAllTreinadores = () => treinadores;