const celdas = document.querySelectorAll('.grid-item');
console.log(celdas);

for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click', () => {
        celdas[i].style.backgroundColor = "black"
    });
    celdas[i].addEventListener('mouseover', () => {
        celdas[i].style.backgroundColor = "white";
    });
}
