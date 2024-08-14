# Firmware Guide for UltimateSensor Mini

Welcome to the Firmware Guide for the UltimateSensor Mini. This document provides detailed instructions on how to update or change the firmware of your device to enhance its functionality with additional features. The latest firmware .bin and .yaml files can be found on the [corresponding GitHub page](https://github.com/smarthomeshop/ultimatesensor-mini).

### Reflashing Firmware

To reflash the firmware on the UltimateSensor Mini. There are two primary methods to accomplish this:

1. **Adopting the Device in ESPHome:**
   - Navigate to ESPHome in your Home Assistant setup.
   - Use the "Adopt" feature to integrate the UltimateSensor.
   - From the ESPHome dashboard, select the UltimateSensor Mini and update the corresponding YAML configuration.
   - On our [GitHub repository here](https://github.com/smarthomeshop/ultimatesensor-mini/tree/main/ultimatesensor-mini-v1), find the YAML configuration. Note that if your device has the Particulate Matter Sensor (PM), you need the complete version; otherwise, use the basic version. Select the file `ultimatesensor-mini-basic/complete-software.yaml`. Copy the YAML code and paste this into the device configuration on your ESPHome page.
   - Click Deploy to flash the software OTA on the device.

2. **Flashing via USB-C:**
   - Connect the UltimateSensor Mini to your computer using a USB-C cable.
   - Download the `.bin` file from our [GitHub repository here](https://github.com/smarthomeshop/ultimatesensor-mini/tree/main/ultimatesensor-mini-v1/bin). Note that if your device has the Particulate Matter Sensor (PM), you need the complete version; otherwise, use the basic version. Select the appropriate version (`ultimatesensor-mini-basic/complete-softwarev*.bin`). Click the top-right Download icon to download the file (Download RAW file).
   - Use a flashing tool such as [ESPHome-Flasher](https://web.esphome.io/?dashboard_install) to upload the new firmware to the UltimateSensor Mini.
   - Follow the on-screen instructions to ensure the firmware is correctly installed.

**Note:** Flashing new firmware can potentially disrupt your device settings, or you may need to readopt the device inside Home Assistant.

## Firmware Changelog

Keeping your UltimateSensor Mini updated with the latest firmware is crucial for optimal performance and security. Below is the changelog detailing updates, improvements, and bug fixes for each firmware version.

### Changelog:

- **Version 1.1**
  - Date: Jun 24, 2024
  - Enhancements: Added platform: esphome to comply with the latest ESPHome version requirements.

For additional help, please join our [support chat server](https://smarthomeshop.io/discord) for personal support.