// total selected player array for counting
const playerTotalArray = [];

//  displaying selected players
function displaySelectedPlayers(playerTotalArray) {
  console.log(playerTotalArray);
  // console.log(playerTotalArray.length);
  if (playerTotalArray.length > 5) {
    alert("You can only select 5 players");
    // if selected player is more than 5 then it will remove the last selected player
    playerTotalArray.pop();
    return;
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
    selectedPlayerV.appendChild(playerNameElement);
  }
}

function selectPlayer(element) {
  const playerName = element.parentNode.children[1].innerText;
  //   creating player name Object
  const playerNameObj = {
    playerName: playerName,
  };
  //   pushing player name object to playerTotalArray
  playerTotalArray.push(playerNameObj);

  displaySelectedPlayers(playerTotalArray);
}
