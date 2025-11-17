// Função para mostrar detalhes completos
function showDetails(pokemon) {
    console.log('Pokemon data:', pokemon);
    
    document.getElementById('detalhesNome').textContent = pokemon.nome || 'Não informado';
    document.getElementById('detalhesNumero').textContent = pokemon.numero || 'N/A';

    const tipoComplete = pokemon.tipo2 ? 
        `${pokemon.tipo1}/${pokemon.tipo2}` : 
        pokemon.tipo1 || 'Não informado';
    document.getElementById('detalhesTipo').textContent = tipoComplete;

    const altura = pokemon.altura ? `${pokemon.altura} m` : 'Não informada';
    document.getElementById('detalhesAltura').textContent = altura;

    const peso = pokemon.peso ? `${pokemon.peso} kg` : 'Não informado';
    document.getElementById('detalhesPeso').textContent = peso;

    const habilidade = pokemon.habilidade || 'Não informada';
    document.getElementById('detalhesHabilidade').textContent = habilidade;

    const descricao = pokemon.descricao || 'Nenhuma descrição disponível.';
    document.getElementById('detalhesDescricao').textContent = descricao;

    // Mostrar imagem nos detalhes
    const imagemContainer = document.getElementById('detalhesImagemContainer');
    if (pokemon.imagem) {
        imagemContainer.innerHTML = `<img src="${pokemon.imagem}" alt="${pokemon.nome}" class="current-image">`;
    } else {
        imagemContainer.innerHTML = '<span class="text-muted">Nenhuma imagem</span>';
    }

    const modalElement = document.getElementById('modalDetalhes');
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
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
    // Botões de detalhes
    document.querySelectorAll('.btn-detalhes').forEach(button => {
        button.addEventListener('click', function() {
            try {
                const pokemonData = JSON.parse(this.getAttribute('data-pokemon'));
                showDetails(pokemonData);
            } catch (error) {
                console.error('Erro ao parsear dados do Pokémon:', error);
                alert('Erro ao carregar detalhes do Pokémon');
            }
        });
    });
    
    // Modal de edição
    const modalEditar = document.getElementById('modalEditar');
    
    if (modalEditar) {
        modalEditar.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            
            const id = button.getAttribute('data-id');
            const numero = button.getAttribute('data-numero');
            const nome = button.getAttribute('data-nome');
            const tipo1 = button.getAttribute('data-tipo1');
            const tipo2 = button.getAttribute('data-tipo2');
            const descricao = button.getAttribute('data-descricao');
            const altura = button.getAttribute('data-altura');
            const peso = button.getAttribute('data-peso');
            const habilidade = button.getAttribute('data-habilidade');
            const imagem = button.getAttribute('data-imagem');
            
            document.getElementById('formEditar').action = `/pokemons/editar/${id}`;
            document.getElementById('editarId').value = id;
            document.getElementById('editarNumero').value = numero;
            document.getElementById('editarNome').value = nome;
            document.getElementById('editarTipo1').value = tipo1;
            document.getElementById('editarTipo2').value = tipo2 || '';
            document.getElementById('editarDescricao').value = descricao || '';
            document.getElementById('editarAltura').value = altura || '';
            document.getElementById('editarPeso').value = peso || '';
            document.getElementById('editarHabilidade').value = habilidade || '';
            
            // Mostrar imagem atual no edit
            const currentImageContainer = document.getElementById('currentImage');
            if (imagem) {
                currentImageContainer.innerHTML = `<img src="${imagem}" alt="${nome}" class="current-image">`;
            } else {
                currentImageContainer.innerHTML = '<span class="text-muted">Nenhuma imagem</span>';
            }
            
            // Limpar previews
            document.getElementById('previewEditarImagem').style.display = 'none';
            document.getElementById('editarImagemInput').value = '';
        });
    }

    // Limpar previews quando modal for fechado
    const modalAdicionar = document.getElementById('modalPokemon');
    if (modalAdicionar) {
        modalAdicionar.addEventListener('hidden.bs.modal', function() {
            document.getElementById('previewImagem').style.display = 'none';
            document.getElementById('imagemInput').value = '';
        });
    }

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