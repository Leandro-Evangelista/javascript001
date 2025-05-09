// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
// Console e Debug

let nome = "Leandro"
let idade = 38

console.log(nome, idade)

//Tipos de dados

//test == string
let cidade = "americana"


// numérico = number
let salario = 1500.35

//boleano == boolean
let fumante = false

console.log (typeof cidade)
console.log (typeof salario)
console.log (typeof fumante)



// Operadores
//     Operador Atribuição ( = )
//     Operadores aritméticos (+ , - , / , * )
console.log(10+15)
let n1 = 10
let n2 = 3

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2) //módulo (resto da divisão)

//     Operadores relacionais ( > , < , >= , <= , !=, == )

console.log(n1 == n2) // igualdade
console.log(n1 != n2) // diferente
console.log(n1 > n2) // maior
console.log(10 < 10) //menor
console.log(10 <= 10) //menor igual
console.log(150 >= 175) // maior igual

//     Operadores lógicos ( ! , && , || )
console.log(!10>2) //não - inverte o resultado, se for verdadeiro muda para falso, se for falso muda para verdadeiro.
console.log(!false)
console.log(10>2 && 35<100 && n1>n2) //e - todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro.
console.log(10<2 || 100 == 150 || 57==57) // Ou - apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro , o resultado só será falso quando todas as verificações forem falses.

//DESAFIO
let preco = 100
let precoAcrescimo = 0.17
let precoDesconto = 0.07 



//faça um código que acrescente 17% ao preço e imprima .
//faça um código que desconte 7% do preço e imprima.

console.log(preco + (preco * 0.17)) //acrescimo
console.log(preco - (preco * 0.07)) //desconto 




// Estrutura
//     Estrutura de controle/decisão
//     Laços de repetição

if (10>100){
    console.log("10 é maior que 5")
    }
    else 
    {
        console.log("10 é menor que 100")
    }

let idadecandidato = 20

if (idadecandidato >= 18){
    console.log("Candidato pode dirigir")
} else{
    console.log("Candidato não pode dirigir")
}


//Desafio
//faça um código que verifique se o salário é maior que 5000 se for mostre a mensagem "salario OK" se não mostre a mensagem "Precisa de aumento de x reais" .

let salarioFunc = 3000


if (salarioFunc => 5000)
    {
    console.log("Salario OK")
    }   
else
    {
    console.log("Precisa de aumento")
    }  
    
     if (salarioFunc < 5000)
    {
        let aumento = 5000 - salarioFunc
        console.log("Precisa de aumento de " + aumento + " reais")
    }   




// Arrays 

// Funções básicas
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// // Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
 