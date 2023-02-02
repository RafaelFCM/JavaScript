const btnCalcular = document.querySelector('#btnCalcularNota')

btnCalcular.addEventListener('click', function () {

    const materias = document.querySelectorAll('.materia');

    for (let i = 0; i < materias.length; i++) {
        const mediaPriSem = Number(materias[i].querySelector('.mediaPriSem').textContent);
        const mediaSegSem = Number(materias[i].querySelector('.mediaSegSem').textContent);


        mediaFinal = mediaPriSem * 0.4 + mediaSegSem * 0.6;


        materias[i].querySelector('.mediaFinal').textContent = mediaFinal.toFixed(1);


        if (mediaFinal < 4) {
            materias[i].querySelector('.resFinal').textContent = 'Reprovado';
        } else {

        }
        if (mediaFinal >= 4 && mediaFinal < 6) {
            materias[i].querySelector('.resFinal').textContent = 'Exame';
        } else {

        }
        if (mediaFinal >= 6) {
            materias[i].querySelector('.resFinal').textContent = 'Aprovado';
        }
    }
});