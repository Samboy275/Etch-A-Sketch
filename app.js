const container = document.querySelector('.container');
let mouseDown = false;
let chosenColor = 'black';
const rainbowColors = ['red', 'yellow', 'green', 'blue', 'orange', 'indigo', 'violet'];


function PickRandomRainbowColor()
{
    const randomIndex = Math.floor(Math.random() * (rainbowColors.length - 1));
    return rainbowColors[randomIndex];
}
// make a grid of 16X16 square divs
function MakeGrid(size = 32){

    // rows
    for (let i = 0; i < size; i++)
    {
        // create a div that holds the divs in row
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('flex-row');
        // columns
        for (let j = 0; j < size; j++)
        {
            // create a white square div to add to the row div
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');
            squareDiv.classList.add('border');
            squareDiv.addEventListener('mousedown', (e) =>{
                mouseDown = true;
            });
            squareDiv.addEventListener('mouseup', (e) => {
                mouseDown = false;
            });
            squareDiv.addEventListener('click', (e) =>{
                draw(e); // draws on a pixel
            });
            squareDiv.addEventListener('mouseover', (e)=> {
                if (mouseDown)
                {
                    draw(e);
                }
            })
            rowDiv.appendChild(squareDiv);
        }
        container.appendChild(rowDiv);
    }
}
// getting control buttons
const clearButton = document.getElementById('clear');
const toggleButtons = document.querySelectorAll('.togglers');
const gridToggle = document.querySelector('.grid-toggle');
const colorChoice = document.getElementById('chosen-color');

// toggle handlers
let eraserOn = false;
let rainbowOn = false;
let originalColor = chosenColor;
let gridOn = true;
// adding onclick events for buttons
clearButton.onclick = clear;

colorChoice.addEventListener('change', (e) => {
    chosenColor = e.target.value;
});
gridToggle.addEventListener('click', (e) => {
    gridOn = !gridOn
    if (gridOn)
    {
        gridToggle.classList.add('toggle-on');
        gridToggle.textContent = 'Grid: On';
    }
    else
    {
        gridToggle.classList.remove('toggle-on');
        gridToggle.textContent = 'Grid: Off';
    }
    const pixels = document.querySelectorAll('.square-div');
    pixels.forEach((pixel) => {
        if (gridOn)
        {
            pixel.classList.add('border');
        }
        else
        {
            pixel.classList.remove('border');
        }
    });
});
toggleButtons.forEach((button) => button.addEventListener('click', (e) => {
    ToggleOnOff(e.target.id);
    e.stopPropagation();
}));
// function to add toggle style to buttons
function ToggleOnOff(exception)
{
    console.log(exception);

    if (exception === 'rainbow')
    {
        rainbowOn = !rainbowOn;
        if (!rainbowOn)
        {
            chosenColor = originalColor;
        }
        eraserOn = false;
    }
    else if (exception === 'eraser')
    {
        eraserOn = !eraserOn;
        rainbowOn = false;
    }
    toggleButtons.forEach((element) => {
        if (element.id != exception || (!eraserOn && !rainbowOn))
        {
            element.classList.remove('toggle-on');
        }
        else if (eraserOn || rainbowOn)
        {
            element.classList.add('toggle-on');
        }
    });
}
MakeGrid();
function newGrid()
{
    size = prompt("Enter the new grid size");
    if (typeof size == "number")
    {
        size = Math.min(parseInt(size), 100);
        container.innerHTML = '';
        MakeGrid(size);
    }
    else
    {
        if(size.trim() !== ''){
            alert("Grid size must be a number");
        }
    }
}


function clear()
{
    console.log('clear');
    const pixels = document.querySelectorAll('.square-div');
    pixels.forEach((pixel => pixel.style.backgroundColor = 'white'));
}



function draw(e){
    if (eraserOn)
    {
        e.target.style.backgroundColor = 'white';
    }
    else
    {
        if (rainbowOn)
        {
            originalColor = chosenColor
            chosenColor = PickRandomRainbowColor();
        }
        e.target.style.backgroundColor = chosenColor;
    }
}
