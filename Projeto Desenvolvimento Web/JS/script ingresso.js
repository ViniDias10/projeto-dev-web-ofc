// Funcionalidade formulário de cadastro

document.getElementById('cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    
    setTimeout(function() {
        alert('Cadastro realizado com sucesso!');
        document.getElementById('formulario-container').classList.remove('hidden');
        document.getElementById('listar-ingresso').classList.remove('hidden');
        
    
        document.querySelector('.container-cadastro').classList.add('hidden');
    }, 500);
});




// Conexão com LocalStorage
let ingressos = getIngressosSalvos();

function getIngressosSalvos() {
    const savedIngressos = localStorage.getItem('ingressos');
    return savedIngressos ? JSON.parse(savedIngressos) : [];
}

function salvarIngressos() {
    localStorage.setItem('ingressos', JSON.stringify(ingressos));
}

function limparFormulario() {
    document.getElementById('partida').value = '';
    document.getElementById('arqInteira').value = '0';
    document.getElementById('arqMeia').value = '0';
    document.getElementById('vipInteira').value = '0';
    document.getElementById('vipMeia').value = '0';
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const partida = document.getElementById('partida').value;
    const arqInteira = parseInt(document.getElementById('arqInteira').value);
    const arqMeia = parseInt(document.getElementById('arqMeia').value);
    const vipInteira = parseInt(document.getElementById('vipInteira').value);
    const vipMeia = parseInt(document.getElementById('vipMeia').value);

    const ingresso = {
        nome,
        email,
        partida,
        setores: {
            arqInteira,
            arqMeia,
            vipInteira,
            vipMeia
        }
    };

    ingressos.push(ingresso);
    salvarIngressos();
    alert('Sua compra foi confirmada');
    limparFormulario();
    document.getElementById('botao-listar').style.display = 'block'; 
});

document.getElementById('cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    
});

// Função para renderizar a lista de ingressos
function abrirPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    renderizarIngressos('popup-ingressos');
}


function fecharPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


function renderizarIngressos(elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';

    if (ingressos.length === 0) {
        container.innerHTML = '<p>Nenhum ingresso disponível.</p>';
        return;
    }

    ingressos.forEach((ingresso, index) => {
        const totalArqInteira = ingresso.setores.arqInteira * 80;
        const totalArqMeia = ingresso.setores.arqMeia * 40;
        const totalVipInteira = ingresso.setores.vipInteira * 200;
        const totalVipMeia = ingresso.setores.vipMeia * 100;
        const total = totalArqInteira + totalArqMeia + totalVipInteira + totalVipMeia;

        const listItem = document.createElement('div');
        listItem.classList.add('ingresso');
        listItem.innerHTML = `
            <p><strong>Nome:</strong> ${ingresso.nome}</p>
            <p><strong>Email:</strong> ${ingresso.email}</p>
            <p><strong>Partida:</strong> ${ingresso.partida}</p>
            <p><strong>Arquibancada Inteira:</strong> ${ingresso.setores.arqInteira}</p>
            <p><strong>Arquibancada Meia:</strong> ${ingresso.setores.arqMeia}</p>
            <p><strong>VIP Inteira:</strong> ${ingresso.setores.vipInteira}</p>
            <p><strong>VIP Meia:</strong> ${ingresso.setores.vipMeia}</p>
            <p><strong>Valor Total:</strong> R$ ${total.toFixed(2)}</p>
            <button onclick="excluirIngresso(${index}); fecharPopup();">Cancelar compra</button>
            <button onclick="editarIngresso(${index});">Editar</button>
            <button onclick="efetuarPagamento(${index});">Efetuar Pagamento</button>
            <hr>
        `;
        container.appendChild(listItem);
    });
}



document.getElementById('botao-listar').addEventListener('click', function() {
    abrirPopup();
});


function mostrarMensagemNenhumIngresso() {
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');
    const popupIngressos = document.getElementById('popup-ingressos');

    popupContent.style.textAlign = 'center';
    popupIngressos.innerHTML = '<p>Nenhum ingresso disponível.</p>';
    popup.style.display = 'block';
}





document.getElementById('botao-listar').addEventListener('click', function() {
    if (ingressos.length === 0) {
        mostrarMensagemNenhumIngresso();
    } else {
        abrirPopup();
    }
});

// Atualizar
function changeQuantity(id, delta) {
    const input = document.getElementById(id);
    const newValue = Math.max(0, parseInt(input.value) + delta);
    input.value = newValue;
}


// Deletar
function excluirIngresso(index) {
    ingressos.splice(index, 1); 
    salvarIngressos(); 
    alert("Sua compra foi cancelada");
    fecharPopup();
    renderizarIngressosNormal();
}


function renderizarIngressosNormal() {
    renderizarIngressos('popup-ingressos');
}


function editarIngresso(index) {
    const ingresso = ingressos[index];
    document.getElementById('editar-partida').value = ingresso.partida;
    document.getElementById('editar-arqInteira').value = ingresso.setores.arqInteira;
    document.getElementById('editar-arqMeia').value = ingresso.setores.arqMeia;
    document.getElementById('editar-vipInteira').value = ingresso.setores.vipInteira;
    document.getElementById('editar-vipMeia').value = ingresso.setores.vipMeia;

    
    document.getElementById('popup-editar').style.display = 'block';

    
    document.getElementById('form-editar').onsubmit = function(event) {
        event.preventDefault();
        ingresso.partida = document.getElementById('editar-partida').value;
        ingresso.setores.arqInteira = parseInt(document.getElementById('editar-arqInteira').value);
        ingresso.setores.arqMeia = parseInt(document.getElementById('editar-arqMeia').value);
        ingresso.setores.vipInteira = parseInt(document.getElementById('editar-vipInteira').value);
        ingresso.setores.vipMeia = parseInt(document.getElementById('editar-vipMeia').value);
        salvarIngressos();
        alert("Ingresso atualizado com sucesso");
        fecharPopupEditar();
        renderizarIngressosNormal();
    };
}


function fecharPopupEditar() {
    document.getElementById('popup-editar').style.display = 'none';
}


function fecharPopupEditar() {
    document.getElementById('popup-editar').style.display = 'none';
}

function efetuarPagamento(index) {
    alert("Pagamento efetuado com sucesso para o ingresso " + (index + 1));


}


