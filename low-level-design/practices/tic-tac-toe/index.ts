console.log("Tic Tac Toe Game");

// AS BEGINNER
// 1. Two players can play the game
// 2. Player start the game and wait for the other player's move
// 3. Keep track of the player's state
// 4. Check for winning condition
// 5. Notify the players about the game status (win/lose/draw)

// AS A GOOD DEVELOPER
// Actors and Interactions
// 1. Player connect ( local, online, same device )

// Game life cycle
// win, draw, lose ( paused, started, restarted, finished )
// Player points add/remove
// Player turn or left
// Invalid move

// Game board
// 3 * 3 grid
// O and X symbols
// Check winning condition

// Notify user
// 1. Game status ( win/lose/draw )
// 2. Player's turn
// 3. final status
// 4. Invalid move
// 5. Player Left
// 6. Player points add/remove

// System
// 1. Con Currency
// 2. Scalability

import * as readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Code
enum GameState {
  WAITING_FOR_PLAYER,
  IN_PROGRESS,
  FINISHED,
}

enum GameStatus {
  WIN = "WIN",
  DRAW = "DRAW",
  NOT_STARTED = "NOT_STARTED",
}

enum PlayerSymbol {
  X = "X",
  O = "O",
}

class Player {
  constructor(public name: string, public symbol: PlayerSymbol) {}
}

class GameBoard {
  public board: string[][] = Array.from({ length: 3 }, () =>
    Array(3).fill(" ")
  );

  constructor() {}

  setBoard(
    rowPoint: number,
    column: number,
    playerSymbol: PlayerSymbol
  ): boolean {
    const result = this.isValidBoardPoint(rowPoint, column);
    if (!result) {
      return result;
    }

    this.board[rowPoint][column] = playerSymbol as string;

    return result;
  }

  isValidBoardPoint(row: number, column: number): boolean {
    const isRowInValid = row < 0 || row > 2;
    const isColumnInvalid = column < 0 || column > 2;

    const boardPoint = this.board[row][column];

    if (boardPoint !== " " || isRowInValid || isColumnInvalid) {
      return false;
    }

    return true;
  }

  isBoardFull(): boolean {
    let isBoardFull = true;

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === " ") {
          isBoardFull = false;
          break;
        }
      }
    }

    return isBoardFull;
  }

  isGameWinner(): boolean {
    let isWon = false;
    let counter = 0;

    for (let i = 0; i < 3; i++) {
      // vertical check
      if (
        this.board[counter][i] === this.board[counter + 1][i] &&
        this.board[counter + 1][i] === this.board[counter + 2][i]
      ) {
        isWon = true;
      }

      // horizontal check
      if (
        this.board[i][counter] === this.board[i][counter + 1] &&
        this.board[i][counter + 1] === this.board[i][counter + 2]
      )
        isWon = true;
    }

    // diagonal check
    if (
      this.board[0][0] !== " " &&
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2]
    )
      isWon = true;

    if (
      this.board[2][0] !== " " &&
      this.board[2][0] === this.board[1][1] &&
      this.board[2][0] === this.board[0][2]
    )
      isWon = true;

    // More n * n perspective diagonal code check

    // Left-to-right diagonal (top-left → bottom-right)
    // let leftDiagonal = true;
    // for (let i = 1; i < n; i++) {
    //   if (board[i][i] !== board[0][0] || board[i][i] === " ") {
    //     leftDiagonal = false;
    //     break;
    //   }
    // }

    // // Right-to-left diagonal (top-right → bottom-left)
    // let rightDiagonal = true;
    // for (let i = 1; i < n; i++) {
    //   if (
    //     board[i][n - 1 - i] !== board[0][n - 1] ||
    //     board[i][n - 1 - i] === " "
    //   ) {
    //     rightDiagonal = false;
    //     break;
    //   }
    // }

    // return leftDiagonal || rightDiagonal;

    return isWon;
  }

  getBoard() {
    const boardState = this.board;
    console.table(boardState);

    return boardState;
  }
}

class TicTacToe {
  private gameTurn: PlayerSymbol = PlayerSymbol.O;
  public board: GameBoard = new GameBoard();
  public gameResult: GameStatus = GameStatus.NOT_STARTED;
  static gameTime: number;

  constructor() {}

  swapTurn() {
    this.gameTurn =
      this.gameTurn === PlayerSymbol.O ? PlayerSymbol.X : PlayerSymbol.O;
  }

  getTurn(): PlayerSymbol {
    if (this.gameTurn === PlayerSymbol.O) {
      console.log("player 1 turn \n");
    } else {
      console.log("player 2 turn\n");
    }

    return this.gameTurn;
  }

  start() {
    console.log("Game starting....");
    this.board.getBoard();
  }

  playerJoin(player: Player) {
    console.log(player.name + " joined");
  }

  async play() {
    while (gameRunning) {
      const playerInput = await this.getInput();

      const output = this.board.setBoard(
        playerInput.row,
        playerInput.column,
        this.getTurn()
      );

      if (!output) {
        console.log(`invalid move, player ${this.getTurn()} turn`);
        this.swapTurn();
        continue;
      }

      if (this.board.isGameWinner()) {
        gameRunning = false;
        this.gameResult = GameStatus.WIN;
        console.log(`player won with symbol: ${this.gameTurn}`);
      }

      if (this.board.isBoardFull()) {
        this.gameResult = GameStatus.DRAW;
        console.log("Match draw");
        gameRunning = false;
      }

      this.swapTurn();
      this.board.getBoard();
    }
  }

  async getInput(): Promise<{ row: number; column: number }> {
    const playerTurn = this.getTurn();
    const input = (await question(
      `enter input for: ${playerTurn} ("0 1 => 0 is row, 1 is column")`
    )) as string;
    const [row, column] = input.split(" ");

    return { row: +row, column: +column };
  }
}

const game = new TicTacToe();
let gameRunning = true;

const question = async (name: string) => {
  return new Promise((resolve, reject) => {
    rl.question(name, resolve);
  });
};

async function main() {
  const game = new TicTacToe();

  const playerName = (await question("name of player 1 (0): ")) as string;
  const player1 = new Player(playerName, PlayerSymbol.O);
  game.playerJoin(player1);

  const anotherPlayer = (await question("name of player 2 (X): ")) as string;
  const player2 = new Player(anotherPlayer, PlayerSymbol.X);
  game.playerJoin(player2);

  game.start();

  game.play();
}

main();
