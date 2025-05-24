// function saudacao(nome){
//     console.log(`Boraaaaaa ${nome} !`);

// }

// saudacao("biuuuuuu")

// function somar(a,b){
//     return a + b
// }

// function subtrair(a, b) {
//     return a - b;
// }

// function multiplicar(a, b) {
//     return a * b;
// }

// function dividir(a, b) {
//     if(b === 0){
//         return 'divisão por zero não existe !'
//     }
//     return a / b;
// }
// let resultado = somar(2,6)
// console.log("Adição" ,resultado);

// let resultadoSubtracao = subtrair(10, 4);
// console.log("Subtração:", resultadoSubtracao);

// let resultadoMultiplicacao = multiplicar(3, 7);
// console.log("Multiplicação:", resultadoMultiplicacao);

// let resultadoDivisao = dividir(2, 0);
// console.log("Divisão:", resultadoDivisao);

// function listaFilmes(principal, ...moiDeFilmes){
//     console.log(`Filme Principal ${principal} ! `);
//     console.log(`Filmes em cartases ${moiDeFilmes.join(", ")} ! `);

// }

// listaFilmes("Avatar", "Vingadores" , "bruna sufistinhha" , "vem dançar");

// Atividade 02
// Crie uma função chamada calcularDesconto que receba dois parâmetros: preco e desconto.
// A função deve calcular o preço final do produto após aplicar o desconto e retornar esse valor.
// Chame a função com diferentes valores e exiba o resultado no console.

// function calcularDesconto(preco, desconto) {

//     if (preco >= 100) {
//         return preco * (1 - desconto / 100);
//     }
//     if (preco > 0 && preco <= 99) {
//         return 'Sem desconto';
//     }
//     return preco;
// }

// let preco = parseInt(prompt("Desconto 10% acima de R$100 , qual o valor da sua compra ?"));
// let desconto = 10;

// alert(calcularDesconto(preco, desconto));

// document.getElementById('resultado').textContent = calcularDesconto(preco, desconto);

// Atividade 03
// Crie uma função chamada calcularSoma que utilize o rest operator para aceitar um número
// indefinido de parâmetros e calcular a soma de todos eles.
// Chame a função com diferentes quantidades de números e exiba o resultado no console.

// function calcularSoma(...numeros){
//     let soma = 0
//     for(num of numeros){
//         soma += num
//     }
//     return soma
// }

// console.log(calcularSoma(5,7,6,8));

// Atividade 06
// Crie uma função arrow chamada filtrarPares que receba um array de números
// como parâmetro e retorne um novo array contendo apenas os números pares.

// const filtrarPares = (numeros) => {
//     const pares = []
//     for(num of numeros){
//         if(num % 2 ===0){
//             pares.push(num)
//         }
//     }
//     return pares
// }
// console.log(filtrarPares([1,2,3,4,5,6,7,8,9,10]));

// Em seguida, crie outra função arrow chamada calcularMedia que receba um
// array de números e retorne a média desses números.

// const calcularMedia = () =>{

// }

// Praticar o uso de arrow functions com lógica condicional e manipulação de arrays.
// Objetivo:
// Faça o seguinte:
// 1 Chame a função filtrarPares passando um array de números.
// 2 Use o resultado de filtrarPares como argumento para a função calcularMedia.
// 3 Exiba no console o array filtrado e a média dos números pares.

// CONTINUAÇÃO DE FUNÇOES CALLBACK

// const numeros = [1,2,3,4,5]

// numeros.forEach((numero, index) => {
//     console.log(`o elemento no indece ${index} é ${numero}`);

// })

//  Atividade 01
// Crie um script que contenha um array com alguns números e utilize o
// método forEach() para percorrê-lo. Para cada número no array, verifique
// se ele é positivo, negativo ou zero, e exiba uma mensagem no console
// indicando o resultado.

// const num = [0,1,2,-3,4,-5,6,-45,-23]

// num.forEach((numero ) => {
//     if(numero > 0){
//        console.log(`o ${numero} é positivo `);

//     }else if(numero === 0){
//         console.log(`o ${numero} é zeroooooooo`);

