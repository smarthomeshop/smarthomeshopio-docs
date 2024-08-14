# Installatiegids

## Uitpakken

Pak het pakket van de UltimateSensor uit en identificeer alle onderdelen. Je zou de volgende items moeten hebben:
- UltimateSensor
- USB-A naar USB-C kabel (3 meter)
- Voedingsadapter (Europees)

Optioneel (indien geselecteerd op de afrekenpagina):
- Wandmontage voor apparaatschroeven
- Wandmontage (voor apparaat)
- Wandmontage (voor muur)

![Uitpakken](/images/ultimatesensor/unboxing.png)

## Stap 1: Voeding via Kabel -OF- PoE

Sluit de UltimateSensor aan op een stroombron met de meegeleverde USB-C kabel en voedingsadapter. Let op: het apparaat wordt geleverd met een Europese USB-voedingsadapter. Als je buiten Europa woont, ontvang je nog steeds de adapter in de doos, maar je kunt ook elke andere voedingsadapter gebruiken die je thuis hebt, zolang deze ten minste 1A levert.

**Let op: het apparaat van stroom voorzien via PoE of het gebruiken van een Ethernetverbinding in plaats van WiFi werkt alleen als het apparaat is voorzien van de Ethernetfirmware. Alle versies van de UltimateSensor ondersteunen PoE als de Ethernetfirmware is geïnstalleerd. Om tussen de firmwareversies te wisselen, bezoek je de [Firmware-pagina](firmware).**

![Voeding via Kabel](/images/ultimatesensor/power-by-cable.png)

## Stap 2: Verbind met WiFi

Bij het opstarten zendt de UltimateSensor een WiFi-hotspot uit genaamd 'ultimatesensor' met het wachtwoord 'ultimatesensor'. Verbind met deze hotspot en er verschijnt een pop-upvenster waarmee je je eigen WiFi-netwerk kunt selecteren en verbinden. Zorg ervoor dat je WiFi-netwerk een 2,4 GHz netwerk is. Als de fallback-hotspot niet verschijnt, probeer dan een ander apparaat te gebruiken. Het kan tot één minuut duren voordat de WiFi zichtbaar wordt nadat het apparaat is ingeschakeld.

![Verbind met WiFi](/images/ultimatesensor/connect-wifi.png)

Let op: Wanneer je verbinding maakt met het fallback-netwerk, zou de webinterface automatisch moeten openen. Als dat niet werkt, kun je ook handmatig navigeren naar [http://192.168.4.1/](http://192.168.4.1/) in je browser.

## Stap 3: Verbind met Home Assistant

Zodra je verbonden bent met je thuis-WiFi-netwerk, zal Home Assistant de UltimateSensor automatisch detecteren onder de sectie 'Devices & Services'. Als dit niet gebeurt, moet je het apparaat handmatig toevoegen. Zoek het IP-adres van de UltimateSensor op in je router, ga dan naar Home Assistant-instellingen -> Apparaten & Diensten. Klik op Integratie Toevoegen, selecteer ESPHome en voer het IP-adres van het apparaat in. Het zal dan worden toegevoegd.

![Verbind met Home Assistant](/images/ultimatesensor/connect-ha.png)

Nadat je verbinding hebt gemaakt met Home Assistant, zal je apparaat zichtbaar zijn onder Home Assistant -> Instellingen -> Apparaten & Diensten -> zoek naar de ESPHome-integratie. Klik erop om je UltimateSensor te zien met al zijn entiteiten.

## Stap 4: Configureer Apparaatsensoren

Let op: alle sensoren hebben minimaal 10 minuten nodig om op te starten, en de CO2-sensor kan tot 24 uur of enkele dagen duren. De sensoren hebben mogelijk ook kalibratie nodig; raadpleeg de [kalibratiegids](calibration) voor instructies.

Plaats de UltimateSensor niet in direct zonlicht om onnauwkeurige metingen te voorkomen en het risico op beschadiging van de sensor te verkleinen. We raden aan om de sensor op een kast te plaatsen of aan een muur te monteren op een hoogte van tussen de 1 en 2 meter. Lees meer in onze [gebruiksgids](usage)

SmartHomeShop is een hobbygebaseerde webshop gewijd aan innovatieve slimme huisproducten. Let op, wij zijn niet verantwoordelijk voor de nauwkeurigheid van sensor metingen of toekomstige softwarewijzigingen door derden.