
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



const filtrarPares = (numeros) => {
    const pares = []
    for(num of numeros){
        if(num % 2 ===0){
            pares.push(num)
        }
    }
    return pares
}
console.log(filtrarPares([1,2,3,4,5,6,7,8,9,10]));




// Em seguida, crie outra função arrow chamada calcularMedia que receba um
// array de números e retorne a média desses números.


const calcularMedia = () =>{
    
}

// Praticar o uso de arrow functions com lógica condicional e manipulação de arrays.
// Objetivo:
// Faça o seguinte:
// 1 Chame a função filtrarPares passando um array de números.
// 2 Use o resultado de filtrarPares como argumento para a função calcularMedia.
// 3 Exiba no console o array filtrado e a média dos números pares.


