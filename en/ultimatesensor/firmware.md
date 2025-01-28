# Firmware Guide for UltimateSensor

Welcome to the Firmware Guide for the UltimateSensor. This document provides detailed instructions on how to update or change the firmware of your device to enhance its functionality with additional features such as Power over Ethernet (PoE) and direct Ethernet connectivity. The latest firmware .bin and .yaml files can be found on the [corresponding GitHub page](https://github.com/smarthomeshop/ultimatesensor).

## Firmware Options

The UltimateSensor is shipped with standard WiFi firmware, which facilitates quick and easy setup for wireless networks. However, if you require Ethernet connectivity or wish to utilize PoE for both power and data transmission, a different firmware version needs to be flashed onto your device.

### Switching to Ethernet (PoE) Firmware

To utilize Ethernet capabilities or PoE, you must flash the appropriate firmware onto the UltimateSensor. First connect the device to WiFi and then flash the Ethernet firmware wirelessly using the ESPHome web interface OTA (over the air).

1. **Adopting the Device in ESPHome:**
   - Navigate to ESPHome in your Home Assistant setup.
   - Use the "Adopt" feature to integrate the UltimateSensor.
   - From the ESPHome dashboard, select the UltimateSensor and update the corresponding YAML configuration.
   - On our [GitHub repository here](https://github.com/smarthomeshop/ultimatesensor/tree/main/ultimatesensor-v1/), find the YAML configuration for using the device with an Ethernet cable. Note that if your device has the Particulate Matter Sensor (PM), you need the complete version; otherwise, use the basic version. Select the file `ultimatesensor-ethernet-basic/complete-software.yaml`. Copy the YAML code and paste this into the device configuration on your ESPHome page.
   - Click Deploy to flash the software OTA on the device. Note that after completion, the device will no longer be connected to WiFi. Please connect it with an Ethernet cable to bring it back online.

### Flashing via USB-C (Advanced users only):

This method should only be used as a last resort when other methods fail or a factory reset is needed.
   
Steps to prepare the device:
- Locate the small cutout at the bottom of the case designed for a flat screwdriver
- Carefully open the case using the cutout (the case uses click-connections, no screws)
- On the main PCB, locate the blue LD2450 motion sensor module
- Gently remove the blue LD2450 sensor from front side ofthe main PCB, When removing the sensor, be careful not to damage the PCB or other components. After removing the LD2450 sensor the board is ready to be flashed and is in Boot mode.

Flashing process:
- Connect the UltimateSensor to your computer using a USB-C cable
- Visit [ESPHome-Flasher web interface](https://web.esphome.io/?dashboard_install)
- Download the appropriate `.bin` file from our [GitHub repository](https://github.com/smarthomeshop/ultimatesensor/tree/main/ultimatesensor-v1/bin):
   * For devices with PM sensor: `ultimatesensor-ethernet-complete-softwarev1.1.bin`
   * For devices without PM sensor: `ultimatesensor-ethernet-basic-softwarev1.1.bin`
- Select the downloaded .bin file in the ESPHome web flasher
- Follow the flashing process in the web interface

After flashing:
- A red LED should start blinking, indicating successful flashing
- Reassemble the device by carefully replacing the LD2450 sensor
- Close the case, ensuring all click-connections are secure
- Connect the device using an Ethernet cable to a network with DHCP enabled (avoid VLANs or firewall rules initially)
- The device should appear in your DHCP client list

**Important:** This process requires careful handling of the device components. If you're not comfortable with opening electronic devices, please consider using the OTA update method or seeking assistance on our [support chat server](https://smarthomeshop.io/discord).

## Firmware Changelog

Keeping your UltimateSensor updated with the latest firmware is crucial for optimal performance and security. Below is the changelog detailing updates, improvements, and bug fixes for each firmware version.

### Changelog:

- **Version 1.1**
  - Date: Jul 22, 2024
  - Enhancements: Added platform: esphome to comply with the latest ESPHome version requirements.

For additional help, please join our [support chat server](https://smarthomeshop.io/discord) for personal support.