//     }else{
//         console.log(`o ${numero} é negativo`);

//     }

// })

//FUNÇÃO MAP

// const numeros = [1,2,3,4,5,6,7,8,9]

// const quadrados = numeros.map((num) => {
//     return num * num
// })

// console.log(quadrados);

// const celsius = [25,30,40]

// const fahremheit = celsius.map((num) => {
//     let temp =  (num * 9/5) + 32
//     console.log(

//         ` O numero convertido de celsius ${num}° para fahrenheit é : °f ${temp}`
//     );
// })

//FUNÇÃO FILTER

// const numeros = [1,2,3,4,5]
// const pares = numeros.filter(numero => numero % 2 === 1)
// console.log(pares);

// const nomes = ["ana","Bruno","carlos","abacaxi","abelha"]
// usar o metodo startWith para pegar os nomes que começa com a letra a

// const letraA = nomes.filter( nome => nome.startsWith("a"))
// console.log(letraA);

//FUNÇÃO REDUCE

// const numeros = [1,2,3,4,5]

// const sun = numeros.reduce((acumulador,valor) => {
//     return acumulador + valor

// })

// console.log(sun);

// faça a soma de valores
// const pontos = [8.9,10,4.5,8,7.5]
// const soma = pontos.reduce((acc, valor) => {
//     return acc + valor
// })
// console.log(`A soma de todos os pontos é ${soma} `);

// // usando if ternario           se o valor for maior que acc print valor se nao acc
// const maiorNum = pontos.reduce((acc, valor) => valor > acc ? valor : acc )

// console.log(`A maior nota é ${maiorNum}`);

// OBJETO LITERAL

// let pessoa = { nome:"bil", idade: 50}
// //deletando apropriedade
// delete pessoa.idade
// // criando uma nova propriedade
// console.log(pessoa.profisao = "vendendor de arroz",pessoa.nome);

// Atividade 01
// Crie um objeto chamado carro que contenha as seguintes propriedades:

// marca: uma string representando a marca do carro.
// modelo: uma string representando o modelo do carro.
// ano: um número representando o ano de fabricação.

// Após criar o objeto, exiba no console cada uma das
// propriedades separadamente (marca, modelo, e ano).
// Objetivo:
// Praticar a criação de objetos e o acesso às suas propriedades.

// let veiculo = {
//     marca:"fiat",
//     modelo:"uno",
//     ano:2002
// }

// console.log(veiculo.marca,veiculo.modelo,veiculo.ano);

// Atividade 02
// Crie um objeto chamado pessoa com as
// propriedades nome, idade, e profissao.

// Objetivo:
// Praticar a manipulação de objetos, alterando propriedades existentes,
// adicionando novas propriedades, e exibindo o objeto atualizado.
// Em seguida:
// Altere a propriedade profissao para um novo valor.
// Adicione uma nova propriedade chamada cidade ao objeto.
// Exiba no console o objeto completo após as modificações.

// let pessoa = {
//     nome:"Dayvson",
//     idade: 30,
//     profissao: "mottu meu amor"
// }

// pessoa.novaProfisao = "analista de dados"
// pessoa.cidade = "olinda"
// console.log(pessoa);

// exercicio= monte um objeto com informações de um usuario e mostrre  o objeto criando no console do navegador

// let pessoa = {
//     Nome: "Dayvson",
//     Idade: 30,
//     Cidade: "Olinda",
//     Profissao: "Mottu meu amor"
// }

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const cidade = document.getElementById("cidade");
const profisao = document.getElementById("profissao");
const botao = document.getElementById("aperta");
const form = document.querySelector("form");
const showModal = document.querySelector(".showModal");
const showInfo = document.querySelector(".showInfo")
const closeModal = document.getElementById("close");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showModal.style.display = "flex"
  showInfo.innerHTML = `
      <p> Nome:${nome.value}</p>
      <p> Idade:${idade.value}</p>
      <p> cidade:${cidade.value}</p>
      <p> Profissão: ${profisao.value}</p>
  `
});

closeModal.addEventListener("click", () => {
  showModal.style.display = "none";
});
