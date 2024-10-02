/**
 * Funções de modelo
 * 
 */

function adicionarTarefa(novaTarefa) {
    //Adicionar novaTarefa no localStorage (para persistir)
    tarefas.push(novaTarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

function excluirTarefa(umaTarefa) {
    //removemos a tarefa do array de tarefas
    tarefas.splice(umaTarefa.id, 1)

    //atualizamos o localStorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas)) 
}

/**
 * Funções de Controlador
 * 
 */

function filtrarTecla(evento) {
    switch (evento.key) {
        case "Enter":
            adicionar()
            break;
        case "Delete":
            excluir()
            break;
        default:
            break;
    } 
}

function adicionar() {
    const novaTarefa = lerNovaTarefa()
    resetarTxTarefa() // visão
    adicionarTarefa(novaTarefa) // modelo
    atualizarListaDeTarefas() // visão
}

function excluir() {
    excluirTarefa(tarefaSelecionada) // modelo
    atualizarListaDeTarefas() // visão
}


/**
 * Funções de Visão
 * 
 */

//VISÂO:
function atualizarListaDeTarefas() {
    //Primeiro removemos todos os li com tarefas que
    //estavam na lista (no HTML)
    const olTarefas = document.querySelector('#olTarefas')
    olTarefas.innerHTML=""

    // repopula a ol de tarefas com o conteúdo lido do
    // array tarefas
    tarefas.forEach((tarefa, indice) => {
        const liTarefa = document.createElement('li')
        liTarefa.innerText = tarefa
        liTarefa.id = indice
        liTarefa.addEventListener("click", selecionarTarefa)
        
        const olTarefas = document.querySelector('#olTarefas')
        olTarefas.appendChild(liTarefa)
    })
}


function lerNovaTarefa() {
    const txTarefa = document.querySelector("#txTarefa")
    // Pegamos o conteúdo de texto da caixa de texto
    const novaTarefa = txTarefa.value
    return novaTarefa    
}

function resetarTxTarefa() {
    const txTarefa = document.querySelector("#txTarefa")
    //Apagamos o conteúdo da caixa de texto
    //após guardá-lo em uma nova variável (novaTarefa)
    txTarefa.value=""
    txTarefa.focus()

}


function selecionarTarefa(evento) {
    //se tarefaSelecionada for diferente de null
    //i.e. se existir uma tarefa que já tenha sido
    //clicada, então muda a cor de fundo dela
    if(tarefaSelecionada)
        tarefaSelecionada.style.backgroundColor='white'
    
    //target representa o li que foi clicado
    tarefaSelecionada = evento.target
    
    //mudamos a cor de fundo do li da tarefa
    tarefaSelecionada.style.backgroundColor='yellow'
}