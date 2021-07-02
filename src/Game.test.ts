import {Game, Symbol} from "./Game"

describe('TicTacToe game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should not allow player O to play first', () => {
        expect(() => game.Play(Symbol.Naught, 0, 0)).toThrow();
    });

    it('should not allow player x to play twice in a row', () => {
        game.Play(Symbol.Cross, 0, 0);
        expect(() => game.Play(Symbol.Cross, 1, 0)).toThrow();
    });

    it('should not allow a player to play in last played position', () => {
        game.Play(Symbol.Cross, 0, 0);
        expect(() => game.Play(Symbol.Naught, 0, 0)).toThrow();
    });

    it('should not allow a player to play in any played position', () => {
        game.Play(Symbol.Cross, 0, 0);
        game.Play(Symbol.Naught, 1, 0);
        expect(() => game.Play(Symbol.Cross, 0, 0)).toThrow();
    });

    it('should declare player X as winner if it plays three in top row', () => {
        game.Play(Symbol.Cross, 0, 0);
        game.Play(Symbol.Naught, 1, 0);
        game.Play(Symbol.Cross, 0, 1);
        game.Play(Symbol.Naught, 1, 1);
        game.Play(Symbol.Cross, 0, 2);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Cross);
    });

    it('should declare player O as winner if it plays three in top row', () => {
        game.Play(Symbol.Cross, 1, 0);
        game.Play(Symbol.Naught, 0, 0);
        game.Play(Symbol.Cross, 1, 1);
        game.Play(Symbol.Naught, 0, 1);
        game.Play(Symbol.Cross, 2, 2);
        game.Play(Symbol.Naught, 0, 2);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Naught);
    });

    it('should declare player X as winner if it plays three in middle row', () => {
        game.Play(Symbol.Cross, 1, 0);
        game.Play(Symbol.Naught, 0, 0);
        game.Play(Symbol.Cross, 1, 1);
        game.Play(Symbol.Naught, 0, 1);
        game.Play(Symbol.Cross, 1, 2);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Cross);
    });

    it('should declare player O as winner if it plays three in middle row', () => {
        game.Play(Symbol.Cross, 0, 0);
        game.Play(Symbol.Naught, 1, 0);
        game.Play(Symbol.Cross, 2, 1);
        game.Play(Symbol.Naught, 1, 1);
        game.Play(Symbol.Cross, 2, 2);
        game.Play(Symbol.Naught, 1, 2);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Naught);
    });

    it('should declare player X as winner if it plays three in bottom row', () => {
        game.Play(Symbol.Cross, 2, 0);
        game.Play(Symbol.Naught, 0, 0);
        game.Play(Symbol.Cross, 2, 1);
        game.Play(Symbol.Naught, 0, 1);
        game.Play(Symbol.Cross, 2, 2);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Cross);
    });

    it('should declare player O as winner if it plays three in bottom row', () => {
        game.Play(Symbol.Cross, 0, 0);
        game.Play(Symbol.Naught, 2, 0);
        game.Play(Symbol.Cross, 1, 1);
        game.Play(Symbol.Naught, 2, 1);
        game.Play(Symbol.Cross, 0, 1);
        game.Play(Symbol.Naught, 2, 2);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Naught);
    });
});
