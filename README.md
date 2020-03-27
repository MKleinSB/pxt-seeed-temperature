# pxt-seeed-temperature

![](https://github.com/MKleinSB/pxt-Seeed-Temperatursensor/blob/master/Sensor.png)

 Paket für den Temperatursensor V1.2 von Seeed für Makecode V1 Core (die Temperatur wird mit 2 Nachkommastellen angezeigt)
 
 basierend auf dem Projekt von Tino Hempel
 
 https://www.hackster.io/ToniTaste/calliope-mini-und-grove-temperatur-sensor-v1-2-955ab7
 
 CC BY V4.0 https://creativecommons.org/licenses/by/4.0/

 Danke Tino!

 Liest die Temperatur vom Grove-Sensor aus.
 
## Temperatur()
![](https://github.com/MKleinSB/pxt-seeed-temperature/blob/master/temperatur.png)

Diese Funktion gibt die aktuelle Temperatur als Zahl mit 2 Nachkommastellen zurück. 
Als Parameter muss der Analogpin angegeben werden, an dem das Modul angeschlossen ist.

## SchreibeTemperatur()
![](https://github.com/MKleinSB/pxt-seeed-temperature/blob/master/schreibetemperatur.png)

Diese Funktion schreibt die aktuelle Temperatur auf das 5x5 Display. Es wird automatisch ⁰C angehängt.
Als Parameter muss der Analogpin angegeben werden, an dem das Modul angeschlossen ist.

## Supported targets

* for PXT/calliope
* for PXT/microbit
