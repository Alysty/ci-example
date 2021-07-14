const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('inicio nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(-5, 10))
                .toBe(-1);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    });
    describe('acharCaracter', () => {
        test('comprimento diferente do comprimento da cadeia', () => {
            expect(acharCaracter(4, 'abcde', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });
    });
    describe('acharCaracter', () => {
        test('achar letra c em utilizacao valida do metodo', () => {
            expect(acharCaracter(5, 'abcde', 'c'))
                .toBe(2);
        });
    });
});