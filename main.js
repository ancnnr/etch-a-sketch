
function setCanvas() {
    clearCanvas();


    let input = parseInt(document.getElementById('userInput').value);
    let pixelMeasure = 900.0/input;
    console.log(pixelMeasure);

    for(i=0; i<input; i++)
    {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.style.height = pixelMeasure + 'px';
        document.querySelector('.canvas').appendChild(newRow);

        
        for(j=0; j<input; j++)
        {
            const newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            newPixel.style.width = pixelMeasure + 'px';
            newPixel.onclick = function() {
                newPixel.style.backgroundColor = 'red';
            }
            newRow.appendChild(newPixel);
        }
    }
}

function clearCanvas()
{
 
    const canvas = document.querySelector('.canvas');

    while(canvas.firstChild) {

        const row = canvas.lastChild;

        while(row.firstChild) {
            row.removeChild(row.lastChild)
        }


        canvas.removeChild(row);
    }
}

function colorChange()
{
    const el = document.getElementById(event.target.id);
    el.style.backgroundColor = 'red';
}

