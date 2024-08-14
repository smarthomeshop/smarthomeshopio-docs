# Firmwarehandleiding voor UltimateSensor

Welkom bij de Firmwarehandleiding voor de UltimateSensor. Dit document biedt gedetailleerde instructies over hoe u de firmware van uw apparaat kunt bijwerken of wijzigen om de functionaliteit te verbeteren met extra functies zoals Power over Ethernet (PoE) en directe Ethernet-connectiviteit. De nieuwste firmware .bin- en .yaml-bestanden zijn te vinden op de [bijbehorende GitHub-pagina](https://github.com/smarthomeshop/ultimatesensor).

## Firmwareopties

De UltimateSensor wordt geleverd met standaard WiFi-firmware, wat zorgt voor een snelle en eenvoudige installatie voor draadloze netwerken. Als u echter Ethernet-connectiviteit nodig heeft of PoE wilt gebruiken voor zowel stroom als gegevensoverdracht, moet een andere firmwareversie op uw apparaat worden geflasht.

### Omschakelen naar Ethernet (PoE) Firmware

Om Ethernet-mogelijkheden of PoE te gebruiken, moet u de juiste firmware op de UltimateSensor flashen. Er zijn twee primaire methoden om dit te bereiken:

1. **Het apparaat adopteren in ESPHome:**
   - Navigeer naar ESPHome in uw Home Assistant-instelling.
   - Gebruik de functie "Adopteer" om de UltimateSensor te integreren.
   - Selecteer vanuit het ESPHome-dashboard de UltimateSensor en werk de bijbehorende YAML-configuratie bij.
   - Op onze [GitHub-repository hier](https://github.com/smarthomeshop/ultimatesensor/tree/main/ultimatesensor-v1/), vindt u de YAML-configuratie voor het gebruik van het apparaat met een Ethernetkabel. Houd er rekening mee dat als uw apparaat de Fijnstofsensor (PM) heeft, u de complete versie nodig heeft; anders gebruikt u de basisversie. Selecteer het bestand `ultimatesensor-ethernet-basic/complete-software.yaml`. Kopieer de YAML-code en plak deze in de apparaatconfiguratie op uw ESPHome-pagina.
   - Klik op Deploy om de software OTA op het apparaat te flashen. Let op dat het apparaat na voltooiing niet langer is verbonden met WiFi. Sluit het aan met een Ethernetkabel om het weer online te brengen.

2. **Flashen via USB-C:**
   - Sluit de UltimateSensor aan op uw computer met een USB-C-kabel.
   - Download het `.bin`-bestand van onze [GitHub-repository hier](https://github.com/smarthomeshop/ultimatesensor/tree/main/ultimatesensor-v1/bin). Houd er rekening mee dat als uw apparaat de Fijnstofsensor (PM) heeft, u de complete versie nodig heeft; anders gebruikt u de basisversie. Selecteer de juiste versie (`ultimatesensor-ethernet-basic/complete-softwarev*.bin`). Klik op het Download-pictogram rechtsboven om het bestand te downloaden (Download RAW-bestand).
   - Gebruik een flashing-tool zoals [ESPHome-Flasher](https://web.esphome.io/?dashboard_install) om de nieuwe firmware op de UltimateSensor te uploaden.
   - Volg de instructies op het scherm om ervoor te zorgen dat de firmware correct is geïnstalleerd.
   - U kunt nu de Ethernet-poort op de UltimateSensor gebruiken voor uw connectiviteit.

**Opmerking:** Het flashen van nieuwe firmware kan mogelijk uw apparaatinstellingen verstoren, of u moet het apparaat opnieuw adopteren binnen Home Assistant.

## Firmware Changelog

Het up-to-date houden van uw UltimateSensor met de nieuwste firmware is cruciaal voor optimale prestaties en beveiliging. Hieronder vindt u de changelog met details over updates, verbeteringen en bugfixes voor elke firmwareversie.

### Changelog:

- **Versie 1.1**
  - Datum: 22 juli 2024
  - Verbeteringen: Platform toegevoegd: esphome om te voldoen aan de nieuwste ESPHome versievereisten.

Voor extra hulp, sluit u aan bij onze [support chatserver](https://smarthomeshop.io/discord) voor persoonlijke ondersteuning.