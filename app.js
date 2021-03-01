const card = document.querySelector('#card');


document.addEventListener('DOMContentLoaded', cardRandom);


function cardRandom() {
    let arrayPalo = ['spades', 'diams', 'clubs', 'hearts'];
    let arrayNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];

    let palo = Math.floor(Math.random() * 4);
    let numPalo = Math.floor(Math.random() * 13);

    card.classList.add(`${arrayPalo[palo]}`);
    card.innerHTML = `
        <div class="row h-100 justify-content-center align-align-items-center">
            <div class="col-md-6 align-self-center text-center">
                <h1 id="card-number" class="card-number">${arrayNum[numPalo]}</h1>
            </div>
        </div>
    `;

}
