# Usage Guide

The P1MeterKit allows you to monitor your energy consumption in real-time through Home Assistant.

## Real-Time Monitoring

1. **Open Home Assistant** and navigate to **Settings**.
2. Go to **Devices & Services** and look for the **ESPHome** integration. Open the **ESPHome** integration.
3. Select the **P1MeterKit** device.
4. Here, you will find all the entities associated with the P1MeterKit, such as electricity and gas consumption.
5. If you are only using one of the sensors, you can disable the unused entities.

## Historical Data

To view historical energy data:

1. Navigate to the **History** section in Home Assistant.
2. Select the desired time period (hour, day, month, or year) and select the P1MeterKit entity to see your data over that period.

## Integrating with HA Energy Dashboard

1. **Open Home Assistant** and navigate to **Settings -> Dashboards**.
2. Go to the **Energy** dashboard.
3. Under **Electricity Consumption**, click on **Add Consumption**.
4. Select the P1MeterKit entity that corresponds to your electricity consumption.
5. Under **Return to Grid** (if applicable), add the entity for energy fed back to the grid.

<!-- For detailed instructions on integrating the P1MeterKit with the HA Energy Dashboard or DSMR-Reader, refer to the [Home Assistant documentation](https://www.home-assistant.io/integrations/esphome/) and the [DSMR-Reader documentation](https://dsmr-reader.readthedocs.io/). -->

By following these steps, you can effectively monitor and analyze your energy consumption using the P1MeterKit and Home Assistant.