var test = require('tape')
var definition = require('..')

test('definition', function (t) {
    var expected = 'length'
    var actual = definition('padding-top')
    t.equal(expected, actual)
    t.end()
})

test('definition', function (t) {
    var expected = 'color'
    var actual = definition('background-color')
    t.equal(expected, actual)
    t.end()
})
