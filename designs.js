// Select color input
const color = document.getElementById("colorPicker"); 
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker'); 

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit',function (event) {
    pixelCanvas.innerHTML = ""; 
    event.preventDefault();
    makeGrid(); 
});

pixelCanvas.addEventListener('click', function (event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = colorPicker.value; 
    }
})

function makeGrid() {
// Your code goes here!
    for (let r = 0; r < height.value; r++) {
        const row = pixelCanvas.insertRow(0);
        for (let c = 0; c < width.value; c++) {
            row.insertCell(0); 
        }
    }
//const pixel = document.createElement('td');
//const row = document.createElement('tr'); 
//canvas.appendChild(pixel);
/* for (var r = 0; r < height; r++) {
    const gridRow = document.createElement('tr'); 
    gridRow.id = 'row' + r; 
    console.log("row Id= " + gridRow.id)
    //const pixel = document.createElement('td');
    canvas.appendChild(gridRow);
    let row = document.getElementById("row" + r);
    
    for (var c = 0; c < width; c++) {
        let pixel = document.createElement('td');
        row.appendChild(pixel);
        
        console.log(r, c); 
    }
} */
//console.log(height, width, color);
}

