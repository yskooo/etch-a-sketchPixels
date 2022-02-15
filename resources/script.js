const DEFAULT_COLOR = '333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor
};

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
};

function setCurrentSize(newSize) {
    currentSize = newSize
};

const colorPicker = document.getElementById('colorPicker');
const colorButton = document.getElementById('colorButton');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

colorPicker.onchange = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbowBtn');
eraserBtn.onclick = () => setCurrentMode('eraserBtn');
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
};

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
};

function reloadGrid() {
    clearGrid()
    setupGrid(currentSize)
};

function clearGrid() {
    grid.innerHTML = '';
};

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    };
};

function changeColor(e){
    
}
