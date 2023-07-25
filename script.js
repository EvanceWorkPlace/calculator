let displayValue = "";
let isOn = true;
let isCursorVisible = false;
//numbers
function appendToDisplay(value) {
  if (!isOn) return;
  displayValue += value;
  document.getElementById("display").value = displayValue;
}
//clear all fuction
function clearDisplay() {
  if (!isOn) return;
  displayValue = "";
  document.getElementById("display").value = displayValue;
}
//% modulus
function modulus() {
  if (!isOn) return;
  displayValue += "%";
  document.getElementById("display").value = displayValue; 
 }
function clearEntry() {
  if (!isOn) return;
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue;
}
//Function Equal to
function calculateResult() {
  if (!isOn) return;
  try {
    //TODO please write the code to calculate
    displayValue = displayValue.replace('^','**');
    const result = eval(displayValue);
    displayValue = result.toString()+ "";
    document.getElementById("display").value = displayValue; 
  } catch (error) {
    displayValue = "Err";
    displayValue.slice(0,-3);
    document.getElementById("display").value = displayValue;
  }
}
//on and off 
function turnOff() {
  isOn = !isOn;
  if (!isOn) {
    document.getElementById("display").value = "";
  } else {
    document.getElementById("display").value = displayValue;  
  }
}
// Function to update the display
function updateDisplay(value) {
  display.value = value;
}
// Function to toggle the blanking symbol
function toggleCursor() {
  if(!isOn) return;
  isCursorVisible = !isCursorVisible;
  if (isCursorVisible) {
    updateDisplay(display.value + "_");
  } else {
    updateDisplay(display.value.slice(0, -1));
  }
}
// Start blinking the cursor
setInterval(toggleCursor, 500);
