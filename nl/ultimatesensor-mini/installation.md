# Installation Guide
## Uitpakken

Haal de UltimateSensor Mini uit de verpakking en identificeer alle onderdelen. Je zou de volgende items moeten hebben:
- UltimateSensor Mini
- USB-A naar USB-C kabel (3 meter)
- Voedingsadapter (Europees)

Optioneel (indien geselecteerd bij het afrekenen):
- Wandmontage voor apparaatschroeven
- Wandmontage (voor apparaat)
- Wandmontage (voor muur)

![Uitpakken](/images/ultimatesensor-mini/unboxing.png)

## Stap 1: Voeding via kabel

Sluit de UltimateSensor Mini aan op een voedingsbron met behulp van de meegeleverde USB-C kabel en voedingsadapter. Let op dat het apparaat wordt geleverd met een Europese USB-voedingsadapter. Als je buiten Europa woont, ontvang je nog steeds de adapter in de doos, maar je kunt ook elke andere voedingsadapter gebruiken die je thuis hebt, zolang deze minimaal 1A levert.

![Voeding via kabel](/images/ultimatesensor-mini/power-by-cable.png)

## Stap 2: Verbinden met WiFi

Bij het opstarten zendt de UltimateSensor Mini een WiFi-hotspot uit met de naam 'ultimatesensor-mini' en het wachtwoord 'ultimatesensor-mini'. Verbind met deze hotspot en er verschijnt een pop-upvenster waarmee je je eigen WiFi-netwerk kunt selecteren en verbinden. Zorg ervoor dat je WiFi-netwerk een 2,4 GHz-netwerk is. Als de fallback-hotspot niet verschijnt, probeer dan een ander apparaat te gebruiken. Het kan tot een minuut duren voordat de WiFi zichtbaar wordt nadat het apparaat is ingeschakeld.

![Verbinden met WiFi](/images/ultimatesensor-mini/connect-wifi.png)

Opmerking: Wanneer je verbinding maakt met het fallback-netwerk, wordt de webinterface automatisch geopend. Als dat niet werkt, kun je ook handmatig naar [http://192.168.4.1/](http://192.168.4.1/) navigeren in je browser.

## Stap 3: Verbinden met Home Assistant

Zodra je verbonden bent met je thuis-WiFi-netwerk, zal Home Assistant automatisch de UltimateSensor Mini detecteren onder de sectie 'Apparaten & Services'. Als dit niet gebeurt, moet je het apparaat handmatig toevoegen. Zoek het IP-adres van de UltimateSensor Mini op in je router, ga vervolgens naar Home Assistant-instellingen -> Apparaten & Services. Klik op Integratie toevoegen, selecteer ESPHome en voer het IP-adres van het apparaat in. Het wordt dan toegevoegd.

![Verbinden met Home Assistant](/images/ultimatesensor-mini/connect-ha.png)

Na het verbinden met Home Assistant is je apparaat zichtbaar onder Home Assistant -> Instellingen -> Apparaten & Services -> zoek naar de ESPHome-integratie. Klik erop om je UltimateSensor Mini met al zijn entiteiten te zien.

## Stap 4: Configureer Apparaatssensoren & Spraakassistent

Let op: alle sensoren hebben minimaal 10 minuten nodig om op te starten, en de CO2-sensor kan tot 24 uur duren. De sensoren hebben mogelijk ook kalibratie nodig; raadpleeg de [kalibratiegids](calibration) voor instructies.

Om de spraakassistent-functie te gebruiken, moet je deze volledig configureren. Volg de stappen in onze [spraakassistent-gids](voice-assistant).

Vermijd direct zonlicht op de UltimateSensor Mini om onnauwkeurige metingen te voorkomen en het risico op schade aan de sensor te verminderen. We raden aan om de sensor op een kast te plaatsen of aan een muur te monteren op een hoogte tussen 1 en 2 meter. Lees meer in onze [gebruikershandleiding](usage).
