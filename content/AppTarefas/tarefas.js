// 
let tarefaSelecionada;

// array de tarefas lido do localStorage (de JSON->JS)
let tarefas = JSON.parse(localStorage.getItem("tarefas"))
if(!tarefas) {
    tarefas = []
}

const btAdicionar = document.querySelector("#btAdicionar")
const txTarefa = document.querySelector("#txTarefa")
btAdicionar.addEventListener('click', adicionar)

//txTarefa.addEventListener('keydown',filtraEnterAdiciona)
//window.addEventListener("keydown", filtraDelExcluir)

txTarefa.addEventListener('keydown', filtrarTecla)
window.addEventListener("keydown", filtrarTecla)



// popula a ol de tarefas com o conteúdo lido do
// array tarefas
atualizarListaDeTarefas()



