import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração do storage com pastas organizadas
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Determinar a pasta baseada na rota
    let folder = 'uploads';
    
    if (req.originalUrl.includes('/pokemons')) {
      folder = 'uploads/pokemons';
    } else if (req.originalUrl.includes('/treinadores')) {
      folder = 'uploads/treinadores';
    } else if (req.originalUrl.includes('/jogos')) {
      folder = 'uploads/jogos';
    }
    
    const fullPath = path.join(__dirname, '../public', folder);
    cb(null, fullPath);
  },
  filename: (req, file, cb) => {
    // Nome único para evitar conflitos
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueName + path.extname(file.originalname));
  }
});

// Filtro para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Apenas arquivos de imagem são permitidos!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limite
  }
});

// Middleware para upload único de imagem
export const uploadSingle = (fieldName) => upload.single(fieldName);

export default upload;