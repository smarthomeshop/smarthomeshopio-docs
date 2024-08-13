# Installation Guide

## Uitpakken

Haal de WaterFlowKit uit de verpakking en identificeer alle onderdelen. Je zou de volgende items moeten hebben:
- WaterFlowKit
- WaterFlow Sensor(s) met G1/2", G3/4" of G1" aansluiting (afhankelijk van wat je besteld hebt)
- USB-A naar USB-C kabel (3 meter)
- Voedingsadapter (Europees)

![Uitpakken](/images/waterflowkit/unboxing.png)

## Stap 1: Installeer de Sensor(s)

Installeer de waterflow sensor(s), zorg ervoor dat alle verbindingen stevig vastzitten en goed waterdicht zijn gemaakt. Breng schroefdraadtape aan op de schroefdraden om een waterdichte afdichting te garanderen. De temperatuursensor vereist extra aandraaien. Het is belangrijk om alle fittingen dubbel te controleren om mogelijke lekkages te voorkomen.

![Installeer Sensor](/images/waterflowkit/install-sensor.png)

**Opmerking: Houd er rekening mee dat wij niet verantwoordelijk zijn voor eventuele lekkages die kunnen optreden.**

## Stap 2: Verbind de Sensor(s) met de Kit

Verbind de sensor(s) met de WaterFlowKit:
- De 3-pins aansluiting is voor de waterflow sensor.
- De 2-pins aansluiting is voor de temperatuursensor (indien van toepassing).

![Verbind Sensoren](/images/waterflowkit/connect-sensors.png)

## Stap 3: Voeding via Kabel

Sluit de WaterFlowKit aan op een voedingsbron met behulp van de meegeleverde USB-C kabel en voedingsadapter. Het witte LED-lampje gaat branden om aan te geven dat het apparaat is ingeschakeld.

![Voeding via Kabel](/images/waterflowkit/power-by-cable.png)

## Stap 4: Verbinden met WiFi

Bij het opstarten zendt de WaterFlowKit een WiFi-hotspot uit met de naam 'waterflowkit' en het wachtwoord 'waterflowkit'. Verbind met deze hotspot en er verschijnt een pop-up venster waarmee je je eigen WiFi-netwerk kunt selecteren en verbinden.

![Verbinden met WiFi](/images/waterflowkit/connect-wifi.png)

Opmerking: Wanneer je verbinding maakt met het fallback-netwerk, zou de webinterface automatisch moeten openen. Als dat niet werkt, kun je ook handmatig naar [http://192.168.4.1/](http://192.168.4.1/) navigeren in je browser.

## Stap 5: Verbinden met Home Assistant

Zodra je verbonden bent met je thuis WiFi-netwerk, zal Home Assistant automatisch de WaterFlowKit detecteren onder de sectie 'Apparaten & Services'.

![Verbinden met Home Assistant](/images/waterflowkit/connect-ha.png)

Opmerking: Als je setup geen temperatuursensor bevat, moet je deze entiteit uitschakelen in Home Assistant. Op dezelfde manier, als je slechts één van de twee waterflow sensoren gebruikt, zorg er dan voor dat je alle entiteiten die overeenkomen met de niet-gebruikte sensor uitschakelt. 
Voor kalibratiedetails en meer uitgebreide informatie, raadpleeg de [gebruik sectie](usage)