# Troubleshooting Guide

If you encounter any issues with the UltimateSensor, try the following steps:

## General Troubleshooting Steps

1. **Ensure All Cables Are Securely Connected**
   - Verify that the USB-C power cable is securely connected to both the UltimateSensor and the power adapter.

2. **Check the Power Source**
   - Make sure the power adapter is plugged into a working electrical outlet.
   - Ensure the power cable is not damaged and is functioning properly.

3. **Restart the UltimateSensor**
   - Unplug the power cable from the UltimateSensor, wait for 10 seconds, and then plug it back in.

4. **Restart Home Assistant**
   - Sometimes a simple restart of Home Assistant can resolve connectivity or integration issues. Navigate to **Settings > System > Restart** within Home Assistant.

5. **Update Home Assistant**
   - Ensure you are running the latest version of Home Assistant. Go to **Settings > System > Updates** to check for and install any available updates.

## Switching between WiFi and Ethernet (PoE) Connection

The UltimateSensor is designed to support both WiFi and Ethernet (PoE) connections, providing versatility depending on your installation preferences. To successfully switch between these connection types, specific firmware adjustments are necessary:

1. **Identify Installed Firmware**: 
   - Check the LED status on the Ethernet port of the UltimateSensor:
     - A **yellow or green LED** indicates that Ethernet firmware is currently active.
     - No LED suggests the device is running on WiFi firmware.

2. **Reflashing Firmware**:
   - If you need to switch from WiFi to Ethernet or vice versa, you must reflash the device with the appropriate firmware.
   - Detailed step-by-step instructions for reflashing are available on our [firmware page](firmware). This page will guide you through downloading the correct `.bin` file and using a flashing tool to update your UltimateSensor.

For users experiencing difficulties with WiFi connections see the section below.

## WiFi Connectivity Issues

1. **Check WiFi Signal Strength**
   - Ensure that the UltimateSensor is within range of your WiFi router. Weak signal strength can cause connectivity issues.
   - If necessary, move the UltimateSensor closer to the router or use a WiFi extender to improve signal strength.

2. **Reconnect to WiFi**
   - If the UltimateSensor is not connecting to your WiFi network, try reconnecting:
     1. Power off the UltimateSensor.
     2. Power it back on and connect to the WiFi hotspot named 'ultimatesensor-mini' with the password 'ultimatesensor-mini'.
     3. Follow the on-screen instructions to select and connect to your WiFi network.

3. **Check WiFi Network Configuration**
   - Ensure your WiFi network is set to 2.4 GHz, as the UltimateSensor does not support 5 GHz networks.

If the UltimateSensor fails to connect to a previously saved WiFi network, it will automatically revert to a factory fallback WiFi hotspot after one minute. This fallback hotspot is named ‘ultimatesensor’ with the password ‘ultimatesensor’. You can connect to this network to reconfigure your desired WiFi settings. Simply open the WiFi settings on your device, connect to the ‘ultimatesensor’ network, and follow the on-screen prompts to select and log into your preferred WiFi network.

If reconnecting to the WiFi does not resolve your issues, or if you prefer to start fresh, you may need to re-flash the device firmware. Detailed instructions for re-flashing can be found on the [firmware page](firmware). This process allows you to reset the device to its original settings and update it with the latest firmware, ensuring optimal performance and connectivity.

## Data Reading Issues

1. **Sensor Data Not Updating**
   - Ensure the sensors are properly installed and positioned.
   - Check for any physical obstructions or interference that might be affecting the sensor readings.

## Calibration Issues

1. **Sensor Calibration**
   - If the sensor readings seem inaccurate, you may need to calibrate the sensors. Refer to the [calibration guide](calibration) for detailed instructions on how to calibrate each sensor.

## LED Indicator Issues

1. **Red Status LED Flashing Slowly**
   - Indicates that the sensor is not connected to your WiFi network or Home Assistant server. Follow the steps in the [Connect to WiFi](installation.md#step-2-connect-to-wifi) section to resolve this issue.

2. **Red Status LED Flashing Rapidly**
   - Indicates a startup error. Refer to the complete manual for more detailed troubleshooting steps.

## Advanced Troubleshooting

1. **Accessing the Web Interface**
   - If you are unable to connect the UltimateSensor to your WiFi network, access the fallback web interface by navigating to [http://192.168.4.1/](http://192.168.4.1/) in your browser while connected to the UltimateSensor hotspot.

2. **Firmware Updates**
   - Ensure the UltimateSensor is running the latest firmware. Refer to our [firmware page](https://smarthomeshop.io/firmware) for instructions on how to update the firmware.

3. **Factory Reset**
   - If all else fails, perform a factory reset on the UltimateSensor. This can be done by reflashing the unit via USB-C. Refer to our [firmware page](firmware) for instructions on how to reflash the latest firmware, which will reset the device back to its original state and remove the saved SSID information.

## Additional Resources

- Join our [Discord chat server](https://smarthomeshop.io/discord) for personalized assistance and community support.

By following these steps, you should be able to resolve most issues with your UltimateSensor. If you continue to experience problems, please reach out for further assistance.