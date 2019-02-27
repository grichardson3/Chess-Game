import Piece from './Piece.js';

class Queen extends Piece {

  constructor(color) {
    let name = "Queen",
      img = "";

    img = color == '#000' ? "url('https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png') no-repeat center" : "url('https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png') no-repeat center";
    super(name, img, color)



        this._moves = {

          spread: true,
          list: [
            [-1, 1],
            [-1, 0],
            [-1, -1],
            [1, 0],
            [1, -1],
            [1, 1],
            [0, 1],
            [0, 0],
            [0, -1],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 0],
          ]
        }

  }

  get moves() {

    return this._moves;
  }

}

export default Queen;
