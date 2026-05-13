

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
        item.innerHTML =    '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
                            '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
                            '<input type="button" class="important" onclick="important(this.parentNode)" value="!" /> ' +
                            newTask;

        // adicionar novo item como parte da lista existente
        document.getElementById("tasks").appendChild(item);

        /* Etapa 4 abaixo aqui */
        input.value = "";
        input.placeholder = "Enter next task...";
    }
}

// alterar o estilo usado para um determinado item
function markDone(item) {
    item.classList.toggle('finished');
}

/* Etapa 7 abaixo aqui */
function remove(item) {
    if (item.classList.contains("finished")) {
        item.remove();
    } else {
        alert("You cannot remove an activity that has not been completed.");
    }
}

function important(item) {
    // se já estiver marcado como importante, remove a marcação
    if (item.classList.contains('important')) {
        item.classList.remove('important');
    } else {
        // caso contrário, adiciona a marcação
        item.classList.add('important');
    }
}

/* Etapa 11 aqui embaixo */
function doAbout() {
    var div = document.getElementById("divabout");
    div.innerHTML = "This website was created by Anderson Takehara, with mentorship from Duke University, as a component of a Java specialization program.";
    div.className = "aboutcolor";
}

/* Etapa 14 aqui embaixo */
function clearAbout() {
    var div = document.getElementById("divabout");
    div.innerHTML = "";
    div.className = "";

}
