# Troubleshooting Guide
Als u problemen ondervindt met de WaterP1MeterKit, probeer dan de volgende stappen:

## Algemene probleemoplossingsstappen

1. **Controleer of alle kabels stevig zijn aangesloten**
   - Controleer of de USB-C-voedingskabel stevig is aangesloten op zowel de WaterP1MeterKit als de voedingsadapter.
   - Zorg ervoor dat de RJ12-kabel stevig is aangesloten op de P1-poort van uw energiemeter en de WaterP1MeterKit.
   - Controleer of de watersensor correct is bevestigd aan de universele houder en dat de houder stevig is bevestigd aan uw watermeter.

2. **Controleer de voedingsbron**
   - Zorg ervoor dat de voedingsadapter is aangesloten op een werkend stopcontact.
   - Als u Power over Ethernet (PoE) gebruikt, zorg er dan voor dat uw Ethernet-kabel is aangesloten op een PoE-geschikte poort op uw router of switch.

3. **Herstart de WaterP1MeterKit**
   - Haal de voedingskabel uit de WaterP1MeterKit, wacht 10 seconden en steek hem dan weer in.

4. **Herstart Home Assistant**
   - Soms kan een eenvoudige herstart van Home Assistant connectiviteits- of integratieproblemen oplossen. Ga naar **Instellingen > Systeem > Herstarten** in Home Assistant.

5. **Update Home Assistant**
   - Zorg ervoor dat u de nieuwste versie van Home Assistant gebruikt. Ga naar **Instellingen > Systeem > Updates** om te controleren op en eventuele beschikbare updates te installeren.

## WiFi-connectiviteitsproblemen

1. **Controleer WiFi-signaalsterkte**
   - Zorg ervoor dat de WaterP1MeterKit binnen bereik is van uw WiFi-router. Een zwak signaal kan connectiviteitsproblemen veroorzaken.
   - Indien nodig, verplaats de WaterP1MeterKit dichter bij de router of gebruik een WiFi-extender om het signaal te versterken.

2. **Opnieuw verbinden met WiFi**
   - Als de WaterP1MeterKit geen verbinding maakt met uw WiFi-netwerk, probeer dan opnieuw te verbinden:
     1. Schakel de WaterP1MeterKit uit.
     2. Schakel hem weer in en maak verbinding met de WiFi-hotspot genaamd 'waterp1meterkit' met het wachtwoord 'waterp1meterkit'.
     3. Volg de instructies op het scherm om verbinding te maken met uw WiFi-netwerk.

3. **Controleer WiFi-netwerkconfiguratie**
   - Zorg ervoor dat uw WiFi-netwerk is ingesteld op 2,4 GHz, aangezien de WaterP1MeterKit geen 5 GHz-netwerken ondersteunt.
   - Controleer of uw WiFi-netwerk geen verborgen SSID gebruikt. Als dit het geval is, zorg er dan voor dat u tijdens het installatieproces handmatig de SSID en het wachtwoord invoert.

