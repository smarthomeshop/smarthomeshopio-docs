# Usage Guide

The UltimateSensor allows you to monitor various environmental factors in real-time through Home Assistant.

## Real-Time Monitoring

1. **Open Home Assistant** and navigate to **Settings**.
2. Go to **Devices & Services** and look for the **ESPHome** integration. Open the **ESPHome** integration.
3. Select the **UltimateSensor** device.
4. Here, you will find all the entities associated with the UltimateSensor, such as CO2 levels, temperature, humidity, light intensity, VOCs, and room occupancy.
5. If you are not using certain sensors or features, you can disable the unused entities.

## Historical Data

To view historical environmental data:

1. Navigate to the **History** section in Home Assistant.
2. Select the desired time period (hour, day, month, or year) and select the UltimateSensor entity to see your data over that period.

## Calibration

Note that all sensors need at least 10 minutes to start up, and the CO2 sensor may take up to 24 hours. The sensors may also need calibration. Follow the instructions on the [calibration page](calibration) to ensure accurate measurements.

## Placement of Ultimate Sensor

To ensure accurate readings and prevent damage:
- Avoid placing the UltimateSensor in direct sunlight. Prolonged exposure can cause the sensor’s casing to yellow, a condition not covered under warranty.
- We recommend positioning the UltimateSensor on a cabinet or mounting it on a wall at a height between 1 and 2 meters.

## Inaccurate measurement of sensors

If sensors display inaccurate readings, they may require recalibration or adjustments to their offsets. Detailed instructions can be found on the [calibration page](calibration). Note: We are not responsible for inaccuracies in readings from third-party sensors or for changes in sensor behavior due to software updates by third parties.