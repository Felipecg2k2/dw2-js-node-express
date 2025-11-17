import express from "express";
import session from "express-session";
import './config/sequelize-config.js';

const app = express();

// Importar controllers
import pokemonController from './controllers/pokemonController.js';
import jogosController from './controllers/jogosController.js';
import treinadoresController from './controllers/treinadoresController.js';
import userController from './controllers/userController.js';

app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração de sessão
app.use(session({
    secret: 'pokemon-secret-key-2024-pokeapp-crud',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 24 * 60 * 60 * 1000,
        secure: false
    }
}));

// MIDDLEWARE - passar user para todas as views
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

// Rotas públicas (acesso sem login)
app.use('/user', userController);

// Middleware de autenticação para rotas protegidas
app.use((req, res, next) => {
    const publicRoutes = ['/user/login', '/user/registro'];
    if (publicRoutes.includes(req.path)) {
        return next();
    }
    if (!req.session.user) {
        return res.redirect('/user/login');
    }
    next();
});

// ROTAS PROTEGIDAS
app.use('/pokemons', pokemonController); 
app.use('/jogos', jogosController); 
app.use('/treinadores', treinadoresController); 

//  ROTA PRINCIPAL - RENDERIZA INDEX
app.get("/", (req, res) => {
    res.render('index', {
        titulo: "Dashboard - PokéApp"
    });
});

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