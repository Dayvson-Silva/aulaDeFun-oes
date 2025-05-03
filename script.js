
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





function calcularSoma(...numeros){
    let soma = 0
    for(num of numeros){
        soma += num
    }
    return soma
}

console.log(calcularSoma(5,7,6,8));
