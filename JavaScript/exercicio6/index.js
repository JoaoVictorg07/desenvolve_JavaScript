const tarefas = [];

    function adicionarTarefa() {
        const descricao = document.getElementById("descricao").value.trim();
            
        if (descricao) {
            // Cria um novo objeto Tarefa com status inicial false (não concluído)
            const novaTarefa = { descricao: descricao, status: false };
            tarefas.push(novaTarefa);
            document.getElementById("descricao").value = ""; // Limpa o campo de texto
            atualizarListaTarefas(); // Atualiza a exibição da lista de tarefas
        }
    }

    function atualizarListaTarefas() {
        const container = document.getElementById("tarefasContainer");
        container.innerHTML = "";

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

            // Adiciona o checkbox e a descrição à div da tarefa
            divTarefa.appendChild(checkbox);
            divTarefa.appendChild(descricaoTarefa);

            // Adiciona a tarefa ao container
            container.appendChild(divTarefa);
        });
    }

    // Função para alterar o status de uma tarefa
    function alterarStatusTarefa(index) {
        tarefas[index].status = !tarefas[index].status; // Alterna entre true e false
        atualizarListaTarefas(); // Atualiza a exibição da lista de tarefas
    }