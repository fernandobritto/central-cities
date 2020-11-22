const Countries = require('./index')

const countries = new Countries()

describe('Countries', () => {
    describe('class', () => {
        test('should be an instance of class Countries', () => {
            expect(countries).toBeInstanceOf(Countries)
        })
    })
})
