# Installation Guide

## Uitpakken

Haal de P1MeterKit uit de verpakking en identificeer alle onderdelen. Je zou de volgende items moeten hebben:
- P1MeterKit
- RJ12-kabel

Optioneel (indien geselecteerd bij het afrekenen):
- USB-A naar USB-C kabel (3 meter)
- Voedingsadapter (Europees)

![Uitpakken](/images/p1meterkit/unboxing.png)

## Stap 1: Verbinden met Energiemeter

Begin met het verbinden van de P1MeterKit met je energiemeter met behulp van de meegeleverde RJ12-kabel. Als je meter apparaten kan voeden via deze verbinding, zal de P1MeterKit automatisch worden ingeschakeld. Als je meter geen voeding via de RJ12-verbinding ondersteunt, moet je een USB-C-kabel met een voedingsadapter aansluiten op de P1MeterKit om stroom te leveren.

![Verbinden met Energiemeter](/images/p1meterkit/connect-energy-meter.png)

## Stap 2: Voeding via Kabel (Optioneel)

Bij gebruik met een DSMR v5-meter ontvangt de P1MeterKit meestal stroom via de meegeleverde RJ12-kabel van de energiemeter. Als je energiemeter deze functie niet ondersteunt, of als je een DSMR v4-meter gebruikt, moet je een USB-C-kabel met een voedingsadapter aansluiten op de P1MeterKit om stroom te leveren.

![Voeding via Kabel](/images/p1meterkit/power-by-cable.png)

## Stap 3: LED-informatie

Controleer welke LED's momenteel branden en ga vervolgens door naar Stap 4. Opmerking: Als de kit de LED's snel aan en uit laat knipperen wanneer deze alleen vanaf de RJ12-kabel wordt gevoed, levert je energiemeter niet voldoende stroom. Sluit een USB-C-kabel aan zoals uitgelegd in Stap 2. Ofwel LED 1 moet continu branden of LED 2; LED 3 moet rood knipperen. Ga vervolgens verder naar Stap 4.

- **LED 1 (Wit licht)**: Brandt wanneer de kit wordt gevoed via een USB-C-verbinding.
- **LED 3 (Geel licht)**: Brandt wanneer de kit wordt gevoed via de RJ12-kabel die is aangesloten op de energiemeter.
- **LED 2 (Rood licht)**: Knippert als de kit niet is verbonden met Home Assistant of je Wi-Fi-netwerk. Ga verder naar Stap 4.

![LED-informatie](/images/p1meterkit/led-information.png)

## Stap 4: Verbinden met WiFi

Bij het opstarten zendt de P1MeterKit een WiFi-hotspot uit met de naam 'p1meterkit' en het wachtwoord 'p1meterkit'. Verbind met deze hotspot en er verschijnt een pop-upvenster waarin je je eigen WiFi-netwerk kunt selecteren. Zorg ervoor dat je WiFi-netwerk een 2,4 GHz-netwerk is. Als het fallback-hotspot niet verschijnt, probeer dan een ander apparaat te gebruiken. Het kan tot één minuut duren voordat het WiFi-netwerk zichtbaar wordt na het inschakelen van het apparaat.

![Verbinden met WiFi](/images/p1meterkit/connect-wifi.png)

Opmerking: Wanneer je verbinding maakt met het fallback-netwerk, wordt de webinterface automatisch geopend. Als dat niet werkt, ga dan handmatig naar [http://192.168.4.1/](http://192.168.4.1/) in je browser.

## Stap 5: Verbinden met Home Assistant

Open Home Assistant en ga naar **Instellingen -> Apparaten & Services**. Home Assistant detecteert automatisch de P1MeterKit onder de sectie 'Apparaten & Services'. Als dit niet gebeurt, moet je het apparaat handmatig toevoegen. Zoek het IP-adres van de P1MeterKit op in je router en ga vervolgens naar **Home Assistant-instellingen -> Apparaten & Services**. Klik op **Integratie toevoegen**, selecteer **ESPHome** en voer het IP-adres van het apparaat in. Het wordt dan toegevoegd.

![Verbinden met Home Assistant](/images/p1meterkit/connect-ha.png)

Na het verbinden met Home Assistant is je apparaat zichtbaar onder **Home Assistant -> Instellingen -> Apparaten & Services**. Zoek naar de ESPHome-integratie en klik erop om je P1MeterKit met al zijn entiteiten te zien.

Voor gedetailleerde instructies over het integreren van de P1MeterKit met het HA Energy Dashboard of DSMR-Reader, ga verder naar de [gebruikershandleiding](usage).