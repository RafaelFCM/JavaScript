let tbody0 = document.querySelector('#tbody0');
let tbody1 = document.querySelector('#tbody1');
let tbody2 = document.querySelector('#tbody2');
let tbody5 = document.querySelector('#tbody5');
let tbody7 = document.querySelector('#tbody7');

// 1º jogador
let btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', function () {
    let nome0 = document.querySelector('#nome0');
    nome0.textContent = "Halland";

    let overall0 = [
        82,
        78,
        74,
        94,
        41,
        93
    ];
    
    console.log(overall0);
    
    let tr = document.createElement('tr');
    
    for (i=0; i<7; i++) {
        let td = document.createElement('td');
    
        td.textContent = overall0[i];
    
        tr.appendChild(td);
    };

    tbody0.appendChild(tr);
});
// 1º jogador

// 2º jogador
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function () {
    let nome1 = document.querySelector('#nome1');
    nome1.textContent = "Vini Jr";

    let overall1 = [
        95,
        92,
        75,
        84,
        22,
        62
    ];
    
    console.log(overall1);
    
    let tr = document.createElement('tr');
    
    for (i=0; i<8; i++) {
        let td = document.createElement('td');
    
        td.textContent = overall1[i];
    
        tr.appendChild(td);
    };

    tbody1.appendChild(tr);
});
// 2º jogador

// 3º jogador
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function () {
    let nome2 = document.querySelector('#nome2');
    nome2.textContent = "CR7";

    let overall2 = [
        79,
        85,
        80,
        93,
        28,
        77
    ];
    
    console.log(overall2);
    
    let tr = document.createElement('tr');
    
    for (i=0; i<8; i++) {
        let td = document.createElement('td');
    
        td.textContent = overall2[i];
    
        tr.appendChild(td);
    };

    tbody2.appendChild(tr);
});
// 3º jogador

// 4º jogador
let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', function () {
    let nome5 = document.querySelector('#nome5');
    nome5.textContent = "Messi";

    let overall5 = [
        87,
        95,
        91,
        90,
        30,
        68
    ];
    
    console.log(overall5);
    
    let tr = document.createElement('tr');
    
    for (i=0; i<8; i++) {
        let td = document.createElement('td');
    
        td.textContent = overall5[i];
    
        tr.appendChild(td);
    };

    tbody5.appendChild(tr);
});
// 4º jogador

// 5º jogador
let btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', function () {
    let nome7 = document.querySelector('#nome7');
    nome7.textContent = "Mbappe";

    let overall7 = [
        97,
        93,
        85,
        93,
        33,
        80
    ];
    
    console.log(overall7);
    
    let tr = document.createElement('tr');
    
    for (i=0; i<8; i++) {
        let td = document.createElement('td');
    
        td.textContent = overall7[i];
    
        tr.appendChild(td);
    };

    tbody7.appendChild(tr);
});
// 5º jogador