// total selected player array for counting
const playerTotalArray = [];

//  displaying selected players
function displaySelectedPlayers(playerTotalArray) {
  if (playerTotalArray.length === 6) {
    alert("You can only select 5 players");
    playerTotalArray.pop();
  }

  // clearing list of selected players everytime before adding new players
  const selectedPlayerV = document.getElementById("selected-player-v");
  selectedPlayerV.innerHTML = "";

  // find out player name from playerTotalArray
  for (const player of playerTotalArray) {
    const playerName = player.playerName;
    // creating list of selected players
    const playerNameElement = document.createElement("li");
    playerNameElement.innerText = playerName;
    playerNameElement.style.padding = "10px";
    playerNameElement.style.fontSize = "18px";
    selectedPlayerV.appendChild(playerNameElement);
  }
}

// function to select player and add to array
function selectPlayer(element) {
  const playerName = element.parentNode.children[1].innerText;
  // creating player name Object
  const playerNameObj = {
    playerName: playerName,
  };
  // pushing player name object to playerTotalArray
  playerTotalArray.push(playerNameObj);

  // user can select max 5 players
  if (playerTotalArray.length <= 5) {
    element.disabled = true;
  } else {
    element.disabled = false;
  }
  // sending playerTotalArray to displaySelectedPlayers function
  displaySelectedPlayers(playerTotalArray);
}

// calculate btn click event
document
  .getElementById("calculate-btn")
  .addEventListener("click", calculateBudget);

// function calculate(elementId, totalSelectedPlayers) {
function calculate(elementId) {
  const expenseField = document.getElementById(elementId);
  const expenseFieldString = expenseField.value;

  const expense = parseFloat(expenseFieldString);
  return expense;
}

// validation check
function validationCheck(elementCheck) {
  if (elementCheck < 0 || isNaN(elementCheck)) {
    alert("Please enter valid input in every expense input field.");
    return;
  } else {
    return elementCheck;
  }
}

// function to claculate budget
function calculateBudget() {
  const totalSelectedPlayers = playerTotalArray.length;
  const totalExpense = calculate("per-player-expense-field");
  // checking totalExpense is a valid input or not
  const validInput = validationCheck(totalExpense);
  if (!validInput) {
    return;
  } else {
    document.getElementById("player-total-expense").innerText =
      totalExpense * totalSelectedPlayers;
  }
}

// calculate-total-btn working on click event
document
  .getElementById("calculate-total-btn")
  .addEventListener("click", function () {
    const managerExpenseField = calculate("manager-expense-field");
    const coachExpenseField = calculate("coach-expense-field");
    const previousPlayerTotalExpense = document.getElementById(
      "player-total-expense"
    ).innerText;
    const previousPlayerTotalExpenseNumber = parseFloat(
      previousPlayerTotalExpense
    );

    // validation check
    if (
      !validationCheck(managerExpenseField) ||
      !validationCheck(coachExpenseField)
    ) {
      return;
    } else {
      const totalExpense =
        managerExpenseField +
        coachExpenseField +
        previousPlayerTotalExpenseNumber;
      document.getElementById("calculate-total-final").innerText = totalExpense;
    }
  });
