basic.forever(function () {
    basic.showString("" + (input.temperature()))
    while (input.temperature() > 25) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Happy)
    }
})
