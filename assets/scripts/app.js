let currentResult = 0;

function getUserNumber(){
  const number = parseInt(userInput.value);
  return number;
}
function creatAndWriteOutput(opreator, resultBeforCalc, calcNumber) {
  const calcDescription = `${resultBeforCalc}  ${opreator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function add() {
  initializResult = currentResult;
  enterdNumber = getUserNumber();
  currentResult = initializResult + enterdNumber;
  creatAndWriteOutput('+', initializResult, enterdNumber )
  
}
function subtrac() {
  initializResult = currentResult;
  enterdNumber = getUserNumber();
  currentResult = initializResult - enterdNumber;
  creatAndWriteOutput('-', initializResult, enterdNumber )
}
function multiply() {
  initializResult = currentResult;
  enterdNumber = getUserNumber();
  currentResult = initializResult * enterdNumber;
  creatAndWriteOutput('*', initializResult, enterdNumber )
}
function divide() {
  initializResult = currentResult;
  enterdNumber = getUserNumber();
  currentResult = initializResult / enterdNumber;
  creatAndWriteOutput('/', initializResult, enterdNumber )
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtrac);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide)