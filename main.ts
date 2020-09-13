/*
* Paket für den Temperatursensor V1.2 von Seeed
* basierend auf dem Projekt von Tino Hempel
* https://www.hackster.io/ToniTaste/calliope-mini-und-grove-temperatur-sensor-v1-2-955ab7
* CC BY V4.0 https://creativecommons.org/licenses/by/4.0/
* Danke Tino!
*/

//% color=#5042f4 icon="\uf2c9"
namespace SeeedTemperature {

    /**
     * Liest die Temperatur des Grove-Sensors in °C aus.
     */
    //% blockId="Temperatur"
    //% block="temperature (°C) %tPin"
    //% tPin.defl=AnalogPin.C16
    export function Temperatur(tPin: AnalogPin): number {
        let Kehrwert = 0
        let Temperatur = 0
        Kehrwert = 1 / 298.15 + Math.log((1023 / pins.analogReadPin(tPin) - 1)) / 4250
        Temperatur = 1 / Kehrwert - 273.15
        return Temperatur;
    }

    /**
    * Schreibt die aktuelle Temperatur in °C auf das 5x5 Display
    */
    //% blockId="SchreibeTemperatur"
    //% block="write temperature (°C) %tPin"
    //% tPin.defl=AnalogPin.C16 
    export function SchreibeTemperatur(tPin: AnalogPin): void {
        basic.showNumber(Temperatur(tPin))
        images.createBigImage(`
        . # . . .   # # . . .
        # . # . #   . . . . .
        . # . . #   . . . . .
        . . . . #   . . . . .
        . . . . .   # # . . .
        `).scrollImage(1, 200)
        basic.clearScreen()
    }
} 