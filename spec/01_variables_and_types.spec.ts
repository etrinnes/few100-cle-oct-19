describe('Variables in TypeScript', () => {
    it('any typing', () => {
        let x;
        x = 'dog';


        x = 3.14;

        x = function (a, b) {
            return a + b;
        };

    });

    it('implicit typing', () => {
        const x = 'dog';

        // x = 3.14;

    });
    it('has union types', () => {
        let x: number | string;
        x = 12;
        x = 'tacos';
    });

    it('const cannot be reassigned', () => {
        const PI = 3.1415;
        // cant do this:
        // const PI;
        // PI = 4;

        const movie = {
            title: 'Rise of Skywalker',
            yearReleased: 2018
        };
        movie.yearReleased = 2019;

        // cant do this:
        // movie = {};

        const favoriteNumbers = [9, 20, 108];
        favoriteNumbers[1] = 22;
    });

    it('var is evil and you should not use it', () => {
        const age = 22;

        if (age > 22) {
            let message = 'Old enough';
        }
        expect(message).toBe('Old enough');
    });
});
