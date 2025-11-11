import express from "express"
const router = express.Router()
import Jogo from '../models/jogoModel.js';
import { uploadSingle } from '../middleware/multer-config.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Para usar __dirname com ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========== READ - LISTAR JOGOS ==========
router.get("/", async (req, res) => {
    try {
        const jogos = await Jogo.findAll({ 
            order: [['ano', 'ASC']] 
        });

        res.render('jogos', {
            jogos: jogos,
            titulo: "Gerenciar Jogos Pokémon",
            success: req.query.success,
            error: req.query.error
        });
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        res.render('jogos', {
            jogos: [],
            titulo: "Gerenciar Jogos Pokémon",
            error: "Erro ao carregar jogos"
        });
    }
});

// ========== CREATE - SALVAR NOVO JOGO COM IMAGEM ==========
router.post("/", uploadSingle('imagem'), async (req, res) => {
    try {
        const { nome, console: consoleName, ano } = req.body; // ← CORREÇÃO AQUI: renomeei 'console' para 'consoleName'
        
        console.log('📥 Dados recebidos:', { nome, console: consoleName, ano });
        console.log('📁 Arquivo recebido:', req.file);

        const jogoData = { 
            nome, 
            console: consoleName, // ← CORREÇÃO AQUI: use o nome correto
            ano 
        };

        // Se há arquivo de imagem, adicionar APENAS O NOME DO ARQUIVO ao banco
        if (req.file) {
            jogoData.imagem = req.file.filename;
            console.log('🖼️ Nome da imagem salva no banco:', jogoData.imagem);
        }
        
        const novoJogo = await Jogo.create(jogoData);
        console.log('✅ Jogo criado no banco:', novoJogo.toJSON());
        
        res.redirect('/jogos?success=Jogo criado com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao criar jogo:', error);
        const jogos = await Jogo.findAll({ order: [['ano', 'ASC']] });
        
        res.render('jogos', {
            jogos: jogos,
            titulo: "Gerenciar Jogos Pokémon",
            error: "Erro ao criar jogo: " + error.message
        });
    }
});

// ========== UPDATE - ATUALIZAR JOGO COM IMAGEM ==========
router.post("/editar/:id", uploadSingle('imagem'), async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, console: consoleName, ano } = req.body; // ← CORREÇÃO AQUI também
        
        console.log('📥 Atualizando jogo ID:', id);
        console.log('📁 Novo arquivo:', req.file);

        const jogo = await Jogo.findByPk(id);
        
        if (!jogo) {
            return res.redirect('/jogos?error=Jogo não encontrado');
        }

        const updateData = { 
            nome, 
            console: consoleName, // ← CORREÇÃO AQUI também
            ano 
        };

        // Se há nova imagem, atualizar APENAS O NOME DO ARQUIVO no banco
        if (req.file) {
            // Deletar imagem antiga se existir
            if (jogo.imagem) {
                const caminhoImagemAntiga = path.join(__dirname, '../public/uploads/jogos', jogo.imagem);
                if (fs.existsSync(caminhoImagemAntiga)) {
                    fs.unlinkSync(caminhoImagemAntiga);
                    console.log('🗑️ Imagem antiga deletada:', jogo.imagem);
                }
            }
            
            updateData.imagem = req.file.filename;
            console.log('🖼️ Nova imagem salva no banco:', updateData.imagem);
        }
        
        await jogo.update(updateData);
        console.log('✅ Jogo atualizado no banco');
        
        res.redirect('/jogos?success=Jogo atualizado com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao atualizar jogo:', error);
        res.redirect('/jogos?error=Erro ao atualizar jogo');
    }
});

// ========== DELETE - REMOVER JOGO ==========
router.post("/deletar/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const jogo = await Jogo.findByPk(id);
        
        if (jogo) {
            // Deletar imagem do servidor se existir
            if (jogo.imagem) {
                const caminhoImagem = path.join(__dirname, '../public/uploads/jogos', jogo.imagem);
                if (fs.existsSync(caminhoImagem)) {
                    fs.unlinkSync(caminhoImagem);
                    console.log('🗑️ Imagem deletada:', jogo.imagem);
                }
            }
            
            await jogo.destroy();
            console.log('✅ Jogo deletado:', id);
            res.redirect('/jogos?success=Jogo deletado com sucesso!');
        } else {
            res.redirect('/jogos?error=Jogo não encontrado');
        }
    } catch (error) {
        console.error('❌ Erro ao deletar jogo:', error);
        res.redirect('/jogos?error=Erro ao deletar jogo');
    }
});

// ========== ROTA PARA VERIFICAR ESTADO DO BANCO (DEBUG) ==========
router.get("/debug", async (req, res) => {
    try {
        const jogos = await Jogo.findAll({ 
            order: [['ano', 'ASC']] 
        });

        const debugInfo = jogos.map(jogo => ({
            id: jogo.id,
            nome: jogo.nome,
            console: jogo.console,
            ano: jogo.ano,
            imagem_no_banco: jogo.imagem,
            caminho_completo: jogo.imagem ? `/uploads/jogos/${jogo.imagem}` : null,
            imagem_existe: jogo.imagem ? fs.existsSync(path.join(__dirname, '../public/uploads/jogos', jogo.imagem)) : false
        }));

        res.json({
            mensagem: "Debug - Informações do banco",
            total_jogos: jogos.length,
            jogos: debugInfo
        });
    } catch (error) {
        console.error('Erro no debug:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;