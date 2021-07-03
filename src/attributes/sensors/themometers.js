// DHT11
const dht11 = {
    model: 'dht11',
    type: 'themometer',
    fields: ['temperature', 'humidity']
}

// DHT22
const dht22 = {
    model: 'dht22',
    type: 'themometer',
    fields: ['temperature', 'humidity']
}


export const themometers = [
    dht11,
    dht22
]