const pokemons = [
    // 1ª Geração (Kanto)
    { numero: 1, nome: "Bulbasaur", tipo: "Grama/Veneno", imagem: "pokemons/bulbasaur.png" },
    { numero: 2, nome: "Ivysaur", tipo: "Grama/Veneno", imagem: "pokemons/ivysaur.png" }, 
    { numero: 3, nome: "Venusaur", tipo: "Grama/Veneno", imagem: "pokemons/venusaur.png" }, 
    { numero: 4, nome: "Charmander", tipo: "Fogo", imagem: "pokemons/charmander.png" },
    { numero: 5, nome: "Charmeleon", tipo: "Fogo", imagem: "pokemons/charmeleon.png" }, 
    { numero: 6, nome: "Charizard", tipo: "Fogo/Voador", imagem: "pokemons/charizard.png" },
    { numero: 7, nome: "Squirtle", tipo: "Água", imagem: "pokemons/squirtle.png" },
    { numero: 8, nome: "Wartortle", tipo: "Água", imagem: "pokemons/wartortle.png" }, 
    { numero: 9, nome: "Blastoise", tipo: "Água", imagem: "pokemons/blastoise.png" },
    { numero: 25, nome: "Pikachu", tipo: "Elétrico", imagem: "pokemons/pikachu.png" },
    { numero: 26, nome: "Raichu", tipo: "Elétrico", imagem: "pokemons/raichu.png" }, 
    { numero: 39, nome: "Jigglypuff", tipo: "Normal/Fada", imagem: "pokemons/jigglypuff.png" },
    { numero: 40, nome: "Wigglytuff", tipo: "Normal/Fada", imagem: "pokemons/wigglytuff.png" }, 
    { numero: 50, nome: "Diglett", tipo: "Solo", imagem: "pokemons/diglett.png" }, 
    { numero: 51, nome: "Dugtrio", tipo: "Solo", imagem: "pokemons/dugtrio.png" }, 
    { numero: 52, nome: "Meowth", tipo: "Normal", imagem: "pokemons/meowth.png" },
    { numero: 53, nome: "Persian", tipo: "Normal", imagem: "pokemons/persian.png" }, 
    { numero: 58, nome: "Growlithe", tipo: "Fogo", imagem: "pokemons/growlithe.png" }, 
    { numero: 59, nome: "Arcanine", tipo: "Fogo", imagem: "pokemons/arcanine.png" },
    { numero: 63, nome: "Abra", tipo: "Psíquico", imagem: "pokemons/abra.png" }, 
    { numero: 64, nome: "Kadabra", tipo: "Psíquico", imagem: "pokemons/kadabra.png" },
    { numero: 65, nome: "Alakazam", tipo: "Psíquico", imagem: "pokemons/alakazam.png" }, 
    { numero: 92, nome: "Gastly", tipo: "Fantasma/Veneno", imagem: "pokemons/gastly.png" }, 
    { numero: 93, nome: "Haunter", tipo: "Fantasma/Veneno", imagem: "pokemons/haunter.png" }, 
    { numero: 94, nome: "Gengar", tipo: "Fantasma/Veneno", imagem: "pokemons/gengar.png" },
    { numero: 131, nome: "Lapras", tipo: "Água/Gelo", imagem: "pokemons/lapras.png" }, 
    { numero: 147, nome: "Dratini", tipo: "Dragão", imagem: "pokemons/dratini.png" }, 
    { numero: 148, nome: "Dragonair", tipo: "Dragão", imagem: "pokemons/dragonair.png" }, 
    { numero: 149, nome: "Dragonite", tipo: "Dragão/Voador", imagem: "pokemons/dragonite.png" },

    // 2ª Geração (Johto)
    { numero: 173, nome: "Cleffa", tipo: "Fada", imagem: "pokemons/cleffa.png" }, 
    { numero: 174, nome: "Igglybuff", tipo: "Normal/Fada", imagem: "pokemons/igglybuff.png" }, 
    { numero: 246, nome: "Larvitar", tipo: "Pedra/Solo", imagem: "pokemons/larvitar.png" }, 
    { numero: 247, nome: "Pupitar", tipo: "Pedra/Solo", imagem: "pokemons/pupitar.png" }, 
    { numero: 248, nome: "Tyranitar", tipo: "Pedra/Sombrio", imagem: "pokemons/tyranitar.png" },
    
    // 3ª Geração (Hoenn)
    { numero: 258, nome: "Mudkip", tipo: "Água", imagem: "pokemons/mudkip.png" }, 
    { numero: 259, nome: "Marshtomp", tipo: "Água/Solo", imagem: "pokemons/marshtomp.png" }, 
    { numero: 260, nome: "Swampert", tipo: "Água/Solo", imagem: "pokemons/swampert.png" },
    { numero: 371, nome: "Bagon", tipo: "Dragão", imagem: "pokemons/bagon.png" }, 
    { numero: 372, nome: "Shelgon", tipo: "Dragão", imagem: "pokemons/shelgon.png" }, 
    { numero: 373, nome: "Salamence", tipo: "Dragão/Voador", imagem: "pokemons/salamence.png" },
    
    // 4ª Geração (Sinnoh)
    { numero: 406, nome: "Budew", tipo: "Grama/Veneno", imagem: "pokemons/budew.png" }, 
    { numero: 407, nome: "Roserade", tipo: "Grama/Veneno", imagem: "pokemons/roserade.png" },
    { numero: 443, nome: "Gible", tipo: "Dragão/Solo", imagem: "pokemons/gible.png" }, 
    { numero: 444, nome: "Gabite", tipo: "Dragão/Solo", imagem: "pokemons/gabite.png" }, 
    { numero: 445, nome: "Garchomp", tipo: "Dragão/Solo", imagem: "pokemons/garchomp.png" },
    { numero: 447, nome: "Riolu", tipo: "Lutador", imagem: "pokemons/riolu.png" }, 
    { numero: 448, nome: "Lucario", tipo: "Lutador/Aço", imagem: "pokemons/lucario.png" },
    { numero: 470, nome: "Leafeon", tipo: "Grama", imagem: "pokemons/leafeon.png" }, 
    { numero: 477, nome: "Dusknoir", tipo: "Fantasma", imagem: "pokemons/dusknoir.png" },
    
    // 5ª Geração (Unova)
    { numero: 535, nome: "Tympole", tipo: "Água", imagem: "pokemons/tympole.png" }, 
    { numero: 536, nome: "Palpitoad", tipo: "Água/Solo", imagem: "pokemons/palpitoad.png" }, 
    { numero: 537, nome: "Seismitoad", tipo: "Água/Solo", imagem: "pokemons/seismitoad.png" },
    { numero: 610, nome: "Axew", tipo: "Dragão", imagem: "pokemons/axew.png" }, 
    { numero: 611, nome: "Fraxure", tipo: "Dragão", imagem: "pokemons/fraxure.png" }, 
    { numero: 612, nome: "Haxorus", tipo: "Dragão", imagem: "pokemons/haxorus.png" },
    
    // 6ª Geração (Kalos)
    { numero: 679, nome: "Honedge", tipo: "Aço/Fantasma", imagem: "pokemons/honedge.png" }, 
    { numero: 680, nome: "Doublade", tipo: "Aço/Fantasma", imagem: "pokemons/doublade.png" }, 
    { numero: 681, nome: "Aegislash", tipo: "Aço/Fantasma", imagem: "pokemons/aegislash.png" },

    // 7ª e 8ª Geração (Alola/Galar)
    { numero: 778, nome: "Mimikyu", tipo: "Fantasma/Fada", imagem: "pokemons/mimikyu.png" }, 
    { numero: 812, nome: "Rillaboom", tipo: "Grama", imagem: "pokemons/rillaboom.png" },
    { numero: 864, nome: "Cursola", tipo: "Fantasma", imagem: "pokemons/cursola.png" },
    { numero: 887, nome: "Dragapult", tipo: "Dragão/Fantasma", imagem: "pokemons/dragapult.png" },
];

const jogos = [
    { id: 1, nome: "Pokémon Red/Blue", console: "Game Boy", ano: 1996, imagens: ["jogos/red.jpg", "jogos/blue.jpg"] },
    { id: 2, nome: "Pokémon Gold/Silver", console: "Game Boy Color", ano: 1999, imagens: ["jogos/gold.jpg", "jogos/silver.jpg"] },
    { id: 3, nome: "Pokémon Ruby/Sapphire", console: "Game Boy Advance", ano: 2002, imagens: ["jogos/ruby.jpg", "jogos/sapphire.jpg"] },
    { id: 4, nome: "Pokémon Diamond/Pearl", console: "Nintendo DS", ano: 2006, imagens: ["jogos/diamond.jpg", "jogos/pearl.jpg"] },
    { id: 5, nome: "Pokémon Scarlet/Violet", console: "Nintendo Switch", ano: 2022, imagens: ["jogos/scarlet.jpg", "jogos/violet.jpg"] },
    { id: 6, nome: "Pokémon Legends: Arceus", console: "Nintendo Switch", ano: 2022, imagens: ["jogos/legendsarceus.jpg"] }, 
];

const treinadores = [
    { id: 1, nome: "Red", cidade: "Pallet", insignias: 8, equipe: ["Pikachu", "Charizard", "Blastoise", "Venusaur", "Snorlax", "Lapras"], imagem: "treinadores/red.png" },
    { id: 2, nome: "Cynthia", cidade: "Celestic", insignias: 8, equipe: ["Garchomp", "Milotic", "Lucario", "Roserade", "Spiritomb", "gastrodroon"], imagem: "treinadores/cynthia.png" },
    { id: 3, nome: "Leon", cidade: "Postwick", insignias: 8, equipe: ["Charizard", "Rhyperior", "Seismitoad", "Haxorus", "Aegislash", "Rillaboom"], imagem: "treinadores/leon.png" },
    { id: 4, nome: "Ash", cidade: "Pallet", insignias: 8, equipe: ["Pikachu", "Dragonite", "Gengar", "Sirfetch'd", "Lucario", "Dracovish"], imagem: "treinadores/ash.png" },
    { id: 5, nome: "Lance", cidade: "Blackthorn", insignias: 8, equipe: ["Salamence", "Dragonite", "Kingdra", "Hydreigon", "Haxorus", "Flygon"], imagem: "treinadores/lance.png" },
];

export const getAllPokemons = () => pokemons;
export const getAllJogos = () => jogos; 
export const getAllTreinadores = () => treinadores;
