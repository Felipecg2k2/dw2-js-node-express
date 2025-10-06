import express from "express"
const app = express();

import indexRoutes from './routes/indexRoutes.js';
import pokemonRoutes from './routes/pokemonRoutes.js';
import jogosRoutes from './routes/jogosRoutes.js';
import treinadoresRoutes from './routes/treinadoresRoutes.js'; 

app.set('view engine', 'ejs')
app.use(express.static("public"));

app.use('/', indexRoutes); 
app.use('/pokemons', pokemonRoutes); 
app.use('/jogos', jogosRoutes); 
app.use('/treinadores', treinadoresRoutes); 
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});