// total selected player array for counting
const playerTotalArray = [];

//  displaying selected players
function displaySelectedPlayers(playerTotalArray) {
  console.log(playerTotalArray);
  console.log(playerTotalArray.length);
  if (playerTotalArray.length === 5) {
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
  const perPlayerExpenseField = document.getElementById(elementId);
  const perPlayerExpenseFieldString = perPlayerExpenseField.value;
  // console.log(typeof perPlayerExpenseFieldString, perPlayerExpenseFieldString);
  const expense = parseFloat(perPlayerExpenseFieldString);
  return expense;
  // console.log(typeof perPlayerExpense, perPlayerExpense);
  // const totalExpense = perPlayerExpense * totalSelectedPlayers;
  // console.log(totalExpense);
  // return totalExpense;
  // document.getElementById("player-total-expense").innerText = totalExpense;
}

function calculateBudget() {
  const totalSelectedPlayers = playerTotalArray.length;
  const totalExpense = calculate(
    "per-player-expense-field"
    // , totalSelectedPlayers
  );
  document.getElementById("player-total-expense").innerText =
    totalExpense * totalSelectedPlayers;
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
    // const playerTotalExpense = calculate("player-total-expense");
    const totalExpense =
      managerExpenseField +
      coachExpenseField +
      previousPlayerTotalExpenseNumber;
    console.log(typeof totalExpense, totalExpense);
    document.getElementById("calculate-total-final").innerText = totalExpense;
  });
