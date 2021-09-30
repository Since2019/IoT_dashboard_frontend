const barometers = require('./barometers')
const thermometers = require('./thermometers')

console.log("barometers:")
console.log(barometers)

export const sensors = [barometers, thermometers
]