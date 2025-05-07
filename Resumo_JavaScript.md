# 📘 Resumo de JavaScript - Boas Práticas e Fundamentos

## Boas Práticas

- Nomeação clara e significativa de variáveis
- Comentários úteis (sem excesso)
- Organização e identação do código
- Evitar variáveis globais
- Modularização (separar funções e responsabilidades)

## Case Sensitive

JavaScript diferencia letras maiúsculas de minúsculas:
let nome = "Ana";
console.log(Nome); // erro: Nome is not defined

## Sintaxe básica e Comentário

// Comentário de linha
/* Comentário
   de múltiplas linhas */

## Declaração de Variáveis

var: escopo de função (evitar)
let: escopo de bloco
const: constante, escopo de bloco

## Console e Debug

- console.log()
- console.error()
- console.table()
- Ferramentas do navegador: aba “Console” e “Sources”

## Operadores

Atribuição: =, +=, -=, *=, /=
Aritméticos: +, -, *, /, %, **
Relacionais: ==, !=, >, <, >=, <=, ===, !==
Lógicos: &&, ||, !

## Estrutura de Controle e Laços

Decisão: if, else if, else, switch
Laços: for, while, do...while, for...of, for...in

## Arrays

let lista = [1, 2, 3];
Métodos: push, pop, map, filter, forEach, find, reduce

## Funções e Escopo

function somar(a, b) {
  return a + b;
}
Escopo: Global vs. Local (let e const respeitam blocos)

## DOM e Manipulação

Alterar conteúdo: document.getElementById("titulo").innerText = "Novo título";
Alterar atributos: setAttribute("src", "imagem.jpg");
Eventos: addEventListener("click", funcao);
DOM: getElementById, querySelector, createElement, appendChild

## Objeto, Parâmetros e Retorno

let pessoa = { nome: "Ana", idade: 20, falar: function () { console.log("Olá!"); } };
Parâmetros e retorno:
function dobro(x) { return x * 2; }

## Programação Assíncrona e API Fetch

setTimeout, setInterval, Promises, async/await
fetch("https://api.exemplo.com")
  .then(res => res.json())
  .then(data => console.log(data));

## JSON

let json = '{"nome": "Carlos", "idade": 30}';
let obj = JSON.parse(json);
JSON.stringify(obj);

## Funções Modernas

const somar = (a, b) => a + b;

## Spread e REST

Spread: let novos = [...numeros, 4, 5];
REST: function somar(...args) { return args.reduce((acc, val) => acc + val, 0); }

