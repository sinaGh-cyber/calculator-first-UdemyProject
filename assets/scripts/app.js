let currentResult = 0;
logEntries = [];

function getUserNumber(){
  const number = parseInt(userInput.value);
  return number;
}
function creatAndWriteOutput(opreator, resultBeforCalc, calcNumber) {
  const calcDescription = `${resultBeforCalc}  ${opreator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function writeToLog (
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function add() {
  initializResult = currentResult;
  enterdNumber = getUserNumber();
  currentResult = initializResult + enterdNumber;
  creatAndWriteOutput('+', initializResult, enterdNumber );
  writeToLog(`ADD`, initializResult, enterdNumber, currentResult);
  
}
function subtrac() {
  initializResult = currentResult;
  enterdNumber = getUserNumber();
  currentResult = initializResult - enterdNumber;
  creatAndWriteOutput('-', initializResult, enterdNumber );
  writeToLog(`SUBTRAC`, initializResult, enterdNumber, currentResult);
}
function multiply() {
  initializResult = currentResult;
  enterdNumber = getUserNumber();
  currentResult = initializResult * enterdNumber;
  creatAndWriteOutput('*', initializResult, enterdNumber );
  writeToLog(`MULTIPLY`, initializResult, enterdNumber, currentResult);
}
function divide() {
  initializResult = currentResult;
  enterdNumber = getUserNumber();
  currentResult = initializResult / enterdNumber;
  creatAndWriteOutput('/', initializResult, enterdNumber );
  writeToLog(`DIVIDE`, initializResult, enterdNumber, currentResult);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtrac);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);