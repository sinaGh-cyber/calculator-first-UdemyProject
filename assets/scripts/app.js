let currentResult = 0;
logEntries = [];

function getUserNumber() {
  const number = parseInt(userInput.value);
  return number;
}
function creatAndWriteOutput(opreator, resultBeforCalc, calcNumber) {
  const calcDescription = `${resultBeforCalc}  ${opreator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function colculate(operation) {
  initializResult = currentResult;
  enterdNumber = getUserNumber();
  let opreator;
  if (operation === `ADD`) {
    currentResult = initializResult + enterdNumber;
    opreator = `+`;
  } else if (operation === `SUBTRAC`) {
    currentResult = initializResult - enterdNumber;
    opreator = `-`;
  } else if (operation === `MULTIPLY`) {
    currentResult = initializResult * enterdNumber;
    opreator = `*`;
  } else if (operation === `DIVIDE`) {
    currentResult = initializResult / enterdNumber;
    opreator = `/`;
  }
  creatAndWriteOutput(opreator, initializResult, enterdNumber);
  writeToLog(operation, initializResult, enterdNumber, currentResult);
}
addBtn.addEventListener("click", colculate.bind(this, `ADD`));
subtractBtn.addEventListener("click", colculate.bind(this, `SUBTRAC`));
multiplyBtn.addEventListener("click", colculate.bind(this, `MULTIPLY`));
divideBtn.addEventListener("click", colculate.bind(this, `DIVIDE`));
