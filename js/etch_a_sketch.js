var grid = document.querySelector('#red-container');

//console.log(grid.clientWidth);
//console.log(grid);




function makeGrid(height, width, nbSquare){



    const redDiv = document.querySelector('#red-container');
    redDiv.innerHTML = "";

    const remBorder = 2 * nbSquare;

   // let divWidth =  (width - 14 - remBorder) / nbSquare;

   let divWidth =  (width - 1) / nbSquare; //Largeur de chaque carré

    console.log(divWidth);
    

  //  let divHeight = (height - 14 - remBorder) / nbSquare;

  let divHeight = (height - 0) / nbSquare; //hauteur de chaque carré

    console.log(divHeight);
    const totalSquare =  nbSquare * nbSquare;

    for(let i = 0; i < totalSquare; i++){
       // console.log('div');
        squareDiv = document.createElement('div');
        squareDiv.classList.add('gridDiv');

        

        squareDiv.style.width = (100 / nbSquare) + '%';
        squareDiv.style.height = (100 / nbSquare) + '%';
       // squareDiv.style.border = '1px solid ligthgrey';

        
        redDiv.appendChild(squareDiv);
    }

}

/*managing range  */
let range = document.querySelector("#rangeGrid");
range.value = 16;
rangeTexInput = document.querySelector('#rangeValue');
rangeTexInput.value = range.value;

range.addEventListener('change', (e) =>{
    rangeTexInput = document.querySelector('#rangeValue');
    rangeTexInput.value = range.value;
    makeGrid(grid.clientHeight, grid.clientWidth, range.value);
});


makeGrid(grid.clientHeight, grid.clientWidth, 16);