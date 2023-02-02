// js e java tem a mesma linguagem origem que é o caches, então js é parecido com java
// usando o console (inspecionar elemento) 
// case sensitive, igual o java

console.log("Olá, sou o console"); 
// não precisa de ; no final do comando mas é melhor por 
console.log("Você me usará muito");
// console exibe informações e erros Console.log(""); com "C"

// variaveis tipo nome valor no java, mas no js não tem tipo, quando coloca valor ele já escolhe o tipo, nome é camelCase
// variavel de numero no js é sempre Number, não existe float, double, int etc 
let userName = "Rafael Fiel";
let userId = 12345;
let userEmail = "01rafamiranda@gmail.com";
let userLogin = true;
let userPay = null;
let userAddress;


// exibição no console
console.log(userName, userId, userLogin, userEmail);
// control + barra de espaço depois do comando dá recomendações de 
console.log(userPay);
console.log(userAddress);
// null != undefined 

// exibindo a tipagem das variaveis, propriedade type of
console.log(userName, "=", typeof userName);
console.log(userId, "=", typeof userId);
console.log(userLogin, "=", typeof userLogin);
console.log(userEmail, "=", typeof userEmail);
console.log(userPay, "=", typeof userPay);
// object = objeto = coleção de dados, matriz é um objeto 
console.log(userAddress, "=", typeof userAddress);

// userLogin = 23453345 mudaria de boolean para number, pois se eu coloco um novo valor a variavel, ela pode mudar de tipo automaticamente, tomar cuidado com isso 

var userHeight = 1.93;
// let != var, variavel por var ela tem um escopo global, let é, então nem todo mundo tem acesso, let mais atual, actionscript = JS moderno
console.log(userHeight);

for (var i=0; i<=10; i++) {
    console.log(i);
}

console.log(i); 
i += 200;
console.log(i); 
// cria variavel i como local (só usaria no "for"), mas sendo "var" virou global, então da pra usar no codigo inteiro (fora do "for")

// let userName = "Rafael" != userName = "Rafael", o 1º ta declarando a variavel pois tem o let na frente

// constantes: variavel que não tem valor alterado, usa com os objetos, pois não muda estrutura muda o conteudo interno, lembrar de ser caps lock

const DATANASC = "24/09/2001"
console.log(DATANASC);
// error: 
// DATANASC = "08/05/2000"
// console.log(dataNasc);
// error pois constante não pode alterar valor

// concatenação no java:
console.log("Usuário: " + userName + " ID: " + userId);

// concatenação no JS:
// Template string
// Inciar e terminar com o sinal de crase `escrever o que quiser`
// Placeholder - variaveis- metodos - funções - calcular o que quiser
// $(o que será chamado)
console.log(`Usuário: ${userName} Id: ${userId} ${10+10}`);

// arrays: constante pois muda os indices não a estrutura, usa colchetes []
// não precisa declarar tamanho do array ou colocar uma estrutura de repetição 
const arrayNames = ["Eu", "Tu", "Ele", "Nos", "Vos", "Eles"]
console.log(arrayNames);
console.log(arrayNames[4]);
// dá pra exibir uma posição exata do array
// array recebe todos tipos de valores/variaveis, não precisa ser todos valores do mesmo tipo
console.log(typeof(arrayNames)); 
// typeof() 

// objetos: usa chaves, {}, mais inteligente que o array, coleção de 
const pessoas = {
    Nome: "Rafael",
    Email: "00rafamiranda@gmail.com",
    Celular: "213443554654",
}

console.log(pessoas);
console.log(pessoas.nome);
// exibe especificamente 



