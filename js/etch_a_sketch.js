var grid = document.querySelector('#red-container');

console.log(grid.clientWidth);
console.log(grid);




function makeGrid(height, width, nbSquare){

    const redDiv = document.querySelector('#red-container');
    const remBorder = 2 * nbSquare;

   // let divWidth =  (width - 14 - remBorder) / nbSquare;

   let divWidth =  width / nbSquare;

    console.log(divWidth);
    

  //  let divHeight = (height - 14 - remBorder) / nbSquare;

  let divHeight = height / nbSquare;

    console.log(divHeight);
    const totalSquare =  nbSquare * nbSquare;

    for(let i = 0; i < totalSquare; i++){
       // console.log('div');
        squareDiv = document.createElement('div');
        squareDiv.classList.add('gridDiv');

        squareDiv.style.width = divWidth + 'px';
        squareDiv.style.height = divHeight + 'px';
       // squareDiv.style.border = '1px solid ligthgrey';

        
        redDiv.appendChild(squareDiv);
    }

}

makeGrid(grid.clientHeight, grid.clientWidth, 50);