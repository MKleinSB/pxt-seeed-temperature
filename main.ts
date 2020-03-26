/*
* Paket für den Temperatursensor V1.2 von Seeed
* basierend auf dem Projekt von Tino Hempel
* https://www.hackster.io/ToniTaste/calliope-mini-und-grove-temperatur-sensor-v1-2-955ab7
* CC BY V4.0 https://creativecommons.org/licenses/by/4.0/
* Danke Tino!
*/

let TemperaturPin: AnalogPin = AnalogPin.P1;

//% color=#5042f4 icon="\uf2c9"
namespace SeeedTemperature {

  /**
    * Setzt den Analogpin für den Temperatursensor. Standard ist P1.
    * Rechter Grove-Port wäre C16
    */
    //% blockId="SetzeTempPin"
    //% block="setze Sensorpin auf %tPin"
    export function SetzeTempPin(tPin:AnalogPin): void {
        TemperaturPin=tPin
    }

    /**
     * Liest die Temperatur des Grove-Sensors in °C aus.
     */
    //% blockId="Temperatur"
    //% block="Temperatur (°C)"
    export function Temperatur(): number {
        let Kehrwert = 0
        let Temperatur = 0
        Kehrwert = 1 / 298.15 + Math.log((1023 / pins.analogReadPin(TemperaturPin) - 1)) / 4250 
        Temperatur = 1 / Kehrwert - 273.15
        return Temperatur;
    }

    /**
    * Schreibt die aktuelle Temperatur in °C auf das 5x5 Display
    */
    //% blockId="SchreibeTemperatur"
    //% block="schreibe Temperatur (°C)"
    export function SchreibeTemperatur(): void {
        basic.showNumber(Temperatur())
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