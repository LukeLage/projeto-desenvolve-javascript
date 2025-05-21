const tarefas = [];

const inputTarefa = document.getElementById('novaTarefa');
const listaTarefas = document.getElementById('listaTarefas');

function adicionarTarefa() {
    const descricao = inputTarefa.value.trim()

    if (descricao === '') {
        alert('Por favor, insira uma tarefa.')
        return
    };

    tarefas.push({
        descricao: descricao,
        status: false,
    });

    inputTarefa.value = '';

    atualizarLista();
}

function atualizarStatus(index){
    tarefas[index].status = !tarefas[index].status;
    atualizarLista();
}

function atualizarLista() {
    listaTarefas.innerHTML = '';
    
    tarefas.forEach((tarefa, index) => {
        const divTarefa = document.createElement('div');
        divTarefa.className = 'tarefa-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.onclick = () => atualizarStatus(index);
        
        const descricao = document.createElement('p');
        descricao.className = `tarefa-descricao ${tarefa.status ? 'tarefa-concluida' : ''}`;
        descricao.textContent = tarefa.descricao;
        
        divTarefa.appendChild(checkbox);
        divTarefa.appendChild(descricao);
        
        listaTarefas.appendChild(divTarefa);
    });
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        adicionarTarefa();
    }
})