/*-------------------------------- Constants --------------------------------*/




/*------------------------------  Variables  ------------------------------*/
let board = [];
let score = 0;
let rows = 4;
let columns = 4; 



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  let boardEl = document.getElementById('board');
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement('div');
      tile.id = r.toString() + '-' + c.toString();
      let num = board[r][c];
      updateTile(tile, num);
      boardEl.appendChild(tile);
    }
  }
};

function updateTile(tile,num) {
  tile.innerText = '';
  tile.classList.value = '';
  tile.classList.add('tile');
  if (num > 0) {
    tile.innerText = num;
    if (num <= 4096) {
      tile.classList.add('x'+num.toString());
    } else {
      tile.classList.add('x8192');
    }
  }
}

init();
/*----------------------------- Event Listeners -----------------------------*/


