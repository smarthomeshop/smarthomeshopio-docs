# Firmware Guide for UltimateSensor

Welcome to the Firmware Guide for the UltimateSensor. This document provides detailed instructions on how to update or change the firmware of your device to enhance its functionality with additional features such as Power over Ethernet (PoE) and direct Ethernet connectivity. The latest firmware .bin and .yaml files can be found on the [corresponding GitHub page](https://github.com/smarthomeshop/ultimatesensor).

## Firmware Options

The UltimateSensor is shipped with standard WiFi firmware, which facilitates quick and easy setup for wireless networks. However, if you require Ethernet connectivity or wish to utilize PoE for both power and data transmission, a different firmware version needs to be flashed onto your device.

### Switching to Ethernet (PoE) Firmware

To utilize Ethernet capabilities or PoE, you must flash the appropriate firmware onto the UltimateSensor. There are two primary methods to accomplish this:

1. **Adopting the Device in ESPHome:**
   - Navigate to ESPHome in your Home Assistant setup.
   - Use the "Adopt" feature to integrate the UltimateSensor.
   - From the ESPHome dashboard, select the UltimateSensor and update the corresponding YAML configuration.
   - On our [GitHub repository here](https://github.com/smarthomeshop/ultimatesensor/tree/main/ultimatesensor-v1/), find the YAML configuration for using the device with an Ethernet cable. Note that if your device has the Particulate Matter Sensor (PM), you need the complete version; otherwise, use the basic version. Select the file `ultimatesensor-ethernet-basic/complete-software.yaml`. Copy the YAML code and paste this into the device configuration on your ESPHome page.
   - Click Deploy to flash the software OTA on the device. Note that after completion, the device will no longer be connected to WiFi. Please connect it with an Ethernet cable to bring it back online.

2. **Flashing via USB-C:**
   - Connect the UltimateSensor to your computer using a USB-C cable.
   - Download the `.bin` file from our [GitHub repository here](https://github.com/smarthomeshop/ultimatesensor/tree/main/ultimatesensor-v1/bin). Note that if your device has the Particulate Matter Sensor (PM), you need the complete version; otherwise, use the basic version. Select the appropriate version (`ultimatesensor-ethernet-basic/complete-softwarev*.bin`). Click the top-right Download icon to download the file (Download RAW file).
   - Use a flashing tool such as [ESPHome-Flasher](https://web.esphome.io/?dashboard_install) to upload the new firmware to the UltimateSensor.
   - Follow the on-screen instructions to ensure the firmware is correctly installed.
   - You can now use the Ethernet port on the UltimateSensor for your connectivity.

**Note:** Flashing new firmware can potentially disrupt your device settings, or you may need to readopt the device inside Home Assistant.

## Firmware Changelog

Keeping your UltimateSensor updated with the latest firmware is crucial for optimal performance and security. Below is the changelog detailing updates, improvements, and bug fixes for each firmware version.

### Changelog:

- **Version 1.1**
  - Date: Jul 22, 2024
  - Enhancements: Added platform: esphome to comply with the latest ESPHome version requirements.

For additional help, please join our [support chat server](https://smarthomeshop.io/discord) for personal support.