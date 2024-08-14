# Troubleshooting Guide
Als u problemen ondervindt met de WaterMeterKit, probeer dan de volgende stappen:

## Algemene probleemoplossingsstappen

1. **Controleer of alle kabels stevig zijn aangesloten**
   - Controleer of de USB-C-voedingskabel stevig is aangesloten op zowel de WaterMeterKit als de voedingsadapter.
   - Controleer of de watersensor correct is bevestigd aan de universele houder en of de houder stevig is bevestigd aan uw watermeter.

2. **Controleer de voedingsbron**
   - Zorg ervoor dat de voedingsadapter is aangesloten op een werkend stopcontact.
   - Controleer of de voedingskabel niet beschadigd is en naar behoren functioneert.

3. **Herstart de WaterMeterKit**
   - Trek de voedingskabel uit de WaterMeterKit, wacht 10 seconden en steek hem vervolgens weer in.

4. **Herstart Home Assistant**
   - Soms kan een eenvoudige herstart van Home Assistant connectiviteits- of integratieproblemen oplossen. Ga naar **Instellingen > Systeem > Herstarten** binnen Home Assistant.

5. **Update Home Assistant**
   - Zorg ervoor dat u de nieuwste versie van Home Assistant gebruikt. Ga naar **Instellingen > Systeem > Updates** om te controleren op en eventuele beschikbare updates te installeren.

## WiFi-connectiviteitsproblemen

1. **Controleer de WiFi-signaalsterkte**
   - Zorg ervoor dat de WaterMeterKit binnen het bereik van uw WiFi-router is. Een zwak signaal kan connectiviteitsproblemen veroorzaken.
   - Indien nodig, verplaats de WaterMeterKit dichter bij de router of gebruik een WiFi-extender om het signaal te versterken.

2. **Opnieuw verbinden met WiFi**
   - Als de WaterMeterKit geen verbinding maakt met uw WiFi-netwerk, probeer dan opnieuw te verbinden:
     1. Schakel de WaterMeterKit uit.
     2. Schakel hem weer in en maak verbinding met de WiFi-hotspot met de naam 'watermeterkit' en het wachtwoord 'watermeterkit'.
     3. Volg de instructies op het scherm om uw WiFi-netwerk te selecteren en verbinding te maken.

3. **Controleer de WiFi-netwerkconfiguratie**
   - Zorg ervoor dat uw WiFi-netwerk is ingesteld op 2,4 GHz, aangezien de WaterMeterKit geen 5 GHz-netwerken ondersteunt.
   - Controleer of uw WiFi-netwerk geen verborgen SSID gebruikt. Als dit het geval is, zorg er dan voor dat u tijdens het installatieproces handmatig de SSID en het wachtwoord invoert.

## Problemen met het lezen van gegevens

1. **Watermetergegevens worden niet bijgewerkt**
   - Zorg ervoor dat de watersensor correct is gepositioneerd op de watermeter. Pas indien nodig de positie van de sensor iets aan.
   - Zet een kraan open. De WaterMeterKit zou een groen lampje moeten laten knipperen gedurende 1 seconde na elke liter water die wordt gebruikt om de meting te bevestigen.
   - Controleer of er fysieke obstakels of vuil zijn die de sensor kunnen blokkeren.

## Problemen met LED-indicator

1. **Knipperende rode status-LED**
   - Een knipperende rode status-LED geeft aan dat de WaterMeterKit niet is verbonden met uw netwerk of Home Assistant. Volg de stappen in de [Verbinden met WiFi](installation.md#stap-4-verbinden-met-wifi) sectie om dit probleem op te lossen.

2. **Groene LED knippert niet tijdens watergebruik**
   - Zorg ervoor dat de watersensor correct is geïnstalleerd en gepositioneerd op de watermeter.

3. **Blauwe LED**
   - De blauwe LED geeft aan dat het apparaat stroom ontvangt. Als deze LED uit is, betekent dit dat er geen stroom wordt geleverd via de USB-C-kabel, of dat het apparaat mogelijk defect is.

## Geavanceerde probleemoplossing

1. **Toegang tot de webinterface**
   - Als u de WaterMeterKit niet kunt verbinden met uw WiFi-netwerk, kunt u toegang krijgen tot de fallback-webinterface door naar [http://192.168.4.1/](http://192.168.4.1/) te gaan in uw browser terwijl u verbonden bent met de WaterMeterKit-hotspot.

2. **Firmware-updates**
   - Zorg ervoor dat de WaterMeterKit de nieuwste firmware gebruikt. Raadpleeg onze [firmware-pagina](firmware) voor instructies over hoe u de firmware kunt bijwerken.

3. **Fabrieksreset**
   - Als niets anders werkt, voer dan een fabrieksreset uit op de WaterMeterKit. Dit kan worden gedaan door de unit opnieuw te flashen via USB-C. Raadpleeg onze [firmware-pagina](firmware) voor instructies over hoe u de nieuwste firmware opnieuw kunt flashen, waarmee het apparaat wordt teruggezet naar de oorspronkelijke staat en de opgeslagen SSID-informatie wordt verwijderd.

## Aanvullende bronnen

- Sluit u aan bij onze [Discord-chatserver](https://smarthomeshop.io/discord) voor persoonlijke ondersteuning en community-ondersteuning.

Door deze stappen te volgen, zou u de meeste problemen met uw WaterMeterKit moeten kunnen oplossen. Als u problemen blijft ondervinden, neem dan contact op voor verdere ondersteuning.