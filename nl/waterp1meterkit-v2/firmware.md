# Firmwarehandleiding voor WaterP1MeterKit V2

Welkom bij de Firmwarehandleiding voor de WaterP1MeterKit. Dit document biedt gedetailleerde instructies over hoe u de firmware van uw apparaat kunt bijwerken of wijzigen om de functionaliteit te verbeteren met extra functies zoals Power over Ethernet (PoE) en directe Ethernet-connectiviteit. De nieuwste firmware .bin- en .yaml-bestanden zijn te vinden op de [bijbehorende GitHub-pagina](https://github.com/smarthomeshop/waterp1meterkit).

## Firmwareopties

De WaterP1MeterKit wordt geleverd met standaard WiFi-firmware of Ethernet-firmware. Dit is afhankelijk van de geselecteerde optie tijdens het afrekenen. Op de productpagina kunt u kiezen tussen de opties "Met USB-C Adapter Set" en "Zonder USB-C Adapter Set". Deze keuze bepaalt welke firmware is geïnstalleerd:
- **Met USB-C Adapter Set**: De kit is standaard geconfigureerd voor WiFi-connectiviteit, en de Ethernet-poort is uitgeschakeld.
- **Zonder USB-C Adapter Set**: De kit is standaard geconfigureerd voor Ethernet (PoE)-connectiviteit.

Als u wilt schakelen tussen WiFi- of Ethernet-connectiviteit, moet een andere firmwareversie op uw apparaat worden geflasht.

### Omschakelen naar Ethernet (PoE) of WiFi Firmware

Om WiFi- of Ethernet-mogelijkheden (PoE) te gebruiken, moet u de juiste firmware op de WaterP1MeterKit flashen. Er zijn twee primaire methoden om dit te bereiken:

1. **Het apparaat adopteren in ESPHome:**
   - Navigeer naar ESPHome in uw Home Assistant-instelling.
   - Gebruik de functie "Adopteer" om de WaterP1MeterKit te integreren.
   - Selecteer vanuit het ESPHome-dashboard de WaterP1MeterKit en werk de bijbehorende YAML-configuratie bij.
   - In onze [GitHub-repository hier](https://github.com/smarthomeshop/waterp1meterkit/tree/main/waterp1meterkit-v2/), vindt u de YAML-configuratie voor WiFi of Ethernet. Selecteer het bestand `waterp1meterkit-ethernet/wifi.yaml`. Kopieer de YAML-code en plak deze in de apparaatconfiguratie op uw ESPHome-pagina.
   - Klik op Deploy om de software OTA op het apparaat te flashen. Let op dat na voltooiing, als u van WiFi naar Ethernet schakelt, het apparaat niet langer verbonden is met WiFi. Sluit het aan met een Ethernetkabel om het weer online te brengen.

2. **Flashen via USB-C:**
   - Sluit de WaterP1MeterKit aan op uw computer met een USB-C-kabel.
   - Download het `.bin`-bestand van onze [GitHub-repository hier](https://github.com/smarthomeshop/waterp1meterkit/tree/main/waterp1meterkit-v2/bin-files). Selecteer de juiste versie (`waterp1meterkit-v2-ethernet/wifiv*.bin`). Klik op het Download-pictogram rechtsboven om het bestand te downloaden (Download RAW-bestand).
   - Gebruik een flashing-tool zoals [ESPHome-Flasher](https://web.esphome.io/?dashboard_install) om de nieuwe firmware op de WaterP1MeterKit te uploaden.
   - Volg de instructies op het scherm om ervoor te zorgen dat de firmware correct is geïnstalleerd.
   - Let op dat na voltooiing, als u van WiFi naar Ethernet schakelt, het apparaat niet langer verbonden is met WiFi. Sluit het aan met een Ethernetkabel om het weer online te brengen.

**Opmerking:** Het flashen van nieuwe firmware kan mogelijk uw apparaatinstellingen verstoren, of u moet het apparaat opnieuw adopteren binnen Home Assistant.

## Firmware Changelog

Het up-to-date houden van uw WaterP1MeterKit met de nieuwste firmware is cruciaal voor optimale prestaties en beveiliging. Hieronder vindt u de changelog met details over updates, verbeteringen en bugfixes voor elke firmwareversie.

### Changelog:

- **Versie 1.1**
  - Datum: 14 juli 2024
  - Verbeteringen: Platform toegevoegd: esphome om te voldoen aan de nieuwste ESPHome versievereisten.

Voor extra hulp, sluit u aan bij onze [support chatserver](https://smarthomeshop.io/discord) voor persoonlijke ondersteuning.