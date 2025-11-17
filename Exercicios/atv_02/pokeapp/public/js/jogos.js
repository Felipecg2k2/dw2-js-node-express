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
    const modalEditarJogo = document.getElementById('modalEditarJogo');
    
    modalEditarJogo.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget;
        
        const id = button.getAttribute('data-id');
        const nome = button.getAttribute('data-nome');
        const console = button.getAttribute('data-console');
        const ano = button.getAttribute('data-ano');
        const imagem = button.getAttribute('data-imagem');
        
        document.getElementById('formEditarJogo').action = `/jogos/editar/${id}`;
        document.getElementById('editarJogoId').value = id;
        document.getElementById('editarJogoNome').value = nome;
        document.getElementById('editarJogoConsole').value = console;
        document.getElementById('editarJogoAno').value = ano;
        
        // Mostrar imagem atual no edit
        const currentImageContainer = document.getElementById('currentImageJogo');
        if (imagem) {
            currentImageContainer.innerHTML = `
                <img src="/uploads/jogos/${imagem}" alt="${nome}" class="current-image">
                <div class="mt-1">
                    <small class="text-muted">${imagem}</small>
                </div>
            `;
        } else {
            currentImageContainer.innerHTML = '<span class="text-muted">Nenhuma imagem cadastrada</span>';
        }
        
        // Limpar previews
        document.getElementById('previewEditarImagemJogo').style.display = 'none';
        document.getElementById('editarImagemInputJogo').value = '';
    });

    // Limpar previews quando modal for fechado
    const modalAdicionar = document.getElementById('modalJogo');
    if (modalAdicionar) {
        modalAdicionar.addEventListener('hidden.bs.modal', function() {
            document.getElementById('previewImagemJogo').style.display = 'none';
            document.getElementById('imagemInputJogo').value = '';
        });
    }

    // Adicionar evento de clique nas imagens para ampliar
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('jogo-image')) {
            const src = e.target.src;
            const alt = e.target.alt;
            ampliarImagem(src, alt);
        }
    });

    // Auto-dismiss alerts após 5 segundos
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 5000);
    });
});