let moisture_read = 0
basic.forever(function () {
    moisture_read = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 600, 0, 2)
    basic.showNumber(Math.round(moisture_read))
    if (Math.round(moisture_read) <= 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (Math.round(moisture_read) == 2) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
