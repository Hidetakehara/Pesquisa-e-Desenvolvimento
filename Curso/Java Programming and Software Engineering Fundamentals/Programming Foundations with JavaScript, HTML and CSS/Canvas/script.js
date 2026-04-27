function changeColor(){

    var divElement1 = document.getElementById("div1");
    var divElement2 = document.getElementById("div2");

    divElement1.className = "blueback";
    divElement2.className = "orangeback";
}

function lime() {
    var divElement1 = document.getElementById("div1");   
    divElement1.style.backgroundColor = "lime"; 

    var context = divElement1.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(10,10,60,60);
    context.fillRect(80,10,60,60);

    context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("Hello",15,45);
}

function magenta() {
    var divElement2 = document.getElementById("div2");
    var context2 = divElement2.getContext("2d");

    // pinta fundo do segundo canvas
    divElement2.style.backgroundColor = "magenta"; 
    context2.clearRect(0, 0, divElement2.width, divElement2.height);

    // também limpa o primeiro canvas
    var divElement1 = document.getElementById("div1");
    var context1 = divElement1.getContext("2d");
    context1.clearRect(0, 0, divElement1.width, divElement1.height);
}