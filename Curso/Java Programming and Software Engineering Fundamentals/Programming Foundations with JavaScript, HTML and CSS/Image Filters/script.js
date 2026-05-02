// Variáveis globais para armazenar imagens e canvas
var fgImage = null;                                                                             // Imagem original carregada pelo usuário
var fgCanvas;                                                                                   // Canvas onde a imagem original será desenhada
var grayImage = null;                                                                           // Imagem que receberá o filtro preto e branco
var redImage = null;                                                                            // Imagem que receberá o filtro vermelho
var filterCanvas;                                                                               // Canvas onde a imagem filtrada será exibida

// Função chamada quando o usuário seleciona um arquivo de imagem
function loadImage() {
  var file = document.getElementById("fileInput");                                              // Pega o arquivo do input
  fgImage = new SimpleImage(file);                                                              // Cria objeto SimpleImage com o arquivo
  fgCanvas = document.getElementById("ImageCanvas");                                            // Canvas da imagem original
  filterCanvas = document.getElementById("FilterCanvas");                                       // Canvas da composição (filtros)
  fgImage.drawTo(fgCanvas);                                                                     // Desenha a imagem original no canvas
}

// Função para limpar os dois canvas (imagem original e filtrada)
function clearCanvas() {
  doClear(fgCanvas);                                                                            // Limpa o canvas da imagem original
  doClear(filterCanvas);                                                                        // Limpa o canvas da composição
}

// Função auxiliar que realmente limpa um canvas específico
function doClear(canvas) {
  var context = canvas.getContext("2d");                                                        // Obtém o contexto 2D do canvas
  context.clearRect(0, 0, canvas.width, canvas.height);                                         // Apaga tudo dentro do canvas
}



// Função que aplica o filtro preto e branco
function doGray() {
  // Verifica se a imagem foi carregada
  if (fgImage != null && fgImage.complete()) {
    grayImage = new SimpleImage(fgImage);                                                       // Cria uma cópia da imagem original
    filterGray();                                                                               // Aplica o filtro na cópia
    grayImage.drawTo(filterCanvas);                                                             // Desenha a imagem filtrada no canvas de composição
  } else {
    alert("Carregue uma imagem primeiro!");                                                     // Mensagem de alerta caso não haja imagem
  }
}

// Função que percorre todos os pixels e aplica o filtro preto e branco
function filterGray() {
  for (var pixel of grayImage.values()) {                                                       // Itera sobre cada pixel da imagem
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;                        // Calcula média das cores
    pixel.setRed(avg);                                                                          // Define o valor médio para o canal vermelho
    pixel.setGreen(avg);                                                                        // Define o valor médio para o canal verde
    pixel.setBlue(avg);                                                                         // Define o valor médio para o canal azul
    // Resultado: pixel fica em tons de cinza
  }
}



// Função que aplica o filtro vermelho
function doRed() {
  // Verifica se a imagem foi carregada
  if (fgImage != null && fgImage.complete()) {
    redImage = new SimpleImage(fgImage);                                                       // Cria uma cópia da imagem original
    filterRed();                                                                               // Aplica o filtro na cópia
    redImage.drawTo(filterCanvas);                                                             // Desenha a imagem filtrada no canvas de composição
  } else {
    alert("Carregue uma imagem primeiro!");                                                    // Mensagem de alerta caso não haja imagem
  }
}

function filterRed() {
  // Percorre todos os pixels da imagem 'redImage'
  for (var pixel of redImage.values()) {                                                       // Itera sobre cada pixel da imagem    
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;                       // Calcula a média das três cores (R, G, B) do pixel
    if (avg < 128) {                                                                           // Se a média for menor que 128, o pixel é relativamente escuro  
      pixel.setRed(2 * avg);                                                                   // Define o canal vermelho para o dobro da média (aumentando a intensidade do vermelho)                     
      pixel.setGreen(0);                                                                       // Zera verde e azul, deixando apenas vermelho
      pixel.setBlue(0);
    } else {                                                                                   // Se a média for 128 ou maior, o pixel é relativamente claro                
      pixel.setRed(255);                                                                       // Define o canal vermelho para o valor máximo (255), saturando o vermelho
      pixel.setGreen(2 * avg - 255);                                                           // Define o canal verde para um valor que diminui à medida que a média aumenta (criando um efeito de vermelho mais puro) 
      pixel.setBlue(2 * avg - 255);
    }
  }
}



// Função que aplica o filtro negativo
function doNegative() {
  if (fgImage != null && fgImage.complete()) {
    var negativeImage = new SimpleImage(fgImage);                                             // Cria cópia da imagem original
    filterNegative(negativeImage);                                                            // Aplica o filtro
    negativeImage.drawTo(filterCanvas);                                                       // Desenha no canvas de composição
  } else {
    alert("Carregue uma imagem primeiro!");
  }
}

// Função que percorre os pixels e inverte as cores
function filterNegative(image) {
  for (var pixel of image.values()) {
    pixel.setRed(255 - pixel.getRed());
    pixel.setGreen(255 - pixel.getGreen());
    pixel.setBlue(255 - pixel.getBlue());
  }
}



// Função que aplica o filtro de desfoque
function doBlur() {
  if (fgImage != null && fgImage.complete()) {
    var blurImage = new SimpleImage(fgImage);                                                 // Cria cópia da imagem original
    filterBlur(blurImage);                                                                    // Aplica o filtro de desfoque
    blurImage.drawTo(filterCanvas);                                                           // Desenha no canvas de composição
  } else {
    alert("Carregue uma imagem primeiro!");
  }
}

// Função que percorre os pixels e aplica um efeito de desfoque
function filterBlur(image) {
  var distance = 10;                                                                          // distância máxima para buscar pixels vizinhos

  for (var pixel of image.values()) {
    if (Math.random() < 0.5) {
      // metade das vezes mantém o pixel original
      continue;
    } else {
      // metade das vezes pega um pixel vizinho
      var x = pixel.getX();
      var y = pixel.getY();

      // gera deslocamentos aleatórios dentro da distância
      var dx = Math.floor((Math.random() * (2 * distance + 1)) - distance);
      var dy = Math.floor((Math.random() * (2 * distance + 1)) - distance);

      var newX = x + dx;
      var newY = y + dy;

      // garante que as coordenadas sejam válidas
      if (newX < 0) newX = 0;
      if (newX >= image.getWidth()) newX = image.getWidth() - 1;
      if (newY < 0) newY = 0;
      if (newY >= image.getHeight()) newY = image.getHeight() - 1;

      var neighborPixel = fgImage.getPixel(newX, newY);

      pixel.setRed(neighborPixel.getRed());
      pixel.setGreen(neighborPixel.getGreen());
      pixel.setBlue(neighborPixel.getBlue());
    }
  }
}



// Função que aplica o filtro arco-íris
function doRainbow() {
  if (fgImage != null && fgImage.complete()) {
    var rainbowImage = new SimpleImage(fgImage);                                              // Cria cópia da imagem original
    filterRainbow(rainbowImage);                                                              // Aplica o filtro
    rainbowImage.drawTo(filterCanvas);                                                        // Desenha no canvas de composição
  } else {
    alert("Carregue uma imagem primeiro!");
  }
}

// Função que percorre os pixels e inverte as cores
function filterRainbow(image) {
  for (var pixel of image.values()) {

    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;                       // Calcula a média das três cores (R, G, B) do pixel
    var y = pixel.getY();                                                                      // Obtém a coordenada Y do pixel
    var Height = image.getHeight();                                                            // Obtém a altura da imagem
    var rangeColor = Height / 7;                                                               // Define a altura de cada faixa de cor (dividindo a imagem em 7 partes iguais)

// Faixa 1: Vermelho
    if (y < rangeColor) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }

      else if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } 
    
// Faixa 2: Laranja
    else if (y < 2 * rangeColor) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8 * avg);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(1.2 * avg - 51);
        pixel.setBlue(2 * avg - 255);
      }
    }

// Faixa 3: Amarelo
    else if (y < 3 * rangeColor) {
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    }

// Faixa 4: Verde
    else if (y < 4 * rangeColor) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    }

// Faixa 5: Azul
    else if (y < 5 * rangeColor) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      }
      else {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    }

// Faixa 6: Anil
    else if (y < 6 * rangeColor) {
      if (avg < 128) {
        pixel.setRed(0.8 * avg);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      }
      else {
        pixel.setRed(1.2 * avg - 51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    }

// Faixa 7: Roxo
    else {
      if (avg < 128) {
        pixel.setRed(1.6 * avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avg);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    }
  }
}
