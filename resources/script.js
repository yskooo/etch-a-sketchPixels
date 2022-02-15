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

