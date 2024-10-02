// 
let tarefaSelecionada;

window.addEventListener("keydown", filtraDelExcluir)

// array de tarefas lido do localStorage (de JSON->JS)
let tarefas = JSON.parse(localStorage.getItem("tarefas"))
if(!tarefas) {
    tarefas = []
}

// popula a ol de tarefas com o conteúdo lido do
// array tarefas
tarefas.forEach((tarefa, indice) => {
    const liTarefa = document.createElement('li')
    liTarefa.innerText = tarefa
    liTarefa.id = indice
    liTarefa.addEventListener("click", selecionarTarefa)
    
    const olTarefas = document.querySelector('#olTarefas')
    olTarefas.appendChild(liTarefa)
})


const btAdicionar = document.querySelector("#btAdicionar")
const txTarefa = document.querySelector("#txTarefa")

btAdicionar.addEventListener('click', adicionar)
txTarefa.addEventListener('keydown',filtraEnterAdiciona)

function filtraEnterAdiciona(evento){
    if(evento.key === "Enter") {
        adicionar()        
    }
}

function filtraDelExcluir(evento){
    if(evento.key === "Delete") {
        excluir()        
    }
}

function excluir() {
    //removemos a tarefa do array de tarefas
    tarefas.splice(tarefaSelecionada.id, 1)

    //atualizamos o localStorage
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    //atualizar a interface (HTML) para mostrar
    //que a tarefa foi removida

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

function adicionar() {
    
    const txTarefa = document.querySelector("#txTarefa")
    // Pegamos o conteúdo de texto da caixa de texto
    const novaTarefa = txTarefa.value

    //Apagamos o conteúdo da caixa de texto
    //após guardá-lo em uma nova variável (novaTarefa)
    txTarefa.value=""
    txTarefa.focus()

    const liNovaTarefa = document.createElement("li")
    const olTarefas = document.querySelector("#olTarefas")

    //Adicionando string com a tarefa ao novo li
    liNovaTarefa.innerText = novaTarefa
    liNovaTarefa.addEventListener("click", selecionarTarefa)

    //Adicionar o novo li à lista de tarefas (ol)
    olTarefas.appendChild(liNovaTarefa)

    //Adicionar novaTarefa no localStorage (para persistir)
    tarefas.push(novaTarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
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