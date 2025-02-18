// Função para carregar tarefas do localStorage ao abrir a página
function carregarTarefas() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    return tarefasSalvas;
}

// Array de objetos Tarefa
let tarefas = carregarTarefas();

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const descricao = document.getElementById("descricao").value.trim();

    if (descricao) {
        // Cria um novo objeto Tarefa com status inicial false (não concluído)
        const novaTarefa = { descricao: descricao, status: false };
        tarefas.push(novaTarefa);
        localStorage.setItem("tarefas", JSON.stringify(tarefas)); // Armazena no localStorage
        document.getElementById("descricao").value = ""; // Limpa o campo de texto
        atualizarListaTarefas(); // Atualiza a exibição da lista de tarefas
    }
}

// Função para atualizar a exibição da lista de tarefas
function atualizarListaTarefas() {
    const container = document.getElementById("tarefasContainer");
    container.innerHTML = ""; // Limpa o container para atualizar

    tarefas.forEach((tarefa, index) => {
        // Cria um elemento para cada tarefa
        const divTarefa = document.createElement("div");
        divTarefa.classList.add("tarefa");

        // Checkbox para alterar o status da tarefa
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.status;
        checkbox.addEventListener("change", function () {
            alterarStatusTarefa(index);
        });

        // Descrição da tarefa
        const descricaoTarefa = document.createElement("span");
        descricaoTarefa.textContent = tarefa.descricao;
        descricaoTarefa.classList.add(tarefa.status ? "tarefaConcluida" : "tarefaNaoConcluida");

        // Botão para excluir a tarefa
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("excluir");
        btnExcluir.addEventListener("click", function () {
            excluirTarefa(index);
        });

        // Adiciona o checkbox, descrição e botão de exclusão à div da tarefa
        divTarefa.appendChild(checkbox);
        divTarefa.appendChild(descricaoTarefa);
        divTarefa.appendChild(btnExcluir);

        // Adiciona a tarefa ao container
        container.appendChild(divTarefa);
    });
}

// Função para alterar o status de uma tarefa
function alterarStatusTarefa(index) {
    tarefas[index].status = !tarefas[index].status; // Alterna entre true e false
    localStorage.setItem("tarefas", JSON.stringify(tarefas)); // Atualiza o localStorage
    atualizarListaTarefas(); // Atualiza a exibição da lista de tarefas
}

// Função para excluir uma tarefa
function excluirTarefa(index) {
    tarefas.splice(index, 1); // Remove a tarefa do array
    localStorage.setItem("tarefas", JSON.stringify(tarefas)); // Atualiza o localStorage
    atualizarListaTarefas(); // Atualiza a exibição da lista de tarefas
}

// Atualiza a lista de tarefas ao carregar a página
window.onload = atualizarListaTarefas;