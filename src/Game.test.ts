import {Game, Symbol} from "./Game"

describe('TicTacToe game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should not allow player O to play first', () => {
        expect(() => game.Play({x: 0, y: 0}, Symbol.Naught)).toThrow();
    });

    it('should not allow player x to play twice in a row', () => {
        game.Play({x: 0, y: 0}, Symbol.Cross);
        expect(() => game.Play({x: 1, y: 0})).toThrow();
    });

    it('should not allow a player to play in last played position', () => {
        game.Play({x: 0, y: 0}, Symbol.Cross);
        expect(() => game.Play({x: 0, y: 0}, Symbol.Naught)).toThrow();
    });

    it('should not allow a player to play in any played position', () => {
        game.Play({x: 0, y: 0}, Symbol.Cross);
        game.Play({x: 1, y: 0}, Symbol.Naught);
        expect(() => game.Play({x: 0, y: 0})).toThrow();
    });

    it('should declare player X as winner if it plays three in top row', () => {
        game.Play({x: 0, y: 0}, Symbol.Cross);
        game.Play({x: 1, y: 0}, Symbol.Naught);
        game.Play({x: 0, y: 1}, Symbol.Cross);
        game.Play({x: 1, y: 1}, Symbol.Naught);
        game.Play({x: 0, y: 2}, Symbol.Cross);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Cross);
    });

    it('should declare player O as winner if it plays three in top row', () => {
        game.Play({x: 1, y: 0}, Symbol.Cross);
        game.Play({x: 0, y: 0}, Symbol.Naught);
        game.Play({x: 1, y: 1}, Symbol.Cross);
        game.Play({x: 0, y: 1}, Symbol.Naught);
        game.Play({x: 2, y: 2}, Symbol.Cross);
        game.Play({x: 0, y: 2}, Symbol.Naught);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Naught);
    });

    it('should declare player X as winner if it plays three in middle row', () => {
        game.Play({x: 1, y: 0}, Symbol.Cross);
        game.Play({x: 0, y: 0}, Symbol.Naught);
        game.Play({x: 1, y: 1}, Symbol.Cross);
        game.Play({x: 0, y: 1}, Symbol.Naught);
        game.Play({x: 1, y: 2}, Symbol.Cross);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Cross);
    });

    it('should declare player O as winner if it plays three in middle row', () => {
        game.Play({x: 0, y: 0}, Symbol.Cross);
        game.Play({x: 1, y: 0}, Symbol.Naught);
        game.Play({x: 2, y: 1}, Symbol.Cross);
        game.Play({x: 1, y: 1}, Symbol.Naught);
        game.Play({x: 2, y: 2}, Symbol.Cross);
        game.Play({x: 1, y: 2}, Symbol.Naught);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Naught);
    });

    it('should declare player X as winner if it plays three in bottom row', () => {
        game.Play({x: 2, y: 0}, Symbol.Cross);
        game.Play({x: 0, y: 0}, Symbol.Naught);
        game.Play({x: 2, y: 1}, Symbol.Cross);
        game.Play({x: 0, y: 1}, Symbol.Naught);
        game.Play({x: 2, y: 2}, Symbol.Cross);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Cross);
    });

    it('should declare player O as winner if it plays three in bottom row', () => {
        game.Play({x: 0, y: 0}, Symbol.Cross);
        game.Play({x: 2, y: 0}, Symbol.Naught);
        game.Play({x: 1, y: 1}, Symbol.Cross);
        game.Play({x: 2, y: 1}, Symbol.Naught);
        game.Play({x: 0, y: 1}, Symbol.Cross);
        game.Play({x: 2, y: 2}, Symbol.Naught);

        const winner = game.Winner();

        expect(winner).toBe(Symbol.Naught);
    });
});
