// total selected player array for counting
const playerTotalArray = [];

function selectPlayer(element) {
  const playerName = element.parentNode.children[1].innerText;
  //   creating player name Object
  const playerNameObj = {
    playerName: playerName,
  };
  //   pushing player name object to playerTotalArray
  playerTotalArray.push(playerNameObj);

  //   if total selected player is more than 5 then it will show alert
  if (playerTotalArray.length > 5) {
    alert("You can only select 5 players");
  }
}
