# Firmwarehandleiding voor UltimateSensor Mini

Welkom bij de Firmwarehandleiding voor de UltimateSensor Mini. Dit document biedt gedetailleerde instructies over hoe u de firmware van uw apparaat kunt bijwerken of wijzigen om de functionaliteit te verbeteren met extra functies. De nieuwste firmware .bin- en .yaml-bestanden zijn te vinden op de [bijbehorende GitHub-pagina](https://github.com/smarthomeshop/ultimatesensor-mini).

### Firmware Opnieuw Flashen

Om de firmware op de UltimateSensor Mini opnieuw te flashen, zijn er twee primaire methoden:

1. **Het apparaat adopteren in ESPHome:**
   - Navigeer naar ESPHome in uw Home Assistant-instelling.
   - Gebruik de functie "Adopteer" om de UltimateSensor te integreren.
   - Selecteer vanuit het ESPHome-dashboard de UltimateSensor Mini en werk de bijbehorende YAML-configuratie bij.
   - In onze [GitHub-repository hier](https://github.com/smarthomeshop/ultimatesensor-mini/tree/main/ultimatesensor-mini-v1), vindt u de YAML-configuratie. Houd er rekening mee dat als uw apparaat de Fijnstofsensor (PM) heeft, u de complete versie nodig heeft; anders gebruikt u de basisversie. Selecteer het bestand `ultimatesensor-mini-basic/complete-software.yaml`. Kopieer de YAML-code en plak deze in de apparaatconfiguratie op uw ESPHome-pagina.
   - Klik op Deploy om de software OTA op het apparaat te flashen.

2. **Flashen via USB-C:**
   - Sluit de UltimateSensor Mini aan op uw computer met een USB-C-kabel.
   - Download het `.bin`-bestand van onze [GitHub-repository hier](https://github.com/smarthomeshop/ultimatesensor-mini/tree/main/ultimatesensor-mini-v1/bin). Houd er rekening mee dat als uw apparaat de Fijnstofsensor (PM) heeft, u de complete versie nodig heeft; anders gebruikt u de basisversie. Selecteer de juiste versie (`ultimatesensor-mini-basic/complete-softwarev*.bin`). Klik op het Download-pictogram rechtsboven om het bestand te downloaden (Download RAW-bestand).
   - Gebruik een flashing-tool zoals [ESPHome-Flasher](https://web.esphome.io/?dashboard_install) om de nieuwe firmware op de UltimateSensor Mini te uploaden.
   - Volg de instructies op het scherm om ervoor te zorgen dat de firmware correct is geïnstalleerd.

**Opmerking:** Het flashen van nieuwe firmware kan mogelijk uw apparaatinstellingen verstoren, of u moet het apparaat opnieuw adopteren binnen Home Assistant.

## Firmware Changelog

Het up-to-date houden van uw UltimateSensor Mini met de nieuwste firmware is cruciaal voor optimale prestaties en beveiliging. Hieronder vindt u de changelog met details over updates, verbeteringen en bugfixes voor elke firmwareversie.

### Changelog:

- **Versie 1.1**
  - Datum: 24 juni 2024
  - Verbeteringen: Platform toegevoegd: esphome om te voldoen aan de nieuwste ESPHome versievereisten.

Voor extra hulp, sluit u aan bij onze [support chatserver](https://smarthomeshop.io/discord) voor persoonlijke ondersteuning.