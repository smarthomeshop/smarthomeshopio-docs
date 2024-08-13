# Usage Guide

The WaterFlowKit allows you to monitor your water flow and temperature in real-time through Home Assistant.

## Real-Time Monitoring

1. **Open Home Assistant** and navigate to **Settings**.
2. Go to **Devices & Services** and look for **ESPHome** integration. Open the **ESPHome** integration.
3. Select the **WaterFlowKit** device.
4. Here, you will find all the entities associated with the WaterFlowKit, such as water flow rate and temperature (if applicable).
5. If you are only using one of the two sensors or do not have a temperature sensor, you can disable the unused entities.

## Historical Data

To view historical water flow and temperature data:

1. Navigate to the **History** section in Home Assistant.
2. Select the desired time period (hour, day, month, or year) and select the waterflowkit entity to see your data over that period.