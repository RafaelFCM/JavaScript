//Começo Ex1 
console.log("Ex1: ");
let maior = 0;
let num1 = 0;
for (i = 0; i < 5; i++) {
    // num1 = prompt("Digite um número: ");
    console.log("Número digitado: " + num1);

    if (num1 > 10) {
        maior++;
    }
}

console.log(maior + " deles são maiores do que 10");

//Fim Ex1 


console.log("");


//Começo Ex2
console.log("Ex2: ");
let soma = 0;
let num2 = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
];
console.log("Números digitados: " + num2);

for (i = 0; i < 5; i++) {
    soma += num2[i];
};
let media = soma / 5;
console.log("Soma: " + soma);
console.log("Média: " + media);

for (i = 0; i < 5; i++) {
    if (num2[i] > media) {
        console.log(num2[i] + " é maior que a média");
    }
}
//Fim Ex2



console.log("");



//Começo Ex3
console.log("Ex3: ");
let num3 = 0;

num3 = Math.floor(Math.random() * 300);
console.log("Número sorteado: " + num3);

if (num3 >= 100 && num3 <= 200) {
    console.log("Está no intervalo esperado");
} else {
    console.log("Não está no intervalo esperado");
}
//Fim Ex3



console.log("");



//Começo Ex4
console.log("Ex4: ");
let pesoPlaneta = 0;
let codPlanetas = 0;
let gravidade = 0;
let pesoTerra = 0;

// codPlanetas = prompt("Digite um código de planeta [1-Mercúrio, 2-Vênus, 3-Marte, 4-Júpiter, 5-Saturno, 6-Urano]");

// pesoTerra = Math.floor(Math.random() * 300);
// pesoTerra = prompt("Digite o peso na Terra que quer descobrir em outro planeta: ");
let pesoTerraFormatado = parseInt(pesoTerra);
console.log("Peso na Terra: " + pesoTerraFormatado);

switch (codPlanetas) {
    case 1:
        console.log("Planeta: Mercúrio");
        gravidade = 0.37;
        break;
    case 2:
        console.log("Planeta: Vênus");
        gravidade = 0.88;
        break;
    case 3:
        console.log("Planeta: Marte");
        gravidade = 0.38;
        break;
    case 4:
        console.log("Planeta: Júpiter");
        gravidade = 2.64;
        break;
    case 5:
        console.log("Planeta: Saturno");
        gravidade = 1.15;
        break;
    case 6:
        console.log("Planeta: Urano");
        gravidade = 1.17;
        break;
}

pesoPlaneta = (pesoTerraFormatado / 100) * gravidade;

console.log("Peso no planeta: " + pesoPlaneta);
//Fim Ex4



console.log("");


//Começo Ex5
console.log("Ex5: ");
let cred = 0;
let credEspecial = 0;
let saldoMedio = 0;
// saldoMedio = prompt("Qual o seu saldo? ");
//Interação com o usuario fazer ele usar/escrever coisas
//Deu certo porque não usou pra conta de matemática

if (saldoMedio <= 2000) {
    cred = 0;
    credEspecial = 0;
} else if (saldoMedio > 2000 && saldoMedio <= 10000) {
    cred = 20;
    credEspecial = saldoMedio * 0.2;
} else if (saldoMedio > 10000 && saldoMedio <= 20000) {
    cred = 30;
    credEspecial = saldoMedio * 0.3;
} else if (saldoMedio > 20000) {
    cred = 40;
    credEspecial = saldoMedio * 0.4;
}

console.log("Saldo médio: " + saldoMedio + " - Percentual de crédito: " + cred + "% - Valor de crédito especial: " + credEspecial);


//Fim Ex5



console.log("");



//Começo Ex6
console.log("Ex6: ");
let peso = 0;
let altura = 0;
// peso = Number(window.prompt("Digite seu peso (kg)"));
// altura = Number(window.prompt("Digite seu altura (metros)"));

let imc = peso / (altura * altura);
imc = imc.toFixed(1);
// imc = Math.round(imc);
// Duas formas diferentes de arredondar, lembrar que precisa igualar, lembrar que o toFixed retorna uma String, lembrar que () do toFixed são quantas casas decimais quer

console.log("Peso: " + peso);
console.log("Altura: " + altura);
console.log("IMC: " + imc);

if (imc <= 18.5) {
    console.log("Abaixo peso");
} else if (imc <= 25) {
    console.log("Peso Normal");
} else if (imc <= 30) {
    console.log("Sobrepeso");
} else if (imc <= 35) {
    console.log("Obeso leve");
} else if (imc <= 40) {
    console.log("Obeso moderado");
} else {
    console.log("Obeso mórbido");
}
//Fim Ex6



console.log("");



//Começo Ex7
console.log("Ex7: ");
let mByte = 0;
let byte = 0;

// mByte = Number(window.prompt("Digite um valor de MegaBytes: "));
byte = 1048576 * mByte;

console.log("Quantidade de MegaBytes: " + mByte);
console.log("Relação em Bytes: " + byte);
//Fim Ex7



console.log("");



//Começo Ex8
console.log("Ex8: ");
let somaRes = 0;
let res = 0;
// alert("Responda apenas com 'Sim' ou 'Nao'");
//CamelCase então realmente tem que ser como ta escrito aqui
// let res = [
//     prompt("Telefonou para a vítima?"),
//     prompt("Esteve no local do crime?"),
//     prompt("Mora perto da vítima?"),
//     prompt("Devia para a vítima?"),
//     prompt("Já trabalhou com a vítima?"),
// ];

console.log(res);

for (i = 0; i < 5; i++) {
    if (res[i] == "Sim") {
        somaRes++;
    }
}

switch (somaRes) {
    case 2:
        console.log("Suspeita");
        break;
    case 3:
        console.log("Cúmplice");
        break;
    case 4:
        console.log("Cúmplice");
        break;
    case 5:
        console.log("Assassino");
        break;
    default:
        console.log("Inocente");
        break;
}
//Fim Ex8



console.log("");



//Começo Ex9
console.log("Ex9: Fibonacci");

//Fim Ex9