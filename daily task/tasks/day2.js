const chessBoard = document.querySelector(".chessboard");
const firstRow = '<div class="square"></div>'.repeat(8);
const oddRow = '<div class="square odd"></div>'.repeat(8); 
const completeBoard = `${firstRow} ${oddRow} ${firstRow} ${oddRow} ${firstRow} ${oddRow} ${firstRow} ${oddRow}`;
chessBoard.innerHTML = completeBoard;
