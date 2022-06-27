const container = document.querySelector('.container');

// make a grid of 16X16 square divs
function MakeGrid(){

    // rows
    for (let i = 0; i < 16; i++)
    {
        // create a div that holds the divs in row
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('flex-row');
        // columns
        for (let j = 0; j < 16; j++)
        {
            // create a white square div to add to the row div
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square-div');
            rowDiv.appendChild(squareDiv);
        }
        container.appendChild(rowDiv);
    }
}



MakeGrid();

console.log(container);