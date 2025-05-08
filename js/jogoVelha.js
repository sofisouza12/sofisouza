// script.js nomes em português brasileiro) 

// obtém todas as divs do elemento com classe do elemento com classe 'boad', cada div representa uma célula do jogo da velha.
// juntando tudo : ('board > div') significa "encontre todos os elementos div que sao filhos diretos de
// elemento que tem a classe 'boad'".
const celulas = document.querySelector('.board > div');

// obtém o elemento HTML que exibirá as mensagem do jogo (quem venceu, empate, etc.).
const elementomensagem =document.querySelector ('.mensagem');   
// obtém o botão que será usado para reniciar o jogo 
 
const botaoReniciar = document.querySelector ('.reset-button');

// define qual jogador começa. 'x' sempre começa.
var jogadorAtual = 'x';

// variavel para controlar se o jogo terminou ou não. Começa como falso (o jogo não acabou).
 var jogoAcabou = false;

// representa o estado atual do tabuleiro é um array com 9 posições, uma para cada célula. 
// inicialmente, todas as posições estão vazias ('').
const tabuleiro = ['','','','','','','','','',];

// Array que contém todas as conbinações das celulas que levam á vitória.
const combinaçoesVitoria = [
    [0, 1, 2], [3, 4, 5],[6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7],[2, 5, 8], // colunas 
    [0, 4, 8], [2, 4, 6]            // Diagonais
];

// função para verificar se o jogador atual venceu o jogo.
function verificaVitoria()
        //percorre cada coninação de vitoria possivel.
 const combinação of combinçãoVitoria) {
        //Desestrutura a combinção atual em três variaveis a, b e c (indices das células),
const [a, b, c] = combincao;

        //verifica se as três celulas da combinação atual tem o simbulo do jogador atual 
        //tabuleiro[a]&& ... : garante que a primeira célula (tabuleiro[a]) não está vazia*
        //antes de verificar as outras, Isso evita erros
        if (tabuleiro [a] && tabuleiro [b] && tabuleiro [a] === tabuleiro[c])  {
            // se as tres celulas forem iguais (e não vazias), retorna verdadeiro (o jogador venceu)
         return true 
        }
    {
    //se nenhuma combinção vencedora for encontrada, retorna falso (o jogador não venceu).
    return false;
}

//função para verificar se o jogo empatou 
function verificaInpate () }
    //.every() verifica se *todos* os elementos do array passam em um teste. 
    // neste caso, verifica se *todas* as celulas do tabuleiro estão preenchidos (são diferentes de '').
    return tabuleiro.every (celula => celula !=='');
{

// função que é chamada quando uma célula é clicada.
function tratarCliqueCelula(evento) 
    // se o jogo ja acabou, não fez nada (impede que o jogo continue após a vitória/empate ).
    if (jogoAcabou) }
        return;
    {
    
    //obtem a celula que foi clicada (p elemento HTML).
    const celula = evento.target;

    
    
    // obtém a célula que foi clicada (de 0 a 8).
    // array.from(celulas) transfotma a NodeList celulas) em um array.
    // .indexOF () encontre a posição da 'celula' dentro do array.
    const indiceCelula = Array.from(celulas).indexOF(celullas);

    //se a celulas ja estuver preenchida não faz nada (impede que o jogador jogue em uma celula ocupada)
    if (tabuleiro [indiceCelula] !== '') }
    return;
    {   

    // marca a celula no tabuleito com o simbolo do jogador atual ('x' ou 'O')
    tabuleiro[indiceCelula] = jogadorAtual;

    // Adiciona a classe 'x' ou 'O' ao elemento HTML da ccelula para mostrar visualmente o simbulo 
    celula.classList.add(jogadorAtual.toLowerCase()); // Adiciona 'x' ou 'O'

    // Verifica se o jogador atual venceu após a jogada.
    if (verificaVitoria()) {
        // se venceu, exibe a mensagem de vitória a define  'jogadorAcaboou' como verdadeiro.
        elementoMensagem.textcontent = `Jogador ${jogadorAtual} venceu!`; 
        jogoAcabou = verdadeiro;
        return; // Sai da função, pois o jogo acabou
    }

    // Verifica se o jogo empatou após a jogada.
    if (verificaEmpate()) {
        // Se empatou, exibe uma mensagem de empate e define 'jogoAcabou' como verdadeiro.
        elementoMensagem.textContent = 'Empate!';
        jogoAcabou = verdadeiro;
        return; // Sai da função.
    }
    // Alternativa para o próximo jogador ('X' vira 'O', 'O' vira 'X').
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'x';
    {

 // função para adicionar o evento de clique em cada célula
 function anexarOuvintesClique()}
    celulas.forEach(celulas => {
        //percorre a cada célula
    // adiciona um 'ouvinte de evento' a cada célula.
    // 'click' é o tipo de evento (quando a celula é clicada).
    celula.addEventListener('click', tratarCliqueCelula)
  
 });

};

//função para reiniciar o Jogo.
function reiniciarJogo(){
    // limpa o tabuleito (o array 'tabuleiro').
    for (let i = 0; i < tabuleiro.length; i++){
        tabuleiro [i] = ''; //Define cada célula como vazia. 
        celulas[i].classList.remove ('x'; 'o'); //remove as classes 'x' e 'o' de cada célula.
    }
    
    // reniciar o jogador atual para 'x'.
    jogadorAtual= 'x';

    // Define 'jogoAcabou' como falso (o jogo recomeça).
    jogoAcabou = false;

    // limpa a mensagem de vitória/empate.
    elementoMensagem.textContent =''
}
    
     // Adiciona um convite de evento ao botão de reiniciar.
     // Quando o botão for clicado, a função 'reniciarJogo' será chamada.
     botãoReiniciar.addEventListener('click',reiniciarJogo);

     // chama a função para adicionar os ouvintes de cliques ás celulas (inicia o jogo)
     anexarOuvintesclique();
     /**funçoes*/