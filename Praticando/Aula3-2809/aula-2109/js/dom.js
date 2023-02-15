// passar o botão para o JS e quando clicar chamar a função

const btnCalcular = document.querySelector('#btnCalcularXP')

btnCalcular.addEventListener('click', function(){
    
    // pegando os elementos que possuem a classe heroi
    const herois = document.querySelectorAll('.heroi');
    
    for(let i = 0; i < herois.length; i++) {
        const forca = Number(herois[i].querySelector('.forca').textContent);
        const velocidade = Number(herois[i].querySelector('.velocidade').textContent);
        const agilidade = Number(herois[i].querySelector('.agilidade').textContent);
        const xpFinal = (forca + velocidade + agilidade)/3;
        herois[i].querySelector('.xp').textContent = xpFinal.toFixed(1);

        if(xpFinal < 75){
            herois[i].classList.add('bg-danger','text-light')
        }
    }
});

let forca = document.querySelectorAll('.forca');
    if(forca[3].textContent <= 40){
        console.log('Valor menor que 40');
}
else {
    console.log('Valor maior que 40');
}
console.log(forca[3].textContent);

//to fixed é um tipo de decimal format


