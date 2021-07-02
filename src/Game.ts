export enum Symbol {
    Naught = 'O',
    Cross = 'X',
    Empty = ' '
}

export enum Grid {
    NumberOfRows = 3,
    NumberOfColumns = 3
}

export class Game {
    private lastSymbol: Symbol = Symbol.Empty;
    private board: Board = new Board();


    public Play({x, y}: Coordinate, symbol: Symbol = Symbol.Cross): void {
        //if first move
        if (this.lastSymbol === Symbol.Empty && symbol === Symbol.Naught) {
            throw new Error("Invalid first player");
        }
        //if not first move but player repeated
        if (symbol === this.lastSymbol) {
            throw new Error("Invalid next player");
        }
        //if not first move but play on an already played tile
        if (!this.board.CanPlay({x, y})) {
            throw new Error("Invalid position");
        }

        // update game state
        this.lastSymbol = symbol;
        this.board.AddTileAt(symbol, {x, y});
    }

    public Winner(): Symbol {
        //if the positions in first row are taken
        if (this.board.TileAt({x: 0, y: 0})!.Symbol !== Symbol.Empty &&
            this.board.TileAt({x: 0, y: 1})!.Symbol !== Symbol.Empty &&
            this.board.TileAt({x: 0, y: 2})!.Symbol !== Symbol.Empty) {
            //if first row is full with same symbol
            if (this.board.TileAt({x: 0, y: 0})!.Symbol ===
                this.board.TileAt({x: 0, y: 1})!.Symbol &&
                this.board.TileAt({x: 0, y: 2})!.Symbol === this.board.TileAt({x: 0, y: 1})!.Symbol) {
                return this.board.TileAt({x: 0, y: 0})!.Symbol;
            }
        }

        //if the positions in first row are taken
        if (this.board.TileAt({x: 1, y: 0})!.Symbol !== Symbol.Empty &&
            this.board.TileAt({x: 1, y: 1})!.Symbol !== Symbol.Empty &&
            this.board.TileAt({x: 1, y: 2})!.Symbol !== Symbol.Empty) {
            //if middle row is full with same symbol
            if (this.board.TileAt({x: 1, y: 0})!.Symbol ===
                this.board.TileAt({x: 1, y: 1})!.Symbol &&
                this.board.TileAt({x: 1, y: 2})!.Symbol ===
                this.board.TileAt({x: 1, y: 1})!.Symbol) {
                return this.board.TileAt({x: 1, y: 0})!.Symbol;
            }
        }

        //if the positions in first row are taken
        if (this.board.TileAt({x: 2, y: 0})!.Symbol !== Symbol.Empty &&
            this.board.TileAt({x: 2, y: 1})!.Symbol !== Symbol.Empty &&
            this.board.TileAt({x: 2, y: 2})!.Symbol !== Symbol.Empty) {
            //if middle row is full with same symbol
            if (this.board.TileAt({x: 2, y: 0})!.Symbol ===
                this.board.TileAt({x: 2, y: 1})!.Symbol &&
                this.board.TileAt({x: 2, y: 2})!.Symbol ===
                this.board.TileAt({x: 2, y: 1})!.Symbol) {
                return this.board.TileAt({x: 2, y: 0})!.Symbol;
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

interface Coordinate {
    x: number,
    y: number
}

class Board {
    private plays: Tile[] = [];

    constructor() {
        for (let i = 0; i < Grid.NumberOfRows; i++) {
            for (let j = 0; j < Grid.NumberOfColumns; j++) {
                const tile: Tile = {X: i, Y: j, Symbol: Symbol.Empty};
                this.plays.push(tile);
            }
        }
    }

    public CanPlay({x, y}: Coordinate): boolean {
        return this.TileAt({x, y}).Symbol === Symbol.Empty
    }

    public TileAt({x, y}: Coordinate): Tile {
        return this.plays.find((t: Tile) => t.X === x && t.Y === y)!
    }

    public AddTileAt(symbol: Symbol, {x, y}: Coordinate): void {
        this.plays.find((t: Tile) => t.X === x && t.Y === y)!.Symbol = symbol;
    }

    public getSymbolsOnRow(x: number): {
        return this.TileAt({x, y: 0})!.Symbol !== Symbol.Empty
    }
}
