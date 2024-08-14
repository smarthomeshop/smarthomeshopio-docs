# Probleemoplossingsgids

Als u problemen ondervindt met de UltimateSensor Mini, probeer dan de volgende stappen:

## Algemene Probleemoplossingsstappen

1. **Zorg dat alle kabels goed zijn aangesloten**
   - Controleer of de USB-C voedingskabel stevig is aangesloten op zowel de UltimateSensor Mini als de voedingsadapter.

2. **Controleer de stroombron**
   - Zorg ervoor dat de voedingsadapter is aangesloten op een werkend stopcontact.
   - Controleer of de stroomkabel niet beschadigd is en goed functioneert.

3. **Herstart de UltimateSensor Mini**
   - Haal de stroomkabel van de UltimateSensor Mini uit het stopcontact, wacht 10 seconden en steek deze dan weer in.

4. **Herstart Home Assistant**
   - Soms kan een eenvoudige herstart van Home Assistant verbindings- of integratieproblemen oplossen. Navigeer binnen Home Assistant naar **Instellingen > Systeem > Herstarten**.

5. **Update Home Assistant**
   - Zorg ervoor dat u de nieuwste versie van Home Assistant gebruikt. Ga naar **Instellingen > Systeem > Updates** om te controleren op en installeren van beschikbare updates.

## WiFi-verbindingproblemen

1. **Controleer de WiFi-signaalsterkte**
   - Zorg ervoor dat de UltimateSensor Mini binnen het bereik van uw WiFi-router is. Zwakke signaalsterkte kan verbindingsproblemen veroorzaken.
   - Indien nodig, verplaats de UltimateSensor Mini dichter naar de router of gebruik een WiFi-versterker om het signaal te verbeteren.

2. **Verbind opnieuw met WiFi**
   - Als de UltimateSensor Mini niet verbindt met uw WiFi-netwerk, probeer dan opnieuw te verbinden:
     1. Schakel de UltimateSensor Mini uit.
     2. Zet hem weer aan en verbind met de WiFi-hotspot genaamd 'ultimatesensor-mini' met het wachtwoord 'ultimatesensor-mini'.
     3. Volg de instructies op het scherm om uw WiFi-netwerk te selecteren en ermee te verbinden.

3. **Controleer de WiFi-netwerkconfiguratie**
   - Zorg ervoor dat uw WiFi-netwerk is ingesteld op 2,4 GHz, aangezien de UltimateSensor Mini geen 5 GHz-netwerken ondersteunt.

## Problemen met Gegevenslezing

1. **Sensorgegevens worden niet bijgewerkt**
   - Zorg ervoor dat de sensoren correct zijn geïnstalleerd en gepositioneerd.
   - Controleer op fysieke obstakels of interferenties die de sensoraflezingen kunnen beïnvloeden.

## Kalibratieproblemen

1. **Sensorkalibratie**
   - Als de sensoraflezingen onnauwkeurig lijken, moet u mogelijk de sensoren kalibreren. Raadpleeg de [kalibratiehandleiding](calibration) voor gedetailleerde instructies over hoe elke sensor te kalibreren.

## Problemen met Spraakassistent

1. **Spraakassistent Werkt Niet**
   - Als de spraakassistent niet werkt, zorg er dan voor dat deze volledig is geconfigureerd. Volg de gedetailleerde stappen in de [spraakassistent-gids](voice-assistant).
   - Controleer of de microfoon en luidspreker correct zijn aangesloten en functioneren.
   - Controleer of de instellingen voor de spraakassistent in Home Assistant correct zijn geconfigureerd.

## Problemen met de Luidspreker: Krakend of Haperend Geluid

Als u krakend of haperend geluid van de luidspreker ervaart, zorg er dan voor dat het apparaat een sterke WiFi-verbinding behoudt. Voor optimale prestaties kunt u overwegen de wake-word detectie uit te schakelen tijdens het streamen van muziek, het afspelen van MP3-bestanden of het gebruik van tekst-naar-spraak functies.

## Problemen met LED-indicator

1. **Rode Status LED knippert langzaam**
   - Geeft aan dat de sensor niet is verbonden met uw WiFi-netwerk of Home Assistant-server. Volg de stappen in de [Verbind met WiFi](installation.md#step-2-connect-to-wifi) sectie om dit probleem op te lossen.

2. **Rode Status LED knippert snel**
   - Geeft een opstartfout aan. Raadpleeg de volledige handleiding voor meer gedetailleerde probleemoplossingsstappen.

## Fout '/config/esphome/default_16MB.csv'. ESPHome.

Als u de foutmelding krijgt `Kan bestand '/config/esphome/default_16MB.csv' niet vinden. Zorg ervoor dat het bestaat (volledig pad: /config/esphome/default_16MB.csv).`, zorg er dan voor dat u het bestand `default_16MB.csv` in de hoofdmap van uw ESPHome-map hebt staan. U kunt het bestand downloaden van onze [GitHub-repository](https://github.com/smarthomeshop/ultimatesensor-mini/blob/main/ultimatesensor-mini-v1/default_16MB.csv).

## Geavanceerde Probleemoplossing

1. **Toegang tot de Webinterface**
   - Als u de UltimateSensor Mini niet kunt verbinden met uw WiFi-netwerk, krijgt u toegang tot de fallback-webinterface door naar [http://192.168.4.1/](http://192.168.4.1/) te navigeren in uw browser terwijl u verbonden bent met de UltimateSensor Mini-hotspot.

2. **Firmware-updates**
   - Zorg ervoor dat de UltimateSensor Mini de nieuwste firmware gebruikt. Raadpleeg onze [firmwarepagina](firmware) voor instructies over het bijwerken van de firmware.

3. **Fabrieksreset**
   - Als alles faalt, voer dan een fabrieksreset uit op de UltimateSensor Mini. Dit kan worden gedaan door het apparaat opnieuw te flashen via USB-C. Raadpleeg onze [firmwarepagina](firmware) voor instructies over het opnieuw flashen van de nieuwste firmware, waarmee het apparaat wordt teruggezet naar de oorspronkelijke staat en de opgeslagen SSID-informatie wordt verwijderd.

## Aanvullende Bronnen

- Sluit u aan bij onze [Discord chatserver](https://smarthomeshop.io/discord) voor persoonlijke assistentie en ondersteuning van de gemeenschap.

Door deze stappen te volgen, zou u de meeste problemen met uw UltimateSensor Mini moeten kunnen oplossen. Als u nog steeds problemen ondervindt, neem dan contact op voor verdere hulp.