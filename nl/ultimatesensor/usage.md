# Gebruiksgids

De UltimateSensor stelt u in staat om verschillende omgevingsfactoren in real-time te monitoren via Home Assistant.

## Real-Time Monitoring

1. **Open Home Assistant** en navigeer naar **Instellingen**.
2. Ga naar **Apparaten & Diensten** en zoek naar de **ESPHome** integratie. Open de **ESPHome** integratie.
3. Selecteer het **UltimateSensor** apparaat.
4. Hier vindt u alle entiteiten die geassocieerd zijn met de UltimateSensor, zoals CO2-niveaus, temperatuur, vochtigheid, lichtintensiteit, VOC's en ruimtebezetting.
5. Als u bepaalde sensoren of functies niet gebruikt, kunt u de ongebruikte entiteiten uitschakelen.

## Historische Gegevens

Om historische milieu-gegevens te bekijken:

1. Navigeer naar de **Geschiedenis** sectie in Home Assistant.
2. Selecteer de gewenste tijdsperiode (uur, dag, maand of jaar) en selecteer de UltimateSensor entiteit om uw gegevens over die periode te zien.

## Kalibratie

Let op: alle sensoren hebben minstens 10 minuten nodig om op te starten, en de CO2-sensor kan tot 24 uur duren. De sensoren kunnen ook kalibratie nodig hebben. Volg de instructies op de [kalibratiepagina](calibration) om nauwkeurige metingen te garanderen.

## Plaatsing van de Ultimate Sensor

Om nauwkeurige metingen te garanderen en schade te voorkomen:
- Plaats de UltimateSensor niet in direct zonlicht. Langdurige blootstelling kan ervoor zorgen dat de behuizing van de sensor geel wordt, een voorwaarde die niet onder de garantie valt.
- We raden aan om de UltimateSensor op een kast te plaatsen of aan een muur te monteren op een hoogte tussen 1 en 2 meter.

## Onnauwkeurige meting van sensoren

Als sensoren onnauwkeurige metingen weergeven, kunnen ze herkalibratie of aanpassingen aan hun offsets vereisen. Gedetailleerde instructies zijn te vinden op de [kalibratiepagina](calibration). Let op: Wij zijn niet verantwoordelijk voor onnauwkeurigheden in metingen van sensoren van derden of voor veranderingen in het gedrag van de sensor door software-updates van derden.

## Schakelen tussen WiFi en Ethernet (PoE) Verbinding

De UltimateSensor ondersteunt zowel WiFi- als Ethernet (PoE)-verbindingen, wat flexibele integratie in uw slimme huis setup mogelijk maakt. Afhankelijk van uw netwerkvereisten en setup, kunt u ervoor kiezen om tussen deze verbindingssoorten te schakelen.

Om het verbindings type van uw UltimateSensor te wijzigen, moet u de firmware van het apparaat bijwerken of wijzigen:

- WiFi Verbinding: Zorg ervoor dat uw apparaat binnen het bereik van uw WiFi-router is. Als de UltimateSensor geen verbinding kan maken of als u de WiFi-netwerkinstellingen moet wijzigen, moet u mogelijk de WiFi-configuratie resetten of opnieuw verbinden via de fallback-hotspotmodus.
- Ethernet (PoE) Verbinding: Deze optie vereist een compatibele PoE-switch of -injector. Verbind de UltimateSensor eenvoudigweg met een Ethernetkabel met uw PoE-ondersteunde netwerkapparatuur. Deze opstelling biedt niet alleen een stabiele netwerkverbinding, maar voedt ook het apparaat via dezelfde kabel. U kunt ook een normale Ethernetkabel (zonder PoE) gebruiken en het apparaat voeden met de USB-C.

Voor stapsgewijze instructies over het schakelen van firmware om deze verbindingssoorten mogelijk te maken, bezoek de [firmwarepagina](firmware). Deze pagina biedt gedetailleerde richtlijnen voor het configureren en updaten van de UltimateSensor om aan uw voorkeursverbindingsmethode te voldoen.