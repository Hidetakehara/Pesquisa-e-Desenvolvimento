function addTask () {
    var input = document.getElementById("input");
    // obter o texto atual do campo de entrada
    var newTask = input.value;
    // só adiciona um novo item à lista se algum texto tiver sido inserido
    if (newTask != "") {
        // criar novo item de lista HTML
        var item = document.createElement("li");
        // adicionar HTML para botões e texto da nova tarefa
        // Observação: é necessário usar '' por causa de "" no HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask;

// adicionar novo item como parte da lista existente
        document.getElementById("tasks").appendChild(item);

        /* Etapa 4 abaixo aqui */
    }
}

// alterar o estilo usado para um determinado item
function markDone (item) {
    item.className = 'finished';
}

/* Etapa 7 abaixo aqui */
function remove (item) {
    // remover o item completamente do documento
    item.remove();
}

/* Etapa 11 aqui embaixo */
function doAbout() {

}

/* Etapa 14 aqui embaixo */
function clearAbout() {

}