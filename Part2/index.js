// console.log("The house always wins!")

let suitInput = document.getElementById('suitInput');
console.log(suitInput);

let colorInput = document.getElementById('colorInput');
console.log(colorInput);


function setCards() {
    const card = document.getElementById(suitInput.value)
    // console.log(card)
    card.style.color = colorInput.value
};

function resetCards() {
    const cardArr = document.querySelectorAll('section') 
    cardArr.forEach(card => {
        card.style.color = "grey"
    })
    // console.log(reset) 
}