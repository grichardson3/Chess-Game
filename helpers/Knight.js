import Piece from './Piece.js';

class Knight extends Piece {

  constructor(color) {
    let name = "Knight",
      img = "";

    img = color == '#000' ? "url('https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png') no-repeat center" : "url('https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png') no-repeat center";
    super(name, img, color)

    this._moves = {

      spread: false,
      list: [
        [-2, -1],
        [-2, 1],
        [2, -1],
        [2, 1],
        [1, -2],
        [1, 2],
        [-1, -2],
        [-1, 2]

      ]
    }

  }

  get moves() {

    return this._moves;
  }

}

export default Knight;
