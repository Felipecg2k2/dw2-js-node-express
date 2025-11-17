// Variáveis globais
let slotAtual = null;
let pokemonsData = [];

// Função para buscar Pokémon
function encontrarPokemonPorId(id) {
    if (!pokemonsData || !Array.isArray(pokemonsData)) {
        console.warn('Dados de Pokémon não disponíveis');
        return null;
    }
    return pokemonsData.find(pokemon => pokemon.id == id);
}

// Função para abrir seletor de Pokémon
function abrirSeletorPokemon(slot) {
    slotAtual = slot;
    const modalSelecionar = new bootstrap.Modal(document.getElementById('modalSelecionarPokemon'));
    modalSelecionar.show();
    
    setTimeout(() => {
        const filtro = document.getElementById('filtroPokemon');
        if (filtro) {
            filtro.focus();
            filtro.value = '';
            
            const itens = document.querySelectorAll('.pokemon-item');
            itens.forEach(item => {
                item.style.display = 'block';
            });
        }
    }, 100);
}

// Função para selecionar Pokémon
function selecionarPokemon(element) {
    if (!slotAtual) return;
    
    const pokemonId = element.getAttribute('data-pokemon-id');
    const pokemonNome = element.getAttribute('data-pokemon-nome');
    const pokemonTipo = element.getAttribute('data-pokemon-tipo');
    
    slotAtual.innerHTML = `
        <div class="pokemon-info">
            <div class="pokemon-nome">${pokemonNome}</div>
            <div class="pokemon-tipo">${pokemonTipo}</div>
        </div>
        <button type="button" class="btn btn-sm btn-danger remover-pokemon" onclick="removerPokemon(event, this)">
            Remover
        </button>
    `;
    slotAtual.classList.add('preenchido');
    slotAtual.setAttribute('data-pokemon-id', pokemonId);
    
    slotAtual.onclick = function() {
        abrirSeletorPokemon(this);
    };
    
    atualizarEquipeInput();
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalSelecionarPokemon'));
    if (modal) {
        modal.hide();
    }
    
    slotAtual = null;
}

// Função para remover Pokémon do slot
function removerPokemon(event, button) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const slot = button.closest('.slot-pokemon');
    if (!slot) return;
    
    slot.innerHTML = '<div class="slot-vazio">+</div>';
    slot.classList.remove('preenchido');
    slot.removeAttribute('data-pokemon-id');
    
    slot.onclick = function() {
        abrirSeletorPokemon(this);
    };
    
    atualizarEquipeInput();
}

// Função para atualizar input hidden da equipe
function atualizarEquipeInput() {
    const modalAtivo = document.querySelector('.modal.show');
    
    if (!modalAtivo) return;
    
    if (modalAtivo.id === 'modalEditarTreinador') {
        const slots = document.querySelectorAll('#equipeSlotsEditar .slot-pokemon[data-pokemon-id]');
        const equipe = Array.from(slots).map(slot => slot.getAttribute('data-pokemon-id'));
        
        const equipeString = equipe.join(',');
        
        const contador = document.getElementById('contadorEquipeEditar');
        if (contador) {
            contador.textContent = equipe.length;
        }
        
        const equipeInput = document.getElementById('equipeInputEditar');
        if (equipeInput) {
            equipeInput.value = equipeString;
        }
        
    } else if (modalAtivo.id === 'modalTreinador') {
        const slots = document.querySelectorAll('#equipeSlotsAdicionar .slot-pokemon[data-pokemon-id]');
        const equipe = Array.from(slots).map(slot => slot.getAttribute('data-pokemon-id'));
        
        const equipeString = equipe.join(',');
        
        const contador = document.getElementById('contadorEquipeAdicionar');
        if (contador) {
            contador.textContent = equipe.length;
        }
        
        const equipeInput = document.getElementById('equipeInputAdicionar');
        if (equipeInput) {
            equipeInput.value = equipeString;
        }
    }
}

// Função para mostrar detalhes do Pokémon
function showPokemonDetails(id, nome, numero, tipo1, tipo2, altura, peso, habilidade, descricao, imagem) {
    document.getElementById('detalhesPokemonNome').textContent = nome || 'Não informado';
    document.getElementById('detalhesPokemonNumero').textContent = numero || 'N/A';

    const tiposContainer = document.getElementById('detalhesPokemonTipos');
    if (tipo1) {
        let tiposHTML = `<span class="type-badge" style="background: ${getTipoColor(tipo1)}">${tipo1}</span>`;
        if (tipo2 && tipo2.trim() !== '') {
            tiposHTML += ` <span class="type-badge" style="background: ${getTipoColor(tipo2)}">${tipo2}</span>`;
        }
        tiposContainer.innerHTML = tiposHTML;
    } else {
        tiposContainer.innerHTML = '<span class="text-muted">Não informado</span>';
    }

    const alturaText = altura && altura.trim() !== '' ? `${altura} m` : 'Não informada';
    document.getElementById('detalhesPokemonAltura').textContent = alturaText;

    const pesoText = peso && peso.trim() !== '' ? `${peso} kg` : 'Não informado';
    document.getElementById('detalhesPokemonPeso').textContent = pesoText;

    const habilidadeText = habilidade && habilidade.trim() !== '' ? habilidade : 'Não informada';
    document.getElementById('detalhesPokemonHabilidade').textContent = habilidadeText;

    const descricaoText = descricao && descricao.trim() !== '' ? descricao : 'Nenhuma descrição disponível.';
    document.getElementById('detalhesPokemonDescricao').textContent = descricaoText;

    const imagemElement = document.getElementById('detalhesPokemonImagem');
    if (imagem && imagem.trim() !== '') {
        imagemElement.src = imagem;
        imagemElement.alt = nome;
        imagemElement.style.display = 'block';
    } else {
        imagemElement.style.display = 'none';
    }

    const modal = new bootstrap.Modal(document.getElementById('modalDetalhesPokemon'));
    modal.show();
}

// Função para obter cores dos tipos Pokémon
function getTipoColor(tipo) {
    const cores = {
        'Normal': '#A8A878',
        'Fogo': '#F08030',
        'Água': '#6890F0',
        'Elétrico': '#F8D030',
        'Grama': '#78C850',
        'Gelo': '#98D8D8',
        'Lutador': '#C03028',
        'Veneno': '#A040A0',
        'Terra': '#E0C068',
        'Voador': '#A890F0',
        'Psíquico': '#F85888',
        'Inseto': '#A8B820',
        'Pedra': '#B8A038',
        'Fantasma': '#705898',
        'Dragão': '#7038F8',
        'Sombrio': '#705848',
        'Aço': '#B8B8D0',
        'Fada': '#EE99AC'
    };
    return cores[tipo] || '#68A090';
}

// Função para preview de imagem
function previewImage(input, previewId) {
    const preview = document.getElementById(previewId);
    const file = input.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
    }
}

// Função para ampliar imagem
function ampliarImagem(src, nome) {
    document.getElementById('imagemAmpliada').src = src;
    document.getElementById('tituloImagemAmpliada').textContent = nome;
    const modal = new bootstrap.Modal(document.getElementById('modalAmpliarImagem'));
    modal.show();
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== INICIALIZANDO SISTEMA DE TREINADORES ===');
    
    // Carregar dados dos Pokémon
    if (typeof window.pokemonsData !== 'undefined') {
        pokemonsData = window.pokemonsData;
        console.log('Dados dos Pokémon carregados:', pokemonsData.length);
    }

    // Modal Editar
    const modalEditar = document.getElementById('modalEditarTreinador');
    if (modalEditar) {
        modalEditar.addEventListener('show.bs.modal', function(event) {
            console.log('Abrindo modal de editar treinador');
            
            const button = event.relatedTarget;
            if (!button) {
                console.error('Botão não encontrado');
                return;
            }
            
            // Obter dados do botão
            const id = button.getAttribute('data-id');
            const nome = button.getAttribute('data-nome');
            const cidade = button.getAttribute('data-cidade');
            const equipeString = button.getAttribute('data-equipe');
            const imagem = button.getAttribute('data-imagem');
            
            console.log('Dados do treinador:', { id, nome, cidade, equipeString, imagem });
            
            // Preencher formulário básico
            const form = document.getElementById('formEditarTreinador');
            if (form) {
                form.action = `/treinadores/editar/${id}`;
            }
            
            const idInput = document.getElementById('editarTreinadorId');
            const nomeInput = document.getElementById('editarTreinadorNome');
            const cidadeInput = document.getElementById('editarTreinadorCidade');
            
            if (idInput) idInput.value = id || '';
            if (nomeInput) nomeInput.value = nome || '';
            if (cidadeInput) cidadeInput.value = cidade || '';
            
            // Processar equipe
            let equipeArray = [];
            try {
                if (equipeString && equipeString.trim() !== '' && equipeString !== 'null') {
                    equipeArray = JSON.parse(equipeString);
                }
                if (!Array.isArray(equipeArray)) {
                    equipeArray = [];
                }
            } catch (error) {
                console.error('Erro ao processar equipe:', error);
                equipeArray = [];
            }

            console.log('Equipe processada:', equipeArray);
            
            const equipeInput = document.getElementById('equipeInputEditar');
            if (equipeInput) {
                equipeInput.value = equipeArray.join(',');
            }

            // Mostrar imagem atual
            const currentImageContainer = document.getElementById('currentImageTreinador');
            if (currentImageContainer) {
                if (imagem && imagem !== 'null' && imagem.trim() !== '') {
                    currentImageContainer.innerHTML = `<img src="${imagem}" alt="${nome}" class="current-image">`;
                } else {
                    currentImageContainer.innerHTML = '<span class="text-muted">Nenhuma imagem cadastrada</span>';
                }
            }

            // Preencher slots da equipe
            const container = document.getElementById('equipeSlotsEditar');
            if (!container) {
                console.error('Container de slots não encontrado');
                return;
            }
            
            container.innerHTML = '';
            
            for (let i = 0; i < 6; i++) {
                const slot = document.createElement('div');
                slot.className = 'slot-pokemon';
                
                // Verificar se tem Pokémon neste slot
                if (i < equipeArray.length && equipeArray[i]) {
                    const pokemonId = equipeArray[i];
                    const pokemon = encontrarPokemonPorId(pokemonId);
                    
                    if (pokemon) {
                        console.log(`Preenchendo slot ${i} com:`, pokemon.nome);
                        slot.innerHTML = `
                            <div class="pokemon-info">
                                <div class="pokemon-nome">${pokemon.nome}</div>
                                <div class="pokemon-tipo">${pokemon.tipo1}${pokemon.tipo2 ? '/' + pokemon.tipo2 : ''}</div>
                            </div>
                            <button type="button" class="btn btn-sm btn-danger remover-pokemon" onclick="removerPokemon(event, this)">
                                Remover
                            </button>
                        `;
                        slot.classList.add('preenchido');
                        slot.setAttribute('data-pokemon-id', pokemonId);
                    } else {
                        console.log(`Pokémon não encontrado para ID: ${pokemonId}`);
                        slot.innerHTML = '<div class="slot-vazio">+</div>';
                    }
                } else {
                    // Slot vazio
                    slot.innerHTML = '<div class="slot-vazio">+</div>';
                }
                
                // Adicionar evento de clique
                slot.onclick = function() {
                    abrirSeletorPokemon(this);
                };
                
                container.appendChild(slot);
            }
            
            // Atualizar contador
            const slotsPreenchidos = container.querySelectorAll('.slot-pokemon.preenchido').length;
            const contador = document.getElementById('contadorEquipeEditar');
            if (contador) {
                contador.textContent = slotsPreenchidos;
            }
            
            console.log(`Slots preenchidos: ${slotsPreenchidos}`);
            
            // Limpar preview de nova imagem
            const previewImg = document.getElementById('previewEditarImagemTreinador');
            if (previewImg) {
                previewImg.style.display = 'none';
            }
            
            const fileInput = document.getElementById('editarImagemInputTreinador');
            if (fileInput) {
                fileInput.value = '';
            }
        });
    }

    // Modal Adicionar
    const modalAdicionar = document.getElementById('modalTreinador');
    if (modalAdicionar) {
        modalAdicionar.addEventListener('show.bs.modal', function() {
            console.log('Abrindo modal de adicionar treinador');
            
            const container = document.getElementById('equipeSlotsAdicionar');
            if (!container) return;
            
            container.innerHTML = '';
            for (let i = 0; i < 6; i++) {
                const slot = document.createElement('div');
                slot.className = 'slot-pokemon';
                slot.innerHTML = '<div class="slot-vazio">+</div>';
                slot.onclick = function() {
                    abrirSeletorPokemon(this);
                };
                container.appendChild(slot);
            }
            
            const equipeInput = document.getElementById('equipeInputAdicionar');
            if (equipeInput) {
                equipeInput.value = '';
            }
            
            const contador = document.getElementById('contadorEquipeAdicionar');
            if (contador) {
                contador.textContent = '0';
            }
            
            const previewImg = document.getElementById('previewImagemTreinador');
            if (previewImg) {
                previewImg.style.display = 'none';
            }
            
            const fileInput = document.getElementById('imagemInputTreinador');
            if (fileInput) {
                fileInput.value = '';
            }
        });
    }

    // Filtro de Pokémon
    const filtroPokemon = document.getElementById('filtroPokemon');
    if (filtroPokemon) {
        filtroPokemon.addEventListener('input', function() {
            const filtro = this.value.toLowerCase();
            const itens = document.querySelectorAll('.pokemon-item');
            
            itens.forEach(item => {
                const nome = item.getAttribute('data-pokemon-nome').toLowerCase();
                const texto = item.textContent.toLowerCase();
                if (nome.includes(filtro) || texto.includes(filtro)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Eventos de clique em slots vazios
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('slot-vazio')) {
            const slot = event.target.closest('.slot-pokemon');
            if (slot) {
                abrirSeletorPokemon(slot);
            }
        }
    });

    // Auto-dismiss alerts
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            if (alert && alert.parentNode) {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            }
        }, 5000);
    });
});