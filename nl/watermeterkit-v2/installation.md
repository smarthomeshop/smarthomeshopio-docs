# Installatiehandleiding

## Uitpakken

Pak het WaterMeterKit pakket uit en identificeer alle onderdelen. U zou de volgende items moeten hebben:
- WaterMeterKit
- USB-A naar USB-C kabel (3 meter)
- Stroomadapter (Europees)
- Schroeven (2x klein voor Elster/Honeywell, 2x groter voor Sensus, 1x groter voor Itron/Actaris/Schlumberger)
- WatermeterSensor met Universele Houder

![Uitpakken](/images/watermeterkit/unboxing.png)

## Stap 1: Installeer de Sensorhouder

Bevestig de adapterplaat aan uw watermeter met de meegeleverde schroeven. Draai niet te strak aan. Zorg ervoor dat de sensor stevig in de houder is gedrukt, met de zwarte kant altijd zichtbaar en naar boven gericht.

![Installeer Sensorhouder](/images/watermeterkit/install-sensor-holder.png)

Opmerking: Soms kan het deksel (het buitenste plastic deel) van uw meter in de weg zitten. U kunt dit deksel vaak met de hand draaien om ruimte te maken voor de houder.

### Compatibele Meters
- **Elster/Honeywell**
- **Sensus**
- **Itron/Actaris/Schlumberger**

## Stap 2: Voeding via Kabel

Sluit de WaterMeterKit aan op een stroombron met de meegeleverde USB-C kabel en stroomadapter. Bij het inschakelen knippert het rode statuslampje om aan te geven dat de kit nog niet is verbonden met uw WiFi-netwerk of Home Assistant. Dit probleem wordt opgelost in de volgende stappen wanneer u de kit met uw netwerk verbindt.

![Voeding via Kabel](/images/watermeterkit/power-by-cable.png)

## Stap 3: Test de Sensorpositie

Nadat u de houder hebt gemonteerd, opent u een kraan. De WaterMeterKit zou een groen lampje moeten laten knipperen gedurende 1 seconde na elke liter verbruikt water om de meting te bevestigen. Als dit niet gebeurt, moet u mogelijk de positie van de sensor iets aanpassen, soms met slechts 1 mm.

Opmerking: Negeer voorlopig het rood knipperende statuslampje. Dit wordt opgelost in de volgende stappen wanneer u de WaterMeterKit met uw WiFi-netwerk en Home Assistant-server verbindt.

![Test Sensorpositie](/images/watermeterkit/test-sensor-position.png)

## Stap 4: Verbinden met WiFi

Bij het opstarten zendt de WaterMeterKit een WiFi-hotspot uit genaamd 'watermeterkit' met het wachtwoord 'watermeterkit'. Zodra u bent verbonden met deze hotspot, verschijnt er een pop-upvenster waarin u uw eigen WiFi-netwerk kunt selecteren.

![Verbinden met WiFi](/images/watermeterkit/connect-wifi.png)

Opmerking: Wanneer u verbinding maakt met het fallback-netwerk, zou de webinterface automatisch moeten openen. Als dit niet werkt, kunt u ook handmatig navigeren naar [http://192.168.4.1/](http://192.168.4.1/) in uw browser.

## Stap 5: Verbinden met Home Assistant

Zodra de kit verbonden is met uw WiFi-netwerk, detecteert Home Assistant de WaterMeterKit automatisch onder de sectie 'Apparaten en Diensten'.

![Verbinden met Home Assistant](/images/watermeterkit/connect-ha.png)

Om de WaterMeterKit te gebruiken voor watergegevens op het HA Energy Dashboard, gaat u verder met de volgende stap in de handleiding [Gebruikershandleiding](usage).