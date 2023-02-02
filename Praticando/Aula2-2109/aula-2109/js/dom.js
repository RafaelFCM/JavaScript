// pegar pelo id
const getId1 = document.getElementById('herois');
console.log(getId1);

const getId2 = document.querySelector('#heroi1');
console.log(getId2);

// pegar pela class
const getClass1 = document.getElementsByClassName('heroi');
console.log(getClass1);
console.log(getClass1[3]);

const getClass2 = document.querySelectorAll('.nome');
console.log(getClass2);
console.log(getClass2[3]);
console.log(getClass2[3].textContent);
getClass2[3].textContent = 'Mulher Maravilha';

const getTag1 = document.getElementsByTagName('th');
console.log(getTag1);
const getTag2 = document.querySelectorAll('td');
console.log(getTag2);