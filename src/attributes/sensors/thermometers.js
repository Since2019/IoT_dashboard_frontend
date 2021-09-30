// DHT11
const dht11 = {
    model: 'dht11',
    type: 'thermometer',
    fields: ['temperature', 'humidity']
}

// DHT22
const dht22 = {
    model: 'dht22',
    type: 'thermometer',
    fields: ['temperature', 'humidity']
}


export default {
    type: 'thermometer',
    sensors: [
        dht11,
        dht22
    ]
}