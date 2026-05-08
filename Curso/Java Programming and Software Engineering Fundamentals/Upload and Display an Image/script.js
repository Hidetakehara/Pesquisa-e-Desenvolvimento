// Seleciona os elementos do HTML que serão usados
const fileInput = document.getElementById('fileInput'); // Campo de upload de arquivo
const canvas = document.getElementById('canvas');       // Área de desenho (canvas)
const ctx = canvas.getContext('2d');                    // Contexto 2D para manipular pixels
let img = new Image();                                  // Objeto de imagem para carregar a foto escolhida

// Evento disparado quando o usuário seleciona um arquivo
fileInput.addEventListener('change', function() {
  const file = fileInput.files[0]; // Pega o primeiro arquivo selecionado
  if (file) {
    const reader = new FileReader(); // Cria um leitor de arquivos
    reader.onload = function(e) {
      img.src = e.target.result;     // Define a imagem carregada como fonte do objeto "img"
    }
    reader.readAsDataURL(file);      // Converte o arquivo em uma URL base64 para ser exibido
  }
});

// Quando a imagem terminar de carregar, desenha no canvas
img.onload = function() {
  canvas.width = img.width;          // Ajusta a largura do canvas para a largura da imagem
  canvas.height = img.height;        // Ajusta a altura do canvas para a altura da imagem
  ctx.drawImage(img, 0, 0);          // Desenha a imagem no canvas na posição (0,0)
};

// Evento disparado ao clicar no botão "Aplicar escala de cinza"
document.getElementById('makeGray').addEventListener('click', function() {
  // Captura os dados da imagem atual no canvas
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data; // Array com valores RGBA de cada pixel

  // Percorre todos os pixels da imagem
  for (let i = 0; i < data.length; i += 4) {
    // Calcula a média dos valores de vermelho, verde e azul
    const avg = (data[i] + data[i+1] + data[i+2]) / 3;

    // Define os três canais de cor (R, G, B) como a média, criando o efeito de cinza
    data[i] = avg;     // Vermelho
    data[i+1] = avg;   // Verde
    data[i+2] = avg;   // Azul
    // data[i+3] é o canal Alpha (transparência), não alterado
  }

  // Atualiza o canvas com os novos dados da imagem modificada
  ctx.putImageData(imageData, 0, 0);
});
