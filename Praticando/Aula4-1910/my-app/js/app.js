const tbody = document.querySelector('tbody');
// 
console.log(tbody);

//pegando o form e passando o evento submit para dentro da função
//e ou event ou qq coisa = parametro
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    //preventDefault = cancela o evento padrão (nesse caso o submit)

    // pegar as infos digitadas nos campos, por ter muitos campos, muitas variaveis melhor usar array
    const arrayInfos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
        // coloca o primeiro usuario, mostrando pro codigo q é o msmm tipo d info q aqui
    ];

    console.log(arrayInfos);

    // criando a tr para receber os campos e quantos td precisarem ser criados (para cada label)
    const tr = document.createElement('tr');

    arrayInfos.forEach(info => {
        console.log(info.value);

        const td = document.createElement('td');

        td.textContent = info.value;
        // para cada laço do for, vai passar a info/o valor do arrayInfos(labels) para o td

        tr.appendChild(td);
        // vinculando o td a tr
    })
     // vinculando o tr a tbody
    tbody.appendChild(tr);

    // limpar os campos do formulário após passar as infos, resetar labels/form
    this.reset();

});