const Countries = require('./index')
const countriesArray = require('./countries.json')

const countries = new Countries()

describe('Countries', () => {
    describe('class', () => {
        test('should be an instance of class Countries', () => {
            expect(countries).toBeInstanceOf(Countries)
        })
    })

    // Mathod List
    describe('list', () => {
        test('should return an array of objects with countries data', () => {
            expect(countries.list()).toBe(countriesArray)
        })

        test('should have a list of string countries names', () => {
            const isListOfStrings = ({ country }) => typeof country == 'string'
            expect(countries.list()).toSatisfyAll(isListOfStrings)
        })

        test('should have a list of string/null countries capitals and locations', () => {
            const isListOfStrings = (item) => (
               (typeof item.city == 'string' || item.city == null) &&
               (typeof item.location == 'string' || item.location == null) &&
               (typeof item.independence == 'string' || item.independence == null)
            )
            expect(countries.list()).toSatisfyAll(isListOfStrings)
        })
    })


    // Method Reset
    describe('reset', () => {
        test('should reset the countries list when applied a filter and called reset method', () => {
            countries.byName('portugal')
            expect(countries.reset().toJson()).toBe(countries.list())
            countries.byCapital('lisboa')
            expect(countries.reset().toJson()).toBe(countries.list())
            countries.byLocation('europe')
            expect(countries.reset().toJson()).toBe(countries.list())
        })
    })



})
