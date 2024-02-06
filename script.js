const imagemVisualizaçao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto"); 
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniatura0 = document.getElementById("0-imagem-miniatura");
const miniatura1 = document.getElementById("1-imagem-miniatura");
const miniatura2 = document.getElementById("2-imagem-miniatura");

// objeto: conjunto de propriedades, separa por "," ; pode ser qualquer tipo de dado (string, booleano, numero etc); a diferença é que diferencia as informações, o array não //

const verdeCipreste = {
  nome: "Verde-Cipreste",
  pasta: "imagens-verde-cipreste"
}

const azulInverno = {
  nome: "Azul-inverno",
  pasta: "imagens-azul-inverno"
}

const meiaNoite = {
  nome: "Meia-noite",
  pasta: "imagens-meia-noite"
}

const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar"
}

const rosaClaro = {
  nome: "Rosa-Claro",
  pasta: "imagens-rosa-claro"
}

const opçoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opçoesCaixa = ["41 mm", "45 mm"];

// para acessar um campo especifico do objeto: nomeDoObjeto.campoQueQuero; ex: meiaNoite.pasta , aqui estou pegando o campo "pasta" do objeto "meiaNoite" //
// para acessar um valor especifico da lista, utilizo o indice: minhaLista[3] //

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem () { 

  const idOpçaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
  // crio uma variável para busar no html qual opção de imagem está selecionada; basicamente ele busca o input pelo nome, o nome em questão é "opçao-imagem" porem, quero a opçao marcada, entao preciso usar o :checked (obs: os dois pontos fazem referencia a um estado particular no momento, no caso desse, o estado é marcado), finalizo com o ".id" pois só quero guardar o id do elemento que busquei//

  imagemSelecionada = idOpçaoSelecionada.charAt(0);
  // preciso trocar a imagem que está selecionada, então utilizo o primeiro caractere do id da opção selecionada para atualizar a minha variavel da imagem selecionada ;; charAt vai me retornar o caractere especifico de uma string, se eu coloco "0" no parametro, eu quero o primeiro caractere, que no caso de "idOpçaoSelecionada", é o numero do id da imagem.

  imagemVisualizaçao.src=`./imagens/opcoes-cores/${opçoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
  // preciso trocar a imagem que está sendo exibida, então troco o "src" dela, utilizo o mesmo início e final, mudando apenas o nome da imagem (o nome da imagem troca apenas seu id, então utilizo a variavel imagemSelecionada para trocar o id dinamicamente) // 
}

// função para mudar o tamanho da imagem e o titulo de acordo com a opção de tamanho selecionada //

function trocarTamanho() {

  const idOpçaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
  // quero pegar o id da opção de tamanho selecionada, e vou usar esse id pra att a variavel //

  tamanhoSelecionado = idOpçaoSelecionada.charAt(0);
  // uso charArt pra pegar o numero (primeiro elemento do id) do tamanho selecionado // 

  tituloProduto.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${opçoesCaixa[tamanhoSelecionado]}`;
  // utilizo innerText para pegar o texto que está dentro da tag, para atualizá-la, mantendo o início do texto e trocando somente o tamanho. Utilizo o array "opçoesCaixa" que tem os dois tamanhos possiveis e de parametro utilizo o id do tamanho selecionado //

  if (opçoesCaixa[tamanhoSelecionado] === "41 mm") {

    imagemVisualizaçao.classList.add("caixa-pequena");
    // adicionei a classe css "caixa-pequena" (diminui a escala da imagem) no elemento com id "imagem-visualizacao" //
  } else {

    imagemVisualizaçao.classList.remove("caixa-pequena");
    // se nao for o de 41mm selecionado, tiro a classe que diminui o tamanho da imagem // 
  }
}

function trocarCores () {
 
  // pego o id da cor selecionada //
  const idOpçaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;

  // troco a variavel "corSelecionada" para a cor com o numero respectivo ao id da cor selecionada //
  corSelecionada = idOpçaoSelecionada.charAt(0);  

  // troco o texto do titulo da pagina, utilizando as variaveis para alterar de acordo com a seleção //
  // como "opçoesCores" é um objeto e eu quero somente um item do objeto (nome), eu preciso colocar .nome no final //
  tituloProduto.innerText = `Pulseira loop esportiva ${opçoesCores[corSelecionada].nome} para caixa de ${opçoesCaixa[tamanhoSelecionado]}`;

  nomeCor.innerHTML = `Cor - ${opçoesCores[corSelecionada].nome}`
  // a variavel "nomeCor" pega o id do nome das cores do html; pego o texto que está presente no html e substituo pelo conjunto opçoesCores[aqui dentro fica a cor selecionada - variavel que vai reconhecer pelo numero do id].nome (pois é essa informação que eu quero que apareça, e nao a pasta) //

  miniatura0.src=`./imagens/opcoes-cores/${opçoesCores[corSelecionada].pasta}/imagem-0.jpeg`
  miniatura1.src=`./imagens/opcoes-cores/${opçoesCores[corSelecionada].pasta}/imagem-1.jpeg`
  miniatura2.src=`./imagens/opcoes-cores/${opçoesCores[corSelecionada].pasta}/imagem-2.jpeg`
  // criei uma variável que pega o id de cada miniatura, aqui estou substituindo no html a partir do src, o diretório de cada imagem, de acordo com a cor selecionada. pego o id do elemento no html, substituo a parte do diretório que indica a imagem para a opção de cor selecionada, usando o conjunto "opçoesCores" e seu elemento "pasta" //

  imagemVisualizaçao.src=`./imagens/opcoes-cores/${opçoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
  // utilizo o "imagemVisualizacao", que é a imagem principal da pulseira completa, troco a fonte dela (src), mantendo o inicio do diretorio e utilizando o conjunto opçoesCores (optando agora por usar sua pasta) e especificando a cor selecionada //
}