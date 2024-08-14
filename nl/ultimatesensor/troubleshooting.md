# Probleemoplossingsgids

Als u problemen ondervindt met de UltimateSensor, probeer dan de volgende stappen:

## Algemene Probleemoplossingsstappen

1. **Zorg dat alle kabels goed zijn aangesloten**
   - Controleer of de USB-C voedingskabel stevig is verbonden met zowel de UltimateSensor als de voedingsadapter.

2. **Controleer de stroombron**
   - Zorg ervoor dat de voedingsadapter is aangesloten op een werkend stopcontact.
   - Controleer of de stroomkabel niet beschadigd is en goed functioneert.

3. **Herstart de UltimateSensor**
   - Haal de stroomkabel van de UltimateSensor uit het stopcontact, wacht 10 seconden en steek deze dan weer in.

4. **Herstart Home Assistant**
   - Soms kan een eenvoudige herstart van Home Assistant verbindings- of integratieproblemen oplossen. Navigeer binnen Home Assistant naar **Instellingen > Systeem > Herstarten**.

5. **Update Home Assistant**
   - Zorg ervoor dat je de nieuwste versie van Home Assistant gebruikt. Ga naar **Instellingen > Systeem > Updates** om te controleren op en installeren van beschikbare updates.

## Schakelen tussen WiFi en Ethernet (PoE) verbinding

De UltimateSensor is ontworpen om zowel WiFi- als Ethernet (PoE)-verbindingen te ondersteunen, afhankelijk van uw installatievoorkeuren. Om succesvol te schakelen tussen deze verbindingstypes, zijn specifieke firmware-aanpassingen noodzakelijk:

1. **Identificeer geïnstalleerde Firmware**: 
   - Controleer de LED-status op de Ethernet-poort van de UltimateSensor:
     - Een **gele of groene LED** geeft aan dat de Ethernet-firmware momenteel actief is.
     - Geen LED suggereert dat het apparaat op WiFi-firmware draait.

2. **Firmware opnieuw flashen**:
   - Als je moet overschakelen van WiFi naar Ethernet of vice versa, moet je het apparaat opnieuw flashen met de juiste firmware.
   - Gedetailleerde stapsgewijze instructies voor het opnieuw flashen zijn beschikbaar op onze [firmwarepagina](firmware). Deze pagina leidt je door het downloaden van het juiste `.bin`-bestand en het gebruik van een flash-tool om je UltimateSensor bij te werken.

Voor gebruikers die problemen ondervinden met WiFi-verbindingen, zie de onderstaande sectie.

## WiFi-verbindingproblemen

1. **Controleer de WiFi-signaalsterkte**
   - Zorg ervoor dat de UltimateSensor binnen het bereik van je WiFi-router is. Zwakke signaalsterkte kan verbindingsproblemen veroorzaken.
   - Indien nodig, verplaats de UltimateSensor dichter naar de router of gebruik een WiFi-versterker om het signaal te verbeteren.

2. **Verbind opnieuw met WiFi**
   - Als de UltimateSensor niet verbindt met je WiFi-netwerk, probeer dan opnieuw te verbinden:
     1. Schakel de UltimateSensor uit.
     2. Zet hem weer aan en verbind met de WiFi-hotspot genaamd 'ultimatesensor-mini' met het wachtwoord 'ultimatesensor-mini'.
     3. Volg de instructies op het scherm om je WiFi-netwerk te selecteren en ermee te verbinden.

3. **Controleer de WiFi-netwerkconfiguratie**
   - Zorg ervoor dat je WiFi-netwerk is ingesteld op 2.4 GHz, aangezien de UltimateSensor geen 5 GHz-netwerken ondersteunt.

Als de UltimateSensor geen verbinding maakt met een eerder opgeslagen WiFi-netwerk, zal deze automatisch terugkeren naar een fabrieksinstellingen WiFi-hotspot na één minuut. Deze fallback-hotspot heet ‘ultimatesensor’ met het wachtwoord ‘ultimatesensor’. Je kunt verbinden met dit netwerk om je gewenste WiFi-instellingen opnieuw te configureren. Open eenvoudigweg de WiFi-instellingen op je apparaat, verbind met het ‘ultimatesensor’-netwerk, en volg de instructies op het scherm om je voorkeurs WiFi-netwerk te selecteren en in te loggen.

Als opnieuw verbinden met WiFi je problemen niet oplost, of als je liever opnieuw begint, moet je mogelijk de firmware van het apparaat opnieuw flashen. Gedetailleerde instructies voor het opnieuw flashen zijn te vinden op de [firmwarepagina](firmware). Dit proces stelt je in staat het apparaat te resetten naar de oorspronkelijke instellingen en het bij te werken met de nieuwste firmware, om optimale prestaties en connectiviteit te garanderen.

## Problemen met gegevenslezing

1. **Sensorgegevens worden niet bijgewerkt**
   - Zorg ervoor dat de sensoren correct zijn geïnstalleerd en gepositioneerd.

	- Controleer op fysieke obstakels of interferenties die de sensorlezingen kunnen beïnvloeden.

## Kalibratieproblemen

1.	Sensor Kalibratie
	- Als de sensorlezingen onnauwkeurig lijken, moet je mogelijk de sensoren kalibreren. Raadpleeg de kalibratiegids voor gedetailleerde instructies over hoe elke sensor te kalibreren.

## Problemen met LED-indicatoren

1.	Rode Status LED knippert langzaam
	-	Geeft aan dat de sensor niet is verbonden met je WiFi-netwerk of Home Assistant-server. Volg de stappen in de Verbind met WiFi sectie om dit probleem op te lossen.
2.	Rode Status LED knippert snel
	-	Geeft een opstartfout aan. Raadpleeg de volledige handleiding voor meer gedetailleerde probleemoplossingsstappen.

## Geavanceerde probleemoplossing

1.	Toegang tot de Webinterface
	-	Als je de UltimateSensor niet kunt verbinden met je WiFi-netwerk, krijg toegang tot de fallback-webinterface door naar http://192.168.4.1/ te navigeren in je browser terwijl je verbonden bent met de UltimateSensor-hotspot.
2.	Firmware-updates
	-	Zorg ervoor dat de UltimateSensor de nieuwste firmware gebruikt. Raadpleeg onze firmwarepagina voor instructies over het bijwerken van de firmware.
3.	Fabrieksreset
	-	Als alles faalt, voer een fabrieksreset uit op de UltimateSensor. Dit kan worden gedaan door het toestel opnieuw te flashen via USB-C. Raadpleeg onze firmwarepagina voor instructies over het opnieuw flashen van de nieuwste firmware, wat het toestel terugzet naar zijn oorspronkelijke staat en de opgeslagen SSID-informatie verwijdert.

## Aanvullende Bronnen
- Sluit je aan bij onze [Discord chat server](https://smarthomeshop.io/discord) voor persoonlijke assistentie en ondersteuning van de gemeenschap.

Door deze stappen te volgen, zou je de meeste problemen met je UltimateSensor moeten kunnen oplossen. Als je nog steeds problemen ondervindt, neem dan contact op voor verdere hulp.