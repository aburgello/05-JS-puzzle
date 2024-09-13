// Select all the tiles
const tiles = document.querySelectorAll('td');

const canMove = (tile) => {
  // TODO: Check if a tile has an empty neighbour
  const table = document.querySelector('tbody');

  const rowIndex = tile.parentElement.rowIndex;
  const cellIndex = tile.cellIndex;

  const neighbourTop = rowIndex > 0 && table.rows[rowIndex - 1].cells[cellIndex].classList.contains("empty");
  const neighbourRight = cellIndex < table.rows[rowIndex].cells.length - 1 && table.rows[rowIndex].cells[cellIndex + 1].classList.contains("empty");
  const neighbourLeft = cellIndex > 0 && table.rows[rowIndex].cells[cellIndex - 1].classList.contains("empty");
  const neighbourBot = rowIndex < table.rows.length - 1 && table.rows[rowIndex + 1].cells[cellIndex].classList.contains("empty");

  return (neighbourTop || neighbourBot || neighbourLeft || neighbourRight);
};

const moveTile = (tile) => {
  // TOOD: Move the tile
  const emptyfile = document.querySelector(".empty");
  emptyfile.classList.remove("empty");
  emptyfile.innerHTML = tile.innerHTML;
  tile.innerHTML = "";
  tile.classList.add("empty");
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
