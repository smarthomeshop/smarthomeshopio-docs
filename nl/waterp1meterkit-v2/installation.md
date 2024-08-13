# Installation Guide
## Uitpakken

Haal de WaterP1MeterKit uit de verpakking en identificeer alle onderdelen. Je zou de volgende items moeten hebben:
- WaterP1MeterKit
- RJ12-kabel voor energiemeter
- Schroeven voor de universele houder
- Watersensor met universele houder

Optioneel, als je de optie "Met USB-C-adapter set" hebt geselecteerd:
- USB-A naar USB-C-kabel (3 meter)
- Voedingsadapter (Europees)

![Uitpakken](/images/waterp1meterkit/unboxing.png)

## Stap 1: Verbinden met de energiemeter en installeren van de sensorhouder

De WaterP1MeterKit stelt je in staat om zowel je watermeter als energiemeter aan te sluiten, of slechts één van de twee.

### Verbinden met de energiemeter
Steek de meegeleverde RJ12-kabel in de P1-poort van je energiemeter. Zorg ervoor dat je energiemeter een P1-poort heeft en een ESMR/DSMR v5-meter is. Soms is er ook een MBus-poort op de meter, maar deze poort werkt niet; alleen de P1-poort is compatibel. Steek het andere uiteinde van de kabel in de WaterP1MeterKit.

### Verbinden met de watermeter
Bevestig de adapterplaat van de universele houder aan je watermeter met de meegeleverde schroeven. Draai niet te strak aan. Zorg ervoor dat de sensor stevig in de houder gedrukt wordt, met de zwarte kant altijd zichtbaar en naar boven gericht.

Opmerking: Soms kan het deksel (het buitenste plastic gedeelte) van je watermeter in de weg zitten. Vaak kun je dit deksel met de hand draaien om ruimte te maken voor de houder.

![Installatiekit](/images/waterp1meterkit/install-kit.png)

### Compatibele watermeters
- **Elster/Honeywell**
- **Sensus**
- **Itron/Actaris/Schlumberger**

## Stap 2: Voeding via kabel of PoE

Sluit de WaterP1MeterKit aan op een voedingsbron met behulp van de meegeleverde USB-C-kabel en voedingsadapter, of gebruik Power over Ethernet (PoE) voor een directe en stabiele netwerkverbinding zonder extra voedingskabels. Wanneer de kit voor het eerst wordt ingeschakeld, knippert er een rood statuslampje om aan te geven dat deze nog niet is verbonden met je netwerk of Home Assistant. Dit probleem wordt opgelost in de volgende stappen wanneer je deze op je netwerk aansluit.

Houd er rekening mee dat het voeden van het apparaat via PoE of het gebruik van een Ethernet-verbinding in plaats van WiFi alleen werkt als het apparaat de Ethernet-firmware heeft geïnstalleerd. Alle versies van de WaterP1MeterKit V2 ondersteunen PoE als de Ethernet-firmware is geïnstalleerd. Om tussen de firmwareversies te schakelen, bezoek je onze [firmwarepagina](https://smarthomeshop.io/firmware).

Standaard, als je de WaterP1MeterKit hebt besteld met de optie "Met USB-C-adapter set" geselecteerd bij het afrekenen, dan is de WiFi-firmware standaard geïnstalleerd en is de Ethernet-poort uitgeschakeld. Als je "Zonder USB-C-adapter set" hebt geselecteerd, dan is de Ethernet-firmware standaard geïnstalleerd.

![Voeding via kabel](/images/waterp1meterkit/powering.png)

## Stap 3: Test de positie van de sensor

Na het monteren van de houder, zet je een kraan open. De WaterP1MeterKit zou een groen lampje moeten laten knipperen gedurende 1 seconde na elke liter water die wordt gebruikt om de meting te bevestigen. Als dit niet gebeurt, moet je mogelijk de positie van de sensor iets aanpassen, soms met slechts 1 mm.

Opmerking: Negeer voorlopig de rode knipperende status-LED. Dit wordt opgelost in de volgende stappen wanneer je de WaterP1MeterKit op je WiFi-netwerk en Home Assistant-server aansluit.

![Test positie sensor](/images/waterp1meterkit/test-sensor-position.png)

## Stap 4: Verbinden met WiFi

Negeer deze stap als je van plan bent om de WaterP1MeterKit via een Ethernet-kabel aan te sluiten. Zoals vermeld in Stap 2, moet je hiervoor de Ethernet-firmware geïnstalleerd hebben. Voor meer informatie over het wisselen van firmware, bezoek je onze [firmwarepagina](https://smarthomeshop.io/firmware).

Bij het opstarten zendt de WaterP1MeterKit een WiFi-hotspot uit met de naam 'waterp1meterkit' en het wachtwoord 'waterp1meterkit'. Zodra je verbonden bent met deze hotspot, verschijnt er een pop-upvenster waarin je je eigen WiFi-netwerk kunt selecteren.

![Verbinden met WiFi](/images/waterp1meterkit/connect-wifi.png)

Opmerking: Wanneer je verbinding maakt met het fallback-netwerk, zou de webinterface automatisch moeten openen. Als dat niet werkt, kun je ook handmatig naar [http://192.168.4.1/](http://192.168.4.1/) navigeren in je browser.

## Stap 5: Verbinden met Home Assistant

Zodra je verbonden bent met je thuis-WiFi-netwerk, zal Home Assistant automatisch de WaterP1MeterKit detecteren onder de sectie 'Apparaten & Diensten'.

![Verbinden met Home Assistant](/images/waterp1meterkit/connect-ha.png)

Om de WaterP1MeterKit te gebruiken voor water- en energiegegevens op het Home Assistant Energy Dashboard, ga je verder naar de volgende stap in de handleiding [Gebruiksgids](usage).
