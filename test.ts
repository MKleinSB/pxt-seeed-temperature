// tests go here; this will not be compiled when this package is used as a library
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.A, function () {
    SeeedTemperature.SchreibeTemperatur()
})