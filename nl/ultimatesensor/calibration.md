# Kalibratiehandleiding voor UltimateSensor Mini

Het kalibreren van uw UltimateSensor zorgt voor nauwkeurige metingen van CO2-niveaus en andere omgevingsparameters. Volg deze stappen om uw sensor correct te kalibreren.

## CO2 Sensor Kalibratie

De UltimateSensor gebruikt de SCD41.

**SCD41 Specificaties**
- **CO2 Meetbereik**: 400 tot 5.000 ppm
- **Temperatuur Meetbereik**: -10 tot 60 °C
- **Vochtigheids Meetbereik**: 0 tot 100 %RH

**CO2 Nauwkeurigheid Specificaties:**
- **400-1.000 ppm**: ±(50 ppm + 2.5% van de meting)
- **1.001-2.000 ppm**: ±(50 ppm + 3% van de meting)
- **2.001-5.000 ppm**: ±(40 ppm + 5% van de meting)

1. **Automatische Baseline Kalibratie (ABC)**
   - De sensor gebruikt een Automatische Baseline Kalibratie (ABC) algoritme om zichzelf in de loop van de tijd te kalibreren. Zorg ervoor dat de sensor regelmatig wordt blootgesteld aan frisse lucht (400 ppm CO2) zodat de ABC correct functioneert.

2. **Handmatige Kalibratie**
   - Als u de sensor handmatig moet kalibreren, volg dan deze stappen:

     ### Stapsgewijze Handmatige Kalibratie via Home Assistant

     1. **Bereid de Omgeving & Ultimate Sensor Mini voor**
        - Plaats de Ultimate Sensor buiten op een heldere dag binnen bereik van uw WiFi-netwerk (let op dat de sensor niet waterdicht is). Zet de UltimateSensor aan en wacht minstens 5 minuten voordat u doorgaat naar de volgende stap.

     2. **Toegang tot Home Assistant**
        - Open Home Assistant in uw webbrowser of de mobiele app.

     3. **Navigeer naar ESPHome Integratie**
        - Ga naar **Instellingen**.
        - Selecteer **Apparaten & Diensten**.
        - Zoek en open de **ESPHome** integratie.

     4. **Selecteer UltimateSensor Mini**
        - Zoek het UltimateSensor-apparaat in de lijst met ESPHome-apparaten.
        - Klik op het apparaat om de instellingen te openen.

     5. **Kalibreer de CO2 Sensor**
        - Druk op de Kalibreer CO2-knop in de **Bedienings** sectie. De sensor begint met kalibreren. Laat het kalibratieproces minstens 1 minuut draaien. Opmerking: De sensor is gekalibreerd op 419 ppm. Vanaf april 2022 is de gemiddelde CO2-concentratie in frisse lucht 419 ppm.

     6. **Controleer de Kalibratie**
        - Controleer na het kalibreren of de CO2-metingen nauwkeurig zijn.
        - Mogelijk moet u het proces herhalen of de instellingen aanpassen als de metingen niet correct zijn.


#### CO2-Niveaus en Gezondheidsimplicaties

De CO2-niveaus in de lucht en mogelijke gezondheidseffecten zijn:
- **350-450 ppm**: Gezond buitenluchtniveau.
- **600 ppm**: Gezond binnenluchtniveau.
- **800 ppm**: Acceptabel niveau voor binnenluchtkwaliteit.
- **1.000 ppm**: Ventilatie aanbevolen.
- **1.200 ppm**: Ventilatie noodzakelijk.
- **2.000 ppm**: Negatieve gezondheidseffecten, zoals slaperigheid en slechte luchtkwaliteit.
- **5.000 ppm**: Gevaarlijk bij langdurige blootstelling.

## Kalibratie van Temperatuur- en Vochtigheidssensor

1. **Temperatuurkalibratie**
   - Zorg ervoor dat de sensor zich in een stabiele omgeving bevindt met een bekende temperatuur.
   - Pas de temperatuur offset aan in de ESPHome YAML om overeen te komen met de bekende temperatuur.

2. **Vochtigheid Kalibratie**
   - Plaats de sensor in een omgeving met een bekend vochtigheidsniveau.
   - Pas de vochtigheidsoffset aan in de ESPHome YAML om overeen te komen met de bekende vochtigheid.

## Kalibratie van Lichtintensiteitssensor

1. **Kalibratiestappen**
   - Gebruik een luxmeter om de lichtintensiteit in de omgeving van de sensor te meten.
   - Pas de lichtsensorlezingen in de ESPHome YAML aan om overeen te komen met de luxmeter meting.

## Kalibratie van VOC- en Fijnstofsensor

1. **VOC Kalibratie**
   - Plaats de sensor in een omgeving met bekende VOC-niveaus.
   - Pas de ESPHome YAML van de sensor aan om de VOC-metingen dienovereenkomstig aan te passen.

2. **Fijnstof Kalibratie**
   - Gebruik een betrouwbaar fijnstof referentieapparaat om de PM-niveaus te meten.
   - Pas de PM-lezingen van de sensor aan in de ESPHome YAML om overeen te komen met het referentieapparaat.

## Aanvullende Opmerkingen

- **Kalibratiefrequentie**
  - Regelmatige kalibratie zorgt voor voortdurende nauwkeurigheid. Voer handmatige kalibratie uit elke 6-12 maanden of na het verplaatsen van de sensor.

- **Omgevingsfactoren**
  - Vermijd het plaatsen van de sensor in direct zonlicht of in gebieden met extreme temperaturen en vochtigheid gedurende lange periodes.

Voor gedetailleerde instructies, raadpleeg de ESPHome of Home Assistant documentatie over sensorkalibratie. Als u problemen ondervindt, sluit u dan aan bij onze [Discord community](https://smarthomeshop.io/discord) voor ondersteuning.

Door deze kalibratiestappen te volgen, kunt u ervoor zorgen dat uw UltimateSensor nauwkeurige en betrouwbare omgevingsgegevens levert voor uw slimme thuissysteem.