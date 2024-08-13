# Troubleshooting Guide

If you encounter any issues with the P1MeterKit, try the following steps:

## General Troubleshooting Steps

1. **Ensure All Cables Are Securely Connected**
   - Verify that the RJ12 and USB-C cables are securely connected to the P1MeterKit and the energy meter or power adapter.

2. **Check the Power Source**
   - Make sure the power adapter is plugged into a working electrical outlet if using a USB-C power source.
   - If using an RJ12 cable for power, ensure it is properly connected to a DSMR v5 meter that supports powering devices.

3. **Restart the P1MeterKit**
   - Unplug the power cable from the P1MeterKit, wait for 10 seconds, and then plug it back in.

4. **Restart Home Assistant**
   - Sometimes a simple restart of Home Assistant can resolve connectivity or integration issues. Navigate to **Settings > System > Restart** within Home Assistant.

5. **Update Home Assistant**
   - Ensure you are running the latest version of Home Assistant. Go to **Settings > System > Updates** to check for and install any available updates.

## WiFi Connectivity Issues

1. **Check WiFi Signal Strength**
   - Ensure that the P1MeterKit is within range of your WiFi router. Weak signal strength can cause connectivity issues.
   - If necessary, move the P1MeterKit closer to the router or use a WiFi extender to improve signal strength.

2. **Reconnect to WiFi**
   - If the P1MeterKit is not connecting to your WiFi network, try reconnecting:
     1. Power off the P1MeterKit.
     2. Power it back on and connect to the WiFi hotspot named 'p1meterkit' with the password 'p1meterkit'.
     3. Follow the on-screen instructions to select and connect to your WiFi network.

3. **Check WiFi Network Configuration**
   - Ensure your WiFi network is set to 2.4 GHz, as the P1MeterKit does not support 5 GHz networks.

## Data Reading Issues

1. **Energy Data Not Updating**
   - Ensure the RJ12 cable is securely connected to both the energy meter and the P1MeterKit.
   - Check for any physical obstructions or interference that might be affecting the sensor readings.

## LED Indicator Issues

1. **Red Status LED Flashing Slowly**
   - Indicates that the P1MeterKit is not connected to your WiFi network or Home Assistant server. Follow the steps in the [Connect to WiFi](installation.md#step-4-connect-to-wifi) section to resolve this issue.

2. **Red Status LED Flashing Rapidly**
   - Indicates a startup error. Refer to the complete manual for more detailed troubleshooting steps.

## Advanced Troubleshooting

1. **Accessing the Web Interface**
   - If you are unable to connect the P1MeterKit to your WiFi network, access the fallback web interface by navigating to [http://192.168.4.1/](http://192.168.4.1/) in your browser while connected to the P1MeterKit hotspot.

2. **Firmware Updates**
   - Ensure the P1MeterKit is running the latest firmware. Refer to our [firmware page](https://smarthomeshop.io/firmware) for instructions on how to update the firmware.

3. **Factory Reset**
   - If all else fails, perform a factory reset on the P1MeterKit. This can be done by reflashing the unit via USB-C. Refer to our [firmware page](https://smarthomeshop.io/firmware) for instructions on how to reflash the latest firmware, which will reset the device back to its original state and remove the saved SSID information.


## Additional Resources

- Join our [Discord server](https://smarthomeshop.io/discord) for community support and further assistance.

By following these steps, you should be able to resolve most issues with your P1MeterKit. If you continue to experience problems, please reach out for further assistance.