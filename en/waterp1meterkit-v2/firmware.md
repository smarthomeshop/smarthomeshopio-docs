# Firmware Guide for WaterP1MeterKit V2
Welcome to the Firmware Guide for the WaterP1MeterKit. This document provides detailed instructions on how to update or change the firmware of your device to enhance its functionality with additional features such as Power over Ethernet (PoE) and direct Ethernet connectivity. The latest firmware .bin and .yaml files can be found on the [corresponding GitHub page](https://github.com/smarthomeshop/waterp1meterkit).

## Firmware Options

The WaterP1MeterKit is shipped with standard WiFi firmware or Ethernet firmware. This depends on the selected option during checkout. On the product page, you can choose between the "With USB-C Adapter Set" and "Without USB-C Adapter Set" options. This choice determines which firmware is installed:
With USB-C Adapter Set: The kit is configured for WiFi connectivity by default, and the Ethernet port is disabled.
Without USB-C Adapter Set: The kit is configured for Ethernet (PoE) connectivity by default.
If you want to switch between Wifi or Ethernet connectivity, a different firmware version needs to be flashed onto your device.

### Switching to Ethernet (PoE) or WiFi Firmware

To utilize WiFi or Ethernet capabilities or PoE, you must flash the appropriate firmware onto the WaterP1MeterKit. There are two primary methods to accomplish this:

1. **Adopting the Device in ESPHome:**
   - Navigate to ESPHome in your Home Assistant setup.
   - Use the "Adopt" feature to integrate the WaterP1MeterKit.
   - From the ESPHome dashboard, select the WaterP1MeterKit and update the corresponding YAML configuration.
   - On our [GitHub repository here](https://github.com/smarthomeshop/waterp1meterkit/tree/main/waterp1meterkit-v2/), find the YAML configuration for WiFi or Ethernet. Select the file `waterp1meterkit-ethernet/wifi.yaml`. Copy the YAML code and paste this into the device configuration on your ESPHome page.
   - Click Deploy to flash the software OTA on the device. Note that after completion if you switch from WiFi to Ethernet, the device will no longer be connected to WiFi. Please connect it with an Ethernet cable to bring it back online.

2. **Flashing via USB-C:**
   - Connect the WaterP1MeterKit to your computer using a USB-C cable.
   - Download the `.bin` file from our [GitHub repository here](https://github.com/smarthomeshop/waterp1meterkit/tree/main/waterp1meterkit-v2/bin-files).Select the appropriate version (`waterp1meterkit-v2-ethernet/wifiv*.bin`). Click the top-right Download icon to download the file (Download RAW file).
   - Use a flashing tool such as [ESPHome-Flasher](https://web.esphome.io/?dashboard_install) to upload the new firmware to the WaterP1MeterKit.
   - Follow the on-screen instructions to ensure the firmware is correctly installed.
   - Note that after completion if you switch from WiFi to Ethernet, the device will no longer be connected to WiFi. Please connect it with an Ethernet cable to bring it back online.

**Note:** Flashing new firmware can potentially disrupt your device settings, or you may need to readopt the device inside Home Assistant.

## Firmware Changelog

Keeping your WaterP1MeterKit updated with the latest firmware is crucial for optimal performance and security. Below is the changelog detailing updates, improvements, and bug fixes for each firmware version.

### Changelog:

- **Version 1.1**
  - Date: Jul 14, 2024
  - Enhancements: Added platform: esphome to comply with the latest ESPHome version requirements.

For additional help, please join our [support chat server](https://smarthomeshop.io/discord) for personal support.
