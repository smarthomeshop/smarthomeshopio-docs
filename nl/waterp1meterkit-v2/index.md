# WaterP1MeterKit V2 Overview

<img src="/images/waterp1meterkit/waterp1meterkit-product-shop.png" alt="WaterP1MeterKit Afbeelding" style="width: 50%;">

Welkom bij de WaterP1MeterKit handleiding. In deze sectie vindt u stapsgewijze instructies en aanvullende informatie voor het instellen en gebruiken van uw WaterP1MeterKit.

U kunt deze handleiding ook gebruiken voor de WaterP1MeterKit V1-versie. Het enige verschil tussen WaterP1MeterKit V1 en V2 is dat V2 standaard PoE-ondersteuning heeft ingebouwd. Bij V1 werd PoE ingeschakeld met behulp van een externe splitter die de PoE-stroom verdeelde over een Ethernet-kabel en een USB-C-kabel. Bij V2 kunt u eenvoudig een PoE-ingeschakelde Ethernet-kabel in het apparaat steken. Houd er rekening mee dat u de Ethernet-firmware moet installeren om de Ethernet-poort te gebruiken!

## Secties

- [Installatie](installation)
- [Gebruik](usage)
- [Probleemoplossing](troubleshooting)
- [Technische specificaties](technical-specifications)
- [Garantie en ondersteuning](warranty-and-support)

## Veelgestelde vragen (FAQ)

1. **Hoe installeer ik de WaterP1MeterKit?**
   - Gedetailleerde installatie-instructies vindt u in de [Installatiehandleiding](installation).

2. **Kan ik de WaterP1MeterKit gebruiken om alleen water- en/of energieverbruik te meten?**
   - Ja, u kunt de WaterP1MeterKit gebruiken om zowel water- als energieverbruik te meten, of slechts een van de twee. Sluit eenvoudig de juiste sensor(s) aan en schakel ongebruikte entiteiten uit in Home Assistant.

3. **Hoe meet de WaterP1MeterKit het waterverbruik?**
   - De WaterP1MeterKit werkt door een sensor te plaatsen op de 1-liter aanduiding van uw watermeter. Er zit een metalen plaat in de meter die één volledige rotatie maakt voor elke liter water die wordt gebruikt. De kit meet de positie van deze metalen plaat om de stroomsnelheid te bepalen.

4. **Hoe meet de WaterP1MeterKit het energieverbruik?**
   - De WaterP1MeterKit maakt gebruik van een P1-meterkabel die is aangesloten op de P1-poort van uw energiemeter. Het leest alle gegevens die door de energiemeter worden verzonden, inclusief totaalverbruik, momenteel vermogensverbruik en eventuele energie die terug wordt geleverd aan het netwerk via zonnepanelen.

5. **Meet de WaterP1MeterKit ook de energie die terug wordt geleverd aan het netwerk via mijn zonnepanelen?**
   - Ja, de WaterP1MeterKit meet alle gegevens die door uw energiemeter worden verzonden via de P1-poort, inclusief energie die terug wordt geleverd aan het netwerk via zonnepanelen.

6. **Wat is het verschil tussen de PoE- en USB-C-opties voor de WaterP1MeterKit?**
   - Vanaf WaterP1MeterKit V2 is PoE standaard ingebouwd. Op de productpagina kunt u kiezen tussen de opties "Met USB-C-adapter set" en "Zonder USB-C-adapter set". Deze keuze bepaalt welke firmware is geïnstalleerd:
     - **Met USB-C-adapter set**: De kit is standaard geconfigureerd voor WiFi-connectiviteit en de Ethernet-poort is uitgeschakeld.
     - **Zonder USB-C-adapter set**: De kit is standaard geconfigureerd voor Ethernet (PoE) connectiviteit.
   - U kunt altijd schakelen tussen de firmwareversies. Als de groene LED op de Ethernet-poort brandt zonder aangesloten Ethernet-kabel, is de Ethernet-firmware geïnstalleerd. Als de LED uit is, is de WiFi-firmware geïnstalleerd. Raadpleeg onze [firmwarepagina](https://smarthomeshop.io/firmware) voor instructies over het wisselen van firmware.

Voor verdere ondersteuning kunt u lid worden van onze [Discord-server](https://smarthomeshop.io/discord) voor persoonlijke ondersteuning en interactie met de community.