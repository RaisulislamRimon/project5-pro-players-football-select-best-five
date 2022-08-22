// total selected player array for counting
const playerTotalArray = [];

//  displaying selected players
function displaySelectedPlayers(playerTotalArray) {
  console.log(playerTotalArray);
  // console.log(playerTotalArray.length);
  if (playerTotalArray.length > 5) {
    alert("You can only select 5 players");
    playerTotalArray.pop();
    return;
  }
  // find out player name from array
  // const playerName =
  for (const player of playerTotalArray) {
    console.log(player.playerName);
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

  //   if total selected player is more than 5 then it will show alert
  // if (playerTotalArray.length > 5) {
  //   alert("You can only select 5 players");
  //   // return;
  // }
}
