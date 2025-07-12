const container = document.querySelector('#container');
const gridSizeSlider = document.getElementById('gridSize');
const gridValue = document.getElementById('gridValue');
const gridValue2 = document.getElementById('gridValue2');
const colorPicker = document.getElementById('colorPicker');
const eraserBtn = document.getElementById('eraser');
const resetBtn = document.getElementById('reset');
const rgbModeBtn = document.getElementById('rgbModeBtn'); 

let selectedColor = colorPicker.value;
let useColorPicker = false;
let isErasing = false;

// Update grid size live
gridSizeSlider.addEventListener('input', () => {
  gridValue.textContent = gridSizeSlider.value;
  gridValue2.textContent = gridSizeSlider.value;
  createGrid(gridSizeSlider.value);
});

// Handle color picker input
colorPicker.addEventListener('input', () => {
  selectedColor = colorPicker.value;
  useColorPicker = true;
  isErasing = false;
});

// Toggle RGB mode
rgbModeBtn.addEventListener('click', () => {
  useColorPicker = false;
  isErasing = false;
});

// Toggle eraser
eraserBtn.addEventListener('click', () => {
  isErasing = !isErasing;
  eraserBtn.textContent = isErasing ? 'Draw' : 'Eraser';
});

// Reset the grid
resetBtn.addEventListener('click', () => {
  createGrid(gridSizeSlider.value);
});

// Function to handle square coloring
function handleHover(square) {
  if (isErasing) {
    square.style.backgroundColor = 'white';
  } else if (useColorPicker) {
    square.style.backgroundColor = selectedColor;
  } else {
    // RGB random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

// Create grid function
function createGrid(size) {
  container.innerHTML = '';
  const squareSize = 500 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseover', () => handleHover(square));

    container.appendChild(square);
  }
}

// Generate default grid when page loads
document.addEventListener("DOMContentLoaded", () => {
  gridValue.textContent = gridSizeSlider.value;
  gridValue2.textContent = gridSizeSlider.value;
  createGrid(gridSizeSlider.value);
});
