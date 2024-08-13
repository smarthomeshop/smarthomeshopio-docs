# Calibration Guide for UltimateSensor Mini

Calibrating your UltimateSensor Mini ensures accurate measurements of CO2 levels and other environmental parameters. Follow these steps to properly calibrate your sensor.

## CO2 Sensor Calibration

The UltimateSensor Mini uses the SCD41.

**SCD41 Specifications**
- **CO2 Measurement Range**: 400 to 5,000 ppm
- **Temperature Measurement Range**: -10 to 60 °C (14 to 140 °F)
- **Humidity Measurement Range**: 0 to 100 %RH

**CO2 Accuracy Specifications:**
- **400-1,000 ppm**: ±(50 ppm + 2.5% of reading)
- **1,001-2,000 ppm**: ±(50 ppm + 3% of reading)
- **2,001-5,000 ppm**: ±(40 ppm + 5% of reading)

1. **Automatic Baseline Calibration (ABC)**
   - The sensor uses an Automatic Baseline Calibration (ABC) algorithm to self-calibrate over time. Ensure the sensor is exposed to fresh air (400 ppm CO2) regularly for the ABC to function correctly.

2. **Manual Calibration**
   - If you need to calibrate the sensor manually, follow these steps:

     ### Step-by-Step Manual Calibration via Home Assistant

     1. **Prepare the Environment & Ultimate Sensor Mini**
        - Place the Ultimate Sensor Mini outdoors on a clear day within range of your WiFi network (note that the sensor is not waterproof). Power on the UltimateSensor Mini and wait at least 5 minutes before continuing to the next step.

     2. **Access Home Assistant**
        - Open Home Assistant in your web browser or the mobile app.

     3. **Navigate to ESPHome Integration**
        - Go to **Settings**.
        - Select **Devices & Services**.
        - Find and open the **ESPHome** integration.

     4. **Select UltimateSensor Mini**
        - Locate the UltimateSensor Mini device from the list of ESPHome devices.
        - Click on the device to open its settings.

     5. **Calibrate the CO2 Sensor**
        - Press the Calibrate CO2 button in the **Controls** section. The sensor will start to calibrate. Let the calibration process run for at least 1 minute. Note: The sensor is calibrated to 419 ppm. As of April 2022, the average fresh air CO2 concentration is 419 ppm.

     6. **Verify Calibration**
        - After calibrating, verify that the CO2 readings are accurate.
        - You may need to repeat the process or adjust the settings if the readings are not correct.


#### CO2 Levels and Health Implications

The levels of CO2 in the air and potential health effects are:
- **350-450 ppm**: Healthy outdoor air level.
- **600 ppm**: Healthy indoor air level.
- **800 ppm**: Acceptable level for indoor air quality.
- **1,000 ppm**: Ventilation recommended.
- **1,200 ppm**: Ventilation necessary.
- **2,000 ppm**: Negative health effects, such as drowsiness and poor air quality.
- **5,000 ppm**: Dangerous with long-term exposure.

<!-- ## Temperature and Humidity Sensor Calibration

1. **Temperature Calibration**
   - Ensure the sensor is placed in a stable environment with a known temperature.
   - Adjust the temperature offset in the sensor’s settings to match the known temperature.

2. **Humidity Calibration**
   - Place the sensor in an environment with a known humidity level.
   - Adjust the humidity offset in the sensor’s settings to match the known humidity.

## Light Intensity Sensor Calibration

1. **Calibration Steps**
   - Use a lux meter to measure the light intensity in the sensor’s environment.
   - Adjust the light sensor’s readings in the settings to match the lux meter reading.

## VOC and Particulate Matter Sensor Calibration

1. **VOC Calibration**
   - Place the sensor in an environment with known VOC levels.
   - Use the sensor's settings to adjust the VOC readings accordingly.

2. **Particulate Matter Calibration**
   - Use a reliable particulate matter reference device to measure the PM levels.
   - Adjust the sensor’s PM readings in the settings to match the reference device. -->

## Additional Notes

- **Calibration Frequency**
  - Regular calibration ensures ongoing accuracy. Perform manual calibration every 6-12 months or after relocating the sensor.

- **Environmental Factors**
  - Avoid placing the sensor in direct sunlight or areas with extreme temperatures and humidity for prolonged periods.

For detailed instructions, refer to the ESPHome or Home Assistant documentation on sensor calibration. If you encounter issues, join our [Discord community](https://smarthomeshop.io/discord) for support.

By following these calibration steps, you can ensure that your UltimateSensor Mini provides accurate and reliable environmental data for your smart home system.