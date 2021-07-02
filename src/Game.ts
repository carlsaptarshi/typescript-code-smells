export enum Symbol {
    Naught = 'O',
    Cross = 'X',
    Empty = ' '
}

export class Game {
    private _lastSymbol: Symbol = Symbol.Empty;
    private _board: Board = new Board();

    public Play(symbol: Symbol, x: number, y: number): void {
        //if first move
        if (this._lastSymbol == Symbol.Empty) {
            //if player is X
            if (symbol == Symbol.Naught) {
                throw new Error("Invalid first player");
            }
        }
        //if not first move but player repeated
        else if (symbol == this._lastSymbol) {
            throw new Error("Invalid next player");
        }
        //if not first move but play on an already played tile
        else if (this._board.TileAt(x, y).Symbol != Symbol.Empty) {
            throw new Error("Invalid position");
        }

        // update game state
        this._lastSymbol = symbol;
        this._board.AddTileAt(symbol, x, y);
    }

    public Winner(): Symbol {
        //if the positions in first row are taken
        if (this._board.TileAt(0, 0)!.Symbol != Symbol.Empty &&
            this._board.TileAt(0, 1)!.Symbol != Symbol.Empty &&
            this._board.TileAt(0, 2)!.Symbol != Symbol.Empty) {
            //if first row is full with same symbol
            if (this._board.TileAt(0, 0)!.Symbol ==
                this._board.TileAt(0, 1)!.Symbol &&
                this._board.TileAt(0, 2)!.Symbol == this._board.TileAt(0, 1)!.Symbol) {
                return this._board.TileAt(0, 0)!.Symbol;
            }
        }

        //if the positions in first row are taken
        if (this._board.TileAt(1, 0)!.Symbol != Symbol.Empty &&
            this._board.TileAt(1, 1)!.Symbol != Symbol.Empty &&
            this._board.TileAt(1, 2)!.Symbol != Symbol.Empty) {
            //if middle row is full with same symbol
            if (this._board.TileAt(1, 0)!.Symbol ==
                this._board.TileAt(1, 1)!.Symbol &&
                this._board.TileAt(1, 2)!.Symbol ==
                this._board.TileAt(1, 1)!.Symbol) {
                return this._board.TileAt(1, 0)!.Symbol;
            }
        }

        //if the positions in first row are taken
        if (this._board.TileAt(2, 0)!.Symbol != Symbol.Empty &&
            this._board.TileAt(2, 1)!.Symbol != Symbol.Empty &&
            this._board.TileAt(2, 2)!.Symbol != Symbol.Empty) {
            //if middle row is full with same symbol
            if (this._board.TileAt(2, 0)!.Symbol ==
                this._board.TileAt(2, 1)!.Symbol &&
                this._board.TileAt(2, 2)!.Symbol ==
                this._board.TileAt(2, 1)!.Symbol) {
                return this._board.TileAt(2, 0)!.Symbol;
            }
        }

        return Symbol.Empty;
    }
}

interface Tile {
    X: number;
    Y: number;
    Symbol: Symbol;
}

class Board {
    private _plays: Tile[] = [];

    constructor() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const tile: Tile = {X: i, Y: j, Symbol: Symbol.Empty};
                this._plays.push(tile);
            }
        }
    }

    public TileAt(x: number, y: number): Tile {
        return this._plays.find((t: Tile) => t.X == x && t.Y == y)!
    }

    public AddTileAt(symbol: Symbol, x: number, y: number): void {
        this._plays.find((t: Tile) => t.X == x && t.Y == y)!.Symbol = symbol;
    }
}