4. **Controleer WiFi-firmware**
   - Zorg ervoor dat de WiFi-firmware is geïnstalleerd op de WaterP1MeterKit. Als er geen Ethernet-kabel is aangesloten en de groene LED op de Ethernet-poort brandt, is de Ethernet-firmware geïnstalleerd. Als de LED uit is, is de WiFi-firmware geïnstalleerd. Raadpleeg onze [firmware-pagina](https://smarthomeshop.io/firmware) voor instructies over hoe u de firmware kunt bijwerken of overschakelen.

## Ethernet / PoE-connectiviteitsproblemen

1. **Controleer Ethernet-kabelverbinding**
   - Zorg ervoor dat de Ethernet-kabel stevig is aangesloten op zowel de WaterP1MeterKit als een PoE-geschikte poort op uw router of switch.
   - Controleer of de Ethernet-kabel niet beschadigd is en correct functioneert.

2. **Controleer PoE-voeding**
   - Zorg ervoor dat uw router of switch PoE ondersteunt en stroom levert aan de WaterP1MeterKit via de Ethernet-kabel.
   - Indien mogelijk, test de Ethernet-kabel en PoE-poort met een ander apparaat om te bevestigen dat ze correct werken.

3. **Controleer Ethernet-firmware**
   - Zorg ervoor dat de Ethernet-firmware is geïnstalleerd op de WaterP1MeterKit. Als er geen Ethernet-kabel is aangesloten en de groene LED op de Ethernet-poort brandt, is de Ethernet-firmware geïnstalleerd. Als de LED uit is, is de WiFi-firmware geïnstalleerd. Raadpleeg onze [firmware-pagina](https://smarthomeshop.io/firmware) voor instructies over hoe u de firmware kunt bijwerken of overschakelen.

## Problemen met het lezen van gegevens

1. **Watermetergegevens worden niet bijgewerkt**
   - Zorg ervoor dat de watersensor correct is geplaatst op de watermeter. Pas indien nodig de positie van de sensor iets aan.
   - Zet een kraan open. De WaterP1MeterKit zou een groen lampje moeten laten knipperen gedurende 1 seconde na elke liter water die wordt gebruikt om de meting te bevestigen.
   - Controleer of er fysieke obstakels of vuil zijn die de sensor kunnen blokkeren.

2. **Energiemetergegevens worden niet bijgewerkt**
   - Controleer of de RJ12-kabel stevig is aangesloten op zowel de P1-poort van de energiemeter als de WaterP1MeterKit.
   - Zorg ervoor dat uw energiemeter een ESMR/DSMR v5-meter is. Compatibiliteitsproblemen kunnen optreden met andere versies of typen.

## Problemen met LED-indicator

1. **Knipperende rode status-LED**
   - Een knipperende rode status-LED geeft aan dat de WaterP1MeterKit geen verbinding heeft met uw netwerk of Home Assistant. Volg de stappen in de [Verbinden met WiFi](installation.md#step-4-connect-to-wifi) sectie om dit probleem op te lossen.

2. **Groene LED knippert niet tijdens watergebruik**
   - Zorg ervoor dat de watersensor correct is geïnstalleerd en gepositioneerd op de watermeter.

3. **Witte LED**
   - De witte LED geeft aan dat het apparaat stroom ontvangt. Als deze LED uit is, betekent dit dat er geen stroom wordt geleverd via zowel de USB-C-kabel als PoE, of het apparaat kan defect zijn.

## Geavanceerde probleemoplossing

1. **Toegang tot de webinterface**
   - Als u de WaterP1MeterKit niet kunt verbinden met uw WiFi-netwerk, kunt u toegang krijgen tot de fallback-webinterface door naar [http://192.168.4.1/](http://192.168.4.1/) te gaan in uw browser terwijl u verbonden bent met de WaterP1MeterKit-hotspot.

2. **Firmware-updates**
   - Zorg ervoor dat de WaterP1MeterKit de nieuwste firmware gebruikt. Raadpleeg onze [firmware-pagina](https://smarthomeshop.io/firmware) voor instructies over hoe u de firmware kunt bijwerken.

3. **Fabrieksreset**
   - Als niets anders werkt, voer dan een fabrieksreset uit op de WaterP1MeterKit. Dit kan worden gedaan door de unit opnieuw te flashen via USB-C. Raadpleeg onze [firmware-pagina](https://smarthomeshop.io/firmware) voor instructies over hoe u de nieuwste firmware opnieuw kunt flashen, waarmee het apparaat wordt teruggezet naar de oorspronkelijke staat en de opgeslagen SSID-informatie wordt verwijderd.

## Aanvullende bronnen

- Sluit u aan bij onze [Discord-chatserver](https://smarthomeshop.io/discord) voor persoonlijke ondersteuning en community-ondersteuning.

Door deze stappen te volgen, zou u de meeste problemen met uw WaterP1MeterKit moeten kunnen oplossen. Als u problemen blijft ondervinden, neem dan contact op voor verdere ondersteuning.
