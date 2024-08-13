# Troubleshooting Guide
Als je problemen ondervindt met de UltimateSensor Mini, probeer dan de volgende stappen:

## Algemene probleemoplossingsstappen

1. **Controleer of alle kabels goed zijn aangesloten**
   - Verifieer dat de USB-C voedingskabel goed is aangesloten op zowel de UltimateSensor Mini als de voedingsadapter.

2. **Controleer de voedingsbron**
   - Zorg ervoor dat de voedingsadapter is aangesloten op een werkend stopcontact.
   - Controleer of de voedingskabel niet beschadigd is en goed functioneert.

3. **Herstart de UltimateSensor Mini**
   - Haal de voedingskabel uit de UltimateSensor Mini, wacht 10 seconden en steek hem dan weer in.

4. **Herstart Home Assistant**
   - Soms kan een eenvoudige herstart van Home Assistant connectiviteits- of integratieproblemen oplossen. Ga naar **Instellingen > Systeem > Herstarten** binnen Home Assistant.

5. **Update Home Assistant**
   - Zorg ervoor dat je de nieuwste versie van Home Assistant gebruikt. Ga naar **Instellingen > Systeem > Updates** om te controleren op en eventuele beschikbare updates te installeren.

## WiFi-connectiviteitsproblemen

1. **Controleer de WiFi-signaalsterkte**
   - Zorg ervoor dat de UltimateSensor Mini binnen bereik van je WiFi-router is. Een zwak signaal kan connectiviteitsproblemen veroorzaken.
   - Indien nodig, verplaats de UltimateSensor Mini dichter bij de router of gebruik een WiFi-extender om het signaal te versterken.

2. **Opnieuw verbinden met WiFi**
   - Als de UltimateSensor Mini geen verbinding maakt met je WiFi-netwerk, probeer dan opnieuw te verbinden:
     1. Schakel de UltimateSensor Mini uit.
     2. Schakel hem weer in en verbind met het WiFi-hotspot genaamd 'ultimatesensor-mini' met het wachtwoord 'ultimatesensor-mini'.
     3. Volg de instructies op het scherm om je WiFi-netwerk te selecteren en verbinden.

3. **Controleer de WiFi-netwerkconfiguratie**
   - Zorg ervoor dat je WiFi-netwerk is ingesteld op 2,4 GHz, aangezien de UltimateSensor Mini geen 5 GHz-netwerken ondersteunt.

## Problemen met het lezen van gegevens

1. **Sensorgegevens worden niet bijgewerkt**
   - Zorg ervoor dat de sensoren correct zijn geïnstalleerd en gepositioneerd.
   - Controleer op eventuele fysieke obstakels of interferentie die van invloed kunnen zijn op de sensoruitlezingen.

## Problemen met kalibratie

1. **Sensor kalibratie**
   - Als de sensoruitlezingen onnauwkeurig lijken, moet je mogelijk de sensoren kalibreren. Raadpleeg de [kalibratiehandleiding](calibration) voor gedetailleerde instructies over hoe je elke sensor kunt kalibreren.

## Problemen met spraakassistent

1. **Spraakassistent werkt niet**
   - Als de spraakassistent niet werkt, zorg er dan voor dat deze volledig is geconfigureerd. Volg de gedetailleerde stappen in de [spraakassistent handleiding](voice-assistant).
   - Controleer of de microfoon en luidspreker correct zijn aangesloten en functioneren.
   - Verifieer dat de spraakassistentinstellingen in Home Assistant correct zijn geconfigureerd.

## Problemen met LED-indicator

1. **Rode status-LED knippert langzaam**
   - Geeft aan dat de sensor geen verbinding heeft met je WiFi-netwerk of Home Assistant-server. Volg de stappen in de [Verbinden met WiFi](installation.md#step-2-connect-to-wifi) sectie om dit probleem op te lossen.

2. **Rode status-LED knippert snel**
   - Geeft een opstartfout aan. Raadpleeg de volledige handleiding voor meer gedetailleerde probleemoplossingsstappen.

## Geavanceerde probleemoplossing

1. **Toegang tot de webinterface**
   - Als je de UltimateSensor Mini niet kunt verbinden met je WiFi-netwerk, krijg je toegang tot de fallback-webinterface door naar [http://192.168.4.1/](http://192.168.4.1/) te gaan in je browser terwijl je verbonden bent met de UltimateSensor Mini-hotspot.

2. **Firmware-updates**
   - Zorg ervoor dat de UltimateSensor Mini de nieuwste firmware gebruikt. Raadpleeg onze [firmware-pagina](https://smarthomeshop.io/firmware) voor instructies over hoe je de firmware kunt bijwerken.

3. **Fabrieksreset**
   - Als niets anders werkt, voer dan een fabrieksreset uit op de UltimateSensor Mini. Dit kan worden gedaan door de unit opnieuw te flashen via USB-C. Raadpleeg onze [firmware-pagina](https://smarthomeshop.io/firmware) voor instructies over hoe je de nieuwste firmware opnieuw kunt flashen, waardoor het apparaat wordt teruggezet naar de oorspronkelijke staat en de opgeslagen SSID-informatie wordt verwijderd.

## Aanvullende bronnen

- Sluit je aan bij onze [Discord chat server](https://smarthomeshop.io/discord) voor persoonlijke ondersteuning en community support.

Door deze stappen te volgen, zou je de meeste problemen met je UltimateSensor Mini moeten kunnen oplossen. Als je problemen blijft ervaren, neem dan contact op voor verdere ondersteuning.
