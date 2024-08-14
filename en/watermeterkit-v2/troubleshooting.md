# Troubleshooting Guide

If you encounter any issues with the WaterMeterKit, try the following steps:

## General Troubleshooting Steps

1. **Ensure All Cables Are Securely Connected**
   - Verify that the USB-C power cable is securely connected to both the WaterMeterKit and the power adapter.
   - Check that the water sensor is properly attached to the universal holder and that the holder is securely fastened to your water meter.

2. **Check the Power Source**
   - Make sure the power adapter is plugged into a working electrical outlet.
   - Ensure the power cable is not damaged and is functioning properly.

3. **Restart the WaterMeterKit**
   - Unplug the power cable from the WaterMeterKit, wait for 10 seconds, and then plug it back in.

4. **Restart Home Assistant**
   - Sometimes a simple restart of Home Assistant can resolve connectivity or integration issues. Navigate to **Settings > System > Restart** within Home Assistant.

5. **Update Home Assistant**
   - Ensure you are running the latest version of Home Assistant. Go to **Settings > System > Updates** to check for and install any available updates.

## WiFi Connectivity Issues

1. **Check WiFi Signal Strength**
   - Ensure that the WaterMeterKit is within range of your WiFi router. Weak signal strength can cause connectivity issues.
   - If necessary, move the WaterMeterKit closer to the router or use a WiFi extender to improve signal strength.

2. **Reconnect to WiFi**
   - If the WaterMeterKit is not connecting to your WiFi network, try reconnecting:
     1. Power off the WaterMeterKit.
     2. Power it back on and connect to the WiFi hotspot named 'watermeterkit' with the password 'watermeterkit'.
     3. Follow the on-screen instructions to select and connect to your WiFi network.

3. **Check WiFi Network Configuration**
   - Ensure your WiFi network is set to 2.4 GHz, as the WaterMeterKit does not support 5 GHz networks.
   - Verify that your WiFi network is not using a hidden SSID. If it is, make sure to manually enter the SSID and password during the setup process.

## Data Reading Issues

1. **Water Meter Data Not Updating**
   - Ensure the water sensor is correctly positioned on the water meter. Adjust the sensor's position slightly if necessary.
   - Turn on a tap. The WaterMeterKit should flash a green light for 1 second after each liter of water used to confirm measurement.
   - Check for any physical obstructions or dirt that might be blocking the sensor.

## LED Indicator Issues

1. **Red Status LED Flashing**
   - A red flashing status LED indicates that the WaterMeterKit is not connected to your network or Home Assistant. Follow the steps in the [Connect to WiFi](installation.md#step-4-connect-to-wifi) section to resolve this issue.

2. **Green LED Not Flashing During Water Usage**
   - Ensure the water sensor is properly installed and positioned on the water meter.

3. **Blue LED**
	- The blue LED indicates that the device is receiving power. If this LED is off, it means there is no power provided by the USB-C cable, or the device might be faulty.
## Advanced Troubleshooting

1. **Accessing the Web Interface**
   - If you are unable to connect the WaterMeterKit to your WiFi network, access the fallback web interface by navigating to [http://192.168.4.1/](http://192.168.4.1/) in your browser while connected to the WaterMeterKit hotspot.

2. **Firmware Updates**
   - Ensure the WaterMeterKit is running the latest firmware. Refer to our [firmware page](firmware) for instructions on how to update the firmware.

3. **Factory Reset**
   - If all else fails, perform a factory reset on the WaterMeterKit. This can be done by reflashing the unit via USB-C. Refer to our [firmware page](firmware) for instructions on how to reflash the latest firmware, which will reset the device back to its original state and remove the saved SSID information.

## Additional Resources

- Join our [Discord chat server](https://smarthomeshop.io/discord) for personalized assistance and community support.

By following these steps, you should be able to resolve most issues with your WaterMeterKit. If you continue to experience problems, please reach out for further assistance.