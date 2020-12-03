//Déclaration de variables
let grid = document.querySelector('#red-container');
let color_background = 'white';
let choose_picker_color;



const resetBackground = document.querySelector("#resetGridBackground");
resetBackground.addEventListener('click', resetBackgroundDiv);

function resetBackgroundDiv(){
  const divGrids = document.querySelectorAll('.gridDiv');
  color_background = 'white';
  divGrids.forEach((divGrid) => {
    divGrid.style.backgroundColor = color_background;
    divGrid.style.opacity = "";
  })
}


function colorBackGround(){

  //console.log(color_background);
  //console.log(choose_picker_color);
  switch(color_background){
    
    case 'white': this.style.backgroundColor = color_background;
                  this.style.opacity = "";
    break;
    
    case 'black' : this.style.backgroundColor = color_background;
                    this.style.opacity = ""; 
    break;

    case 'random' : this.style.backgroundColor = randomBackground();
                    this.style.opacity = "";
    break;
    
    case 'colorPicker': this.style.backgroundColor = choose_picker_color;
                         // console.log(this.style.backgroundColor);
                         this.style.opacity = "";
    break;

    case 'greyscale' : this.style.backgroundColor = `rgb(0,0,0)`;
                        manageOpacity(this)
                       console.log(this.style.opacity) 

  }
}


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
        squareDiv.addEventListener('mouseover', colorBackGround);

        squareDiv.style.width = (100 / nbSquare) + '%';
        squareDiv.style.height = (100 / nbSquare) + '%';
       // squareDiv.style.border = '1px solid ligthgrey';

        
        redDiv.appendChild(squareDiv);
    }

}


/*Put background color black */
let btnBlackBackground = document.querySelector("#blackBackground");
btnBlackBackground.addEventListener("click", blackBackground );

let btnRandomBackground = document.querySelector("#randomBackground");
btnRandomBackground.addEventListener("click", randomBackground);

/*Eraser*/
let eraser = document.querySelector('#erase');
eraser.addEventListener('click', whiteBackground);


//Choose your color
function colorPicker(e){
  color_background = 'colorPicker';
  choose_picker_color = `${e.target.value}`;
  
}


let chooseYourColor = document.querySelector("#chooseYourColor");
chooseYourColor.addEventListener('change', colorPicker);
//Fin de choose your color  


function whiteBackground(){
  color_background = 'white';
}

function blackBackground(){
  color_background  = 'black';
}

function randomBackground(){
  color_background = 'random';
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}


//Greyscale
function greyscale(){
  color_background = 'greyscale';
}

function manageOpacity(the_div){
  if(the_div.style.opacity === ''){
    the_div.style.opacity = 0.1;
  }else if(the_div.style.opacity !== '1') {
    the_div.style.opacity = Number(the_div.style.opacity) + 0.1;
  }
}

const btnGreyscale = document.querySelector('#greyscale');
btnGreyscale.addEventListener('click', greyscale);
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