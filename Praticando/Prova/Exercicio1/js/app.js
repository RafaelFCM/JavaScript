const btnGerar = document.querySelector('#btnGerarDados')

btnGerar.addEventListener('click', function () {

    const dias = document.querySelectorAll('.dia');

    let sorteado = Math.floor(Math.random() * 31 + 1);
    let feriado = "Feriado";

    console.log('Data sorteada para ser feriado: ', sorteado);

    for (let i = 0; i < dias.length; i++) {

        console.log(dias[i].textContent);

        if (dias[i].textContent == 0) {
            dias[i].classList.add('bg-dark');
        } else {

        }
        if (dias[i].textContent % 2 == 0) {
            dias[i].classList.add('bg-light');
        } else {

        }
        if (dias[i].textContent % 2 == 1) {
            dias[i].classList.add('bg-warning');
        }


        if (sorteado == dias[i].textContent) {
            dias[sorteado + 1].textContent = feriado;
            dias[sorteado + 1].classList.add('lead');
        }


        if (dias[i] == dias[3] || dias[i] == dias[10] || dias[i] == dias[17] || dias[i] == dias[24] || dias[i] == dias[31]) {
            quartas = dias[i].textContent;
            console.log('Os dias que caem numa quarta-feira são: ', quartas);
        }
    }
});