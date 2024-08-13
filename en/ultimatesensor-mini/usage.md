# Usage Guide

The UltimateSensor Mini allows you to monitor various environmental factors in real-time through Home Assistant.

## Real-Time Monitoring

1. **Open Home Assistant** and navigate to **Settings**.
2. Go to **Devices & Services** and look for the **ESPHome** integration. Open the **ESPHome** integration.
3. Select the **UltimateSensor Mini** device.
4. Here, you will find all the entities associated with the UltimateSensor Mini, such as CO2 levels, temperature, humidity, light intensity, VOCs, and room occupancy.
5. If you are not using certain sensors or features, you can disable the unused entities.

## Historical Data

To view historical environmental data:

1. Navigate to the **History** section in Home Assistant.
2. Select the desired time period (hour, day, month, or year) and select the UltimateSensor Mini entity to see your data over that period.

## Calibration

Note that all sensors need at least 10 minutes to start up, and the CO2 sensor may take up to 24 hours. The sensors may also need calibration. Follow the instructions on the [calibration page](calibration) to ensure accurate measurements.

## Voice Assistant

To use the voice assistant feature, you need to fully configure it. This involves several steps, including setting up voice commands and integrating with your preferred voice assistant. Follow the detailed steps in our [voice assistant guide](voice-assistant).