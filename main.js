let paintColor= 'rgb(255,0,0)';
let mouseDown = false;
let erase = false;

function loadFunction() {
    //allow dragging to color pixels
   

    document.addEventListener('mousedown', function (e) {

        var buttons = e.buttons;

        if ((buttons & 1) === 1) {

            mouseDown = true;
        }
    });

    document.addEventListener('mouseup', function () {

        mouseDown = false;

    });

    setCanvas();

}


function setCanvas() {
    clearCanvas();


    let input = parseInt(document.getElementById('userInput').value);
    if (isNaN(input))
    {
        input = 20;
    }

    let pixelMeasure = 600.0/input;

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
            newPixel.addEventListener('mousedown', colorChange);
            newPixel.addEventListener("mouseover", hoverColor);
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
    if(erase)
    {
        this.style.backgroundColor = 'white';
    }

    else {
        this.style.backgroundColor = document.getElementById('color-picker').value;
    }

}

function hoverColor() {
    if(mouseDown)
    {
        if(erase)
        {
            this.style.backgroundColor = 'white';
        }

        else {
            this.style.backgroundColor = document.getElementById('color-picker').value;
        }
        
    }
}

function eraser()
{
    if(erase)
    {
        document.querySelector('.btn3').classList.remove('erasing');
        erase = false;
    }

    else {
        document.querySelector('.btn3').classList.add('erasing');
        erase = true;
    }

}

function eraseCanvas()
{
    const allPixels = document.querySelectorAll('.pixel');

    allPixels.forEach(function(pix) {
        pix.style.backgroundColor = 'white';
    });
}