// total selected player array for counting
const playerTotalArray = [];

//  displaying selected players
function displaySelectedPlayers(playerTotalArray) {
  console.log(playerTotalArray);
  console.log(playerTotalArray.length);
  // if (playerTotalArray.length === 5) {
  if (playerTotalArray.length > 5) {
    alert("You can select only 5 players");
    playerTotalArray.pop();
    document.querySelectorAll(".player-select-button").forEach((button) => {
      button.disabled = true;
    });
    // return;
  }

  // clearing list of selected players everytime before adding new players
  const selectedPlayerV = document.getElementById("selected-player-v");
  selectedPlayerV.innerHTML = "";

  // find out player name from array
  for (const player of playerTotalArray) {
    // console.log(player.playerName);
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
  // console.log(element);
  // disable button after selected
  element.disabled = true;
  const playerName = element.parentNode.children[1].innerText;
  //   creating player name Object
  const playerNameObj = {
    playerName: playerName,
  };
  //   pushing player name object to playerTotalArray
  playerTotalArray.push(playerNameObj);

  // if (playerTotalArray.length > 5) {
  //   document.querySelectorAll("button").forEach((button) => {
  //     button.disabled = true;
  //   });
  // }

  displaySelectedPlayers(playerTotalArray);
}

document
  .getElementById("calculate-btn")
  .addEventListener("click", calculateBudget);

// function calculate(elementId, totalSelectedPlayers) {
function calculate(elementId) {
  const expenseField = document.getElementById(elementId);
  const expenseFieldString = expenseField.value;
  // console.log(typeof perPlayerExpenseFieldString, perPlayerExpenseFieldString);
  const expense = parseFloat(expenseFieldString);
  return expense;
  // console.log(typeof perPlayerExpense, perPlayerExpense);
  // const totalExpense = perPlayerExpense * totalSelectedPlayers;
  // console.log(totalExpense);
  // return totalExpense;
  // document.getElementById("player-total-expense").innerText = totalExpense;
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
function calculateBudget() {
  const totalSelectedPlayers = playerTotalArray.length;
  const totalExpense = calculate(
    "per-player-expense-field"
    // , totalSelectedPlayers
  );
  // checking totalExpense is a valid input or not
  const validInput = validationCheck(totalExpense);
  if (!validInput) {
    return;
  } else {
    document.getElementById("player-total-expense").innerText =
      totalExpense * totalSelectedPlayers;
  }
}

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
      // const playerTotalExpense = calculate("player-total-expense");
      const totalExpense =
        managerExpenseField +
        coachExpenseField +
        previousPlayerTotalExpenseNumber;
      console.log(typeof totalExpense, totalExpense);
      document.getElementById("calculate-total-final").innerText = totalExpense;
    }
  });
