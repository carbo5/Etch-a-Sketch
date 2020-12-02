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


/*Put background color black */
let btnBlackBackground = document.querySelector("#blackBackground");
btnBlackBackground.addEventListener("click", () => {
  let the_divs = document.querySelectorAll(".gridDiv");

  the_divs.forEach((the_div) => {
    the_div.addEventListener("mouseover", () => {
      the_div.style.background = "black";
    });
  });
});

//Put a random color
//Math.floor(Math.random() * 256);
let btnRandomBackground = document.querySelector("#randomBackground");
btnRandomBackground.addEventListener("click", () => {
  let the_divs = document.querySelectorAll(".gridDiv");

  the_divs.forEach((the_div) => {
    the_div.addEventListener("mouseover", () => {
      the_div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    });
  });
});

//Choose your color
function colorPicker(e){
  let the_divs = document.querySelectorAll(".gridDiv");

  the_divs.forEach((the_div) => {
    the_div.addEventListener("mouseover", () => {
      the_div.style.backgroundColor = `${e.target.value}`;
    });
  });
}


let chooseYourColor = document.querySelector("#chooseYourColor");
chooseYourColor.addEventListener('change', colorPicker);
  




/*Put background color white */
let resetGridBackground = document.querySelector('#resetGridBackground');
resetGridBackground.addEventListener('click', ()=> {
   let divGrids = document.querySelectorAll(".gridDiv");

   divGrids.forEach((divGrid) => {
     divGrid.style.backgroundColor = "white";
   });
});

//Greyscale
//rgb(220,220,220), rgb(211,211,211),rgb(192,192,192), rgb(169,169,169), rgb(128,128,128)
//rgb(105,105,105),  	rgb(119,136,153), rgb(112,128,144), rgb(47,79,79), rgb(0,0,0)


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