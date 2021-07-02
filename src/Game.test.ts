import {Game, Symbol} from "./Game"

describe('TicTacToe game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should not allow player O to play first', () => {
        expect(() => game.Play(Symbol.Naught, {x: 0, y: 0})).toThrow();
    });

    it('should not allow player x to play twice in a row', () => {
        game.Play(Symbol.Cross, {x: 0, y: 0});
        expect(() => game.Play(Symbol.Cross, {x: 1, y: 0})).toThrow();
    });

    it('should not allow a player to play in last played position', () => {
        game.Play(Symbol.Cross, {x: 0, y: 0});
        expect(() => game.Play(Symbol.Naught, {x: 0, y: 0})).toThrow();
    });

    it('should not allow a player to play in any played position', () => {
        game.Play(Symbol.Cross, {x: 0, y: 0});
        game.Play(Symbol.Naught, {x: 1, y: 0});
        expect(() => game.Play(Symbol.Cross, {x: 0, y: 0})).toThrow();
    });

    it('should declare player X as winner if it plays three in top row', () => {
        game.Play(Symbol.Cross, {x: 0, y: 0});
        game.Play(Symbol.Naught, {x: 1, y: 0});
        game.Play(Symbol.Cross, {x: 0, y: 1});
        game.Play(Symbol.Naught, {x: 1, y: 1});
        game.Play(Symbol.Cross, {x: 0, y: 2});

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Cross);
    });

    it('should declare player O as winner if it plays three in top row', () => {
        game.Play(Symbol.Cross, {x: 1, y: 0});
        game.Play(Symbol.Naught, {x: 0, y: 0});
        game.Play(Symbol.Cross, {x: 1, y: 1});
        game.Play(Symbol.Naught, {x: 0, y: 1});
        game.Play(Symbol.Cross, {x: 2, y: 2});
        game.Play(Symbol.Naught, {x: 0, y: 2});

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Naught);
    });

    it('should declare player X as winner if it plays three in middle row', () => {
        game.Play(Symbol.Cross, {x: 1, y: 0});
        game.Play(Symbol.Naught, {x: 0, y: 0});
        game.Play(Symbol.Cross, {x: 1, y: 1});
        game.Play(Symbol.Naught, {x: 0, y: 1});
        game.Play(Symbol.Cross, {x: 1, y: 2});

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Cross);
    });

    it('should declare player O as winner if it plays three in middle row', () => {
        game.Play(Symbol.Cross, {x: 0, y: 0});
        game.Play(Symbol.Naught, {x: 1, y: 0});
        game.Play(Symbol.Cross, {x: 2, y: 1});
        game.Play(Symbol.Naught, {x: 1, y: 1});
        game.Play(Symbol.Cross, {x: 2, y: 2});
        game.Play(Symbol.Naught, {x: 1, y: 2});

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Naught);
    });

    it('should declare player X as winner if it plays three in bottom row', () => {
        game.Play(Symbol.Cross, {x: 2, y: 0});
        game.Play(Symbol.Naught, {x: 0, y: 0});
        game.Play(Symbol.Cross, {x: 2, y: 1});
        game.Play(Symbol.Naught, {x: 0, y: 1});
        game.Play(Symbol.Cross, {x: 2, y: 2});

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Cross);
    });

    it('should declare player O as winner if it plays three in bottom row', () => {
        game.Play(Symbol.Cross, {x: 0, y: 0});
        game.Play(Symbol.Naught, {x: 2, y: 0});
        game.Play(Symbol.Cross, {x: 1, y: 1});
        game.Play(Symbol.Naught, {x: 2, y: 1});
        game.Play(Symbol.Cross, {x: 0, y: 1});
        game.Play(Symbol.Naught, {x: 2, y: 2});

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Naught);
    });
});
