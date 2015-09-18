var fs = require('fs')
module.exports = function (property) {
    var list = JSON.parse(fs.readFileSync('list.json', 'utf-8'))
    var types = Object.keys(list)
    var ret
    types.forEach(function (type, i) {
        if (list[type].indexOf(property) !== -1) {
            ret = types[i]
        }
    })

    return ret
}
