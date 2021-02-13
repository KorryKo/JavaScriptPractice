let chessPieces = {
    whitePawn: "&#9817;",
    blackPawn: "&#9823;",
    whiteRook: "&#9814;",
    blackRook: "&#9820;",
    whiteBishop: "&#9815;",
    blackBishop: "&#9821;",
    whiteKnight: "&#9816;",
    blackKnight: "&#9822;",
    whiteQueen: "&#9813;",
    blackQueen: "&#9819;",
    whiteKing: "&#9812;",
    blackKing: "&#9818;"
  };

  let bottomLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let leftNumbers = [8, 7, 6, 5, 4, 3, 2, 1];
  let boardDefinition = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ];

  function createChessBoard(boardDefinition) {
    let table = document.createElement("table");
    table.border = 1;

    boardDefinition.forEach((row, indexRow) => {
      let tr = document.createElement("tr");
      table.appendChild(tr);

      //numbers
      let tdNumbers = document.createElement("td");
      tdNumbers.className = "border-left";
      tdNumbers.innerHTML = leftNumbers[indexRow];
      tr.appendChild(tdNumbers);

      leftNumbers[indexRow];
      row.forEach((square, indexSquare) => {
        let td = document.createElement("td");
        td.className = "square";
        td.id = square;
        if ((indexRow + indexSquare) % 2 != 0) {
          td.bgColor = "#F5DEB3";
        } else {
          td.bgColor = "#A0522D";
        }
        tr.appendChild(td);
      });
    });

    let tr = document.createElement("tr");
    table.appendChild(tr);
    let tdCorner = document.createElement("td");
    tr.appendChild(tdCorner);

    bottomLetters.forEach((letter) => {
      let tdLetters = document.createElement("td");
      tdLetters.className = "border-bottom";
      tdLetters.innerHTML = letter;
      tr.appendChild(tdLetters);
    });

    document.getElementById("table").append(table);

  }

  createChessBoard(boardDefinition);

  function addChessPiece(piece, position) {
    document.querySelector(
      `#${position}`
    ).innerHTML = `<div class="piece">${piece}</div>`;
  }
  //white side
  addChessPiece(chessPieces.whitePawn, "a2");
  addChessPiece(chessPieces.whitePawn, "b2");
  addChessPiece(chessPieces.whitePawn, "c2");
  addChessPiece(chessPieces.whitePawn, "d2");
  addChessPiece(chessPieces.whitePawn, "e2");
  addChessPiece(chessPieces.whitePawn, "f2");
  addChessPiece(chessPieces.whitePawn, "g2");
  addChessPiece(chessPieces.whitePawn, "h2");
  addChessPiece(chessPieces.whiteRook, "a1");
  addChessPiece(chessPieces.whiteRook, "h1");
  addChessPiece(chessPieces.whiteKnight, "b1");
  addChessPiece(chessPieces.whiteKnight, "g1");
  addChessPiece(chessPieces.whiteBishop, "c1");
  addChessPiece(chessPieces.whiteBishop, "f1");
  addChessPiece(chessPieces.whiteQueen, "d1");
  addChessPiece(chessPieces.whiteKing, "e1");
  //black side
  addChessPiece(chessPieces.blackPawn, "a7");
  addChessPiece(chessPieces.blackPawn, "b7");
  addChessPiece(chessPieces.blackPawn, "c7");
  addChessPiece(chessPieces.blackPawn, "d7");
  addChessPiece(chessPieces.blackPawn, "e7");
  addChessPiece(chessPieces.blackPawn, "f7");
  addChessPiece(chessPieces.blackPawn, "g7");
  addChessPiece(chessPieces.blackPawn, "h7");
  addChessPiece(chessPieces.blackRook, "h8");
  addChessPiece(chessPieces.blackRook, "a8");
  addChessPiece(chessPieces.blackKnight, "b8");
  addChessPiece(chessPieces.blackKnight, "g8");
  addChessPiece(chessPieces.blackBishop, "c8");
  addChessPiece(chessPieces.blackBishop, "f8");
  addChessPiece(chessPieces.blackQueen, "d8");
  addChessPiece(chessPieces.blackKing, "e8");