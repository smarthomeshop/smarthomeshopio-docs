# Voice Assistant Guide

The UltimateSensor Mini allows integration with voice assistants, enabling you to control various aspects of your smart home through voice commands. This guide will walk you through the setup process.

## Setting up the Voice Assistant

1. **Initial Setup**
   - Follow the instructions on the Home Assistant [voice control page](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/) to ensure your Home Assistant instance is ready for voice control. Install the following add-ons: openWakeWord, Piper, and Whisper.
   - After installing these add-ons, reboot Home Assistant. Enable the three installed add-ons and go to **Home Assistant -> Settings -> Integrations**. Select **Add Integration** and add each of the three named add-ons as integrations. Continue to the next step.

2. **Create a Voice Assistant for the UltimateSensor Mini**
   - In Home Assistant, navigate to **Settings -> Voice Assistant**. Click on **Add Assistant**. Give it a name (e.g., UltimateSensor Mini Voice) and select the language. Choose Home Assistant as the conversation agent and select the same language. 
   For speech-to-text, select faster-whisper. 
   For text-to-speech, select Piper, the same language, and a voice model. 
   Then, in Wake Word, select openWakeWord and choose your preferred wake word. This is the word you will say to the UltimateSensor Mini to trigger it to listen.

3. **Configure Voice Commands on the UltimateSensor Mini**
   - In Home Assistant, navigate to **Settings > Devices & Services > ESPHome**.
   - Select the UltimateSensor Mini device. Go to the configuration section. Here you will see the Assistant-pipeline, which is the selected pipeline (you can edit this in **Home Assistant -> Settings -> Voice Assistants**).

## Troubleshooting

1. **Voice Assistant Not Working**
   - Ensure the voice assistant has been fully configured. Follow the detailed steps in this guide and the [Home Assistant voice control page](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/).
   - Check if the microphone and speaker are properly connected and functioning.
   - Verify that the voice assistant settings in Home Assistant are correctly configured.
   - Ensure that the **Use Wake Word** option is enabled in the UltimateSensor Mini settings (via ESPHome in settings).
   - When you say the wake word configured in step 2, the device should listen, indicated by a light on the UltimateSensor Mini. The entity **Assistant working** should turn busy. If it does not respond a second time, try toggling the **Use Wake Word** option off and on.

## Additional Resources

- For comprehensive details, refer to the [Home Assistant voice control documentation](https://www.home-assistant.io/voice_control/voice_remote_local_assistant/).
- Join our [Discord server](https://smarthomeshop.io/discord) for community support and further assistance.