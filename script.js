function adicionarTarefa(event) {
    event.preventDefault(); 

    const nomeTarefa = document.getElementById('nomeTarefa').value;
    const statusTarefa = document.getElementById('statusTarefa').value;

    // Cria um novo item de tarefa
    const li = document.createElement('li');
    li.textContent = `${nomeTarefa} - ${statusTarefa}`;
    
    li.appendChild(botaoRemover);
    document.getElementById('listTarefas').appendChild(li);

    // Limpa o campo de entrada
    document.getElementById('formulario').reset();
}

// Função para limpar todas as tarefas
document.getElementById('limparTarefas').onclick = () => {
    const listTarefas = document.getElementById('listTarefas');
    listTarefas.innerHTML = ''; 
};
