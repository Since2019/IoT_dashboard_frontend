// BMP280
const bmp280 = {
    model: 'bmp280',
    type: 'barometer',
    fields: ['pressure', 'temperature']
}

// BME280
const bme280 = {
    model: 'bme280',
    type: 'barometer',
    fields: ['pressure', 'temperature', 'humidity',]
}


export const barometers = {
    // v-for
    type: 'barometer',

    sensors: [
        bmp280,
        bme280
    ]
}