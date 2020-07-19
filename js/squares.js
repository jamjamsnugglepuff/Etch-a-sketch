const container = document.querySelector('#grid-container');
const rstButton = document.querySelector('#reset-button');

//create the div's
createDivs = (x = 16) => {
    for (i = (x * x); i > 0; i--) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);


    }
    
}

//calling function that create's the divs
createDivs();


hoverEffects();
//hover over div
function hoverEffects(){
    const squares = document.querySelectorAll('.grid-item');
let div = document.createElement('div');
    console.log('hover effects called!');
squares.forEach((squares) => {
    squares.addEventListener('mouseover', (e) => {
        // this.classList.add('active');
        e.target.classList.add('hover');

        
    })
});

squares.forEach( square=> {
    square.addEventListener('transitionend',()=>{
        
        square.classList.remove('hover');
    });

});
}
//reset button (reset's div and get new values for new div)
rstButton.addEventListener('click', () => {
const squares = document.querySelectorAll('.grid-item');

for (i = squares.length; i > 0; i--) {
        container.removeChild(container.lastElementChild);
        console.log('working');
    }
    let x = prompt("how many squares per side to make the new grid?");
    console.log(x);

    function newGrid() {
        console.log("this function is working")
        let container = document.querySelector('#grid-container');
        container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
        createDivs(x);
    }
    
    newGrid();
    hoverEffects();
});