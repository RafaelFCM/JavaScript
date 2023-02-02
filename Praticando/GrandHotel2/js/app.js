const tbody = document.querySelector('tbody');

console.log(tbody);

//pegando o form e passando o evento submit para dentro da função
//e ou event ou qq coisa = parametro
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    //preventDefault = cancela o evento padrão (nesse caso o submit)

    // pegar as infos digitadas nos campos, por ter muitos campos, muitas variaveis melhor usar array
    const arrayInfos = [
        document.querySelector('#nome'),
        document.querySelector('#adultos'),
        document.querySelector('#criancas'),
        document.querySelector('#diarias'),
        document.querySelector('#suite')
        // coloca o primeiro usuario, mostrando pro codigo q é o msmm tipo d info q aqui
    ];

    console.log(arrayInfos);

    // criando a tr para receber os campos e quantos td precisarem ser criados (para cada label)
    let tr = document.createElement('tr');

    arrayInfos.forEach(info => {
        console.log(info.value);

        let td = document.createElement('td');

        td.textContent = info.value;
        // para cada laço do for, vai passar a info/o valor do arrayInfos(labels) para o td

        tr.appendChild(td);
        // vinculando o td a tr
    })
    // vinculando o tr a tbody
    tbody.appendChild(tr);

    let diaria = 0;

    if (arrayInfos[4].value === 'Imperial Beach') {
        diaria = 785;
    } else {
        if (arrayInfos[4].value === 'Master Beach') {
            diaria = 890;
        } else {
            if (arrayInfos[4].value === 'Bangalô Beach') {
                diaria = 1195;
            } else {
                if (arrayInfos[4].value === 'Palladium Beach') {
                    diaria = 1520;
                }
            }
        }
    }

    // valor diaria
    td = document.createElement('td');
    td.textContent = diaria;
    tr.appendChild(td);
    tbody.appendChild(tr);

    // valor final
    td = document.createElement('td');
    td.textContent = diaria * arrayInfos[3].value * arrayInfos[1].value + (diaria / 2) * arrayInfos[3].value * arrayInfos[2].value;
    tr.appendChild(td);
    tbody.appendChild(tr);


    // limpar os campos do formulário após passar as infos, resetar labels/form
    this.reset();

});

// LEMBRAR: const não pode modificar tipo ou atualizar a variavel, por isso uso let que pode atualizar (não pode modificar tipo)