# Voice Assistant Guide
De UltimateSensor Mini maakt integratie met spraakassistenten mogelijk, zodat u verschillende aspecten van uw slimme huis kunt bedienen via spraakopdrachten. Deze handleiding begeleidt u bij het installatieproces.

## Het instellen van de spraakassistent

1. **Initiële installatie**
   - Volg de instructies op de Home Assistant [voice control pagina](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) om ervoor te zorgen dat uw Home Assistant instantie klaar is voor spraakbesturing. Installeer de volgende add-ons: openWakeWord, Piper en Whisper.
   - Na het installeren van deze add-ons, herstart Home Assistant. Schakel de drie geïnstalleerde add-ons in en ga naar **Home Assistant -> Instellingen -> Integraties**. Selecteer **Integratie toevoegen** en voeg elk van de drie genoemde add-ons toe als integraties. Ga verder naar de volgende stap.

2. **Maak een spraakassistent aan voor de UltimateSensor Mini**
   - Ga in Home Assistant naar **Instellingen -> Spraakassistent**. Klik op **Assistent toevoegen**. Geef het een naam (bijv. UltimateSensor Mini Voice) en selecteer de taal. Kies Home Assistant als gespreksagent en selecteer dezelfde taal. 
   Voor spraak-naar-tekst, selecteer faster-whisper. 
   Voor tekst-naar-spraak, selecteer Piper, dezelfde taal en een stemmodel. 
   Selecteer vervolgens bij Wake Word openWakeWord en kies uw voorkeurs-wake word. Dit is het woord dat u tegen de UltimateSensor Mini zult zeggen om het te activeren en te laten luisteren.

3. **Configureer spraakopdrachten op de UltimateSensor Mini**
   - Ga in Home Assistant naar **Instellingen > Apparaten & Services > ESPHome**.
   - Selecteer het UltimateSensor Mini-apparaat. Ga naar het configuratiegedeelte. Hier ziet u de Assistant-pipeline, die de geselecteerde pipeline is (u kunt dit bewerken in **Home Assistant -> Instellingen -> Spraakassistenten**).

## Problemen oplossen

1. **Spraakassistent werkt niet**
   - Zorg ervoor dat de spraakassistent volledig is geconfigureerd. Volg de gedetailleerde stappen in deze handleiding en op de [Home Assistant voice control pagina](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/).
   - Controleer of de microfoon en luidspreker correct zijn aangesloten en functioneren.
   - Controleer of de spraakassistentinstellingen in Home Assistant correct zijn geconfigureerd.
   - Zorg ervoor dat de optie **Gebruik Wake Word** is ingeschakeld in de UltimateSensor Mini-instellingen (via ESPHome in instellingen).
   - Wanneer u het wake word dat is geconfigureerd in stap 2 uitspreekt, zou het apparaat moeten luisteren, aangegeven door een lampje op de UltimateSensor Mini. De entiteit **Assistent werkt** zou bezet moeten zijn. Als het niet voor de tweede keer reageert, probeer dan de optie **Gebruik Wake Word** uit en weer aan te zetten.

## Extra bronnen

- Voor uitgebreide details, raadpleeg de [Home Assistant voice control documentatie](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/).
- Sluit u aan bij onze [Discord server](https://smarthomeshop.io/discord) voor community-ondersteuning en verdere hulp.
