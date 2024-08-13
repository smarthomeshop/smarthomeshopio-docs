# Troubleshooting Guide

If you encounter any issues with the WaterP1MeterKit, try the following steps:

## General Troubleshooting Steps

1. **Ensure All Cables Are Securely Connected**
   - Verify that the USB-C power cable is securely connected to both the WaterP1MeterKit and the power adapter.
   - Ensure the RJ12 cable is firmly connected to the P1 port of your energy meter and the WaterP1MeterKit.
   - Check that the water sensor is properly attached to the universal holder and that the holder is securely fastened to your water meter.

2. **Check the Power Source**
   - Make sure the power adapter is plugged into a working electrical outlet.
   - If using Power over Ethernet (PoE), ensure your Ethernet cable is connected to a PoE-enabled port on your router or switch.

3. **Restart the WaterP1MeterKit**
   - Unplug the power cable from the WaterP1MeterKit, wait for 10 seconds, and then plug it back in.

4. **Restart Home Assistant**
   - Sometimes a simple restart of Home Assistant can resolve connectivity or integration issues. Navigate to **Settings > System > Restart** within Home Assistant.

5. **Update Home Assistant**
   - Ensure you are running the latest version of Home Assistant. Go to **Settings > System > Updates** to check for and install any available updates.

## WiFi Connectivity Issues

1. **Check WiFi Signal Strength**
   - Ensure that the WaterP1MeterKit is within range of your WiFi router. Weak signal strength can cause connectivity issues.
   - If necessary, move the WaterP1MeterKit closer to the router or use a WiFi extender to improve signal strength.

2. **Reconnect to WiFi**
   - If the WaterP1MeterKit is not connecting to your WiFi network, try reconnecting:
     1. Power off the WaterP1MeterKit.
     2. Power it back on and connect to the WiFi hotspot named 'waterp1meterkit' with the password 'waterp1meterkit'.
     3. Follow the on-screen instructions to select and connect to your WiFi network.

3. **Check WiFi Network Configuration**
   - Ensure your WiFi network is set to 2.4 GHz, as the WaterP1MeterKit does not support 5 GHz networks.
   - Verify that your WiFi network is not using a hidden SSID. If it is, make sure to manually enter the SSID and password during the setup process.

4. **Verify WiFi Firmware**
   - Ensure that the WiFi firmware is installed on the WaterP1MeterKit. If there is no Ethernet cable connected and the green LED on the Ethernet port is on, then the Ethernet firmware is installed. If the LED is off, the WiFi firmware is installed. Refer to our [firmware page](https://smarthomeshop.io/firmware) for instructions on how to update or switch the firmware.

## Ethernet / PoE Connectivity Issues

1. **Check Ethernet Cable Connection**
   - Ensure the Ethernet cable is securely connected to both the WaterP1MeterKit and a PoE-enabled port on your router or switch.
   - Verify that the Ethernet cable is not damaged and is functioning properly.

2. **Verify PoE Power Supply**
   - Ensure your router or switch supports PoE and is providing power to the WaterP1MeterKit through the Ethernet cable.
   - If possible, test the Ethernet cable and PoE port with another device to confirm they are working correctly.

3. **Verify Ethernet Firmware**
   - Ensure that the Ethernet firmware is installed on the WaterP1MeterKit. If there is no Ethernet cable connected and the green LED on the Ethernet port is on, then the Ethernet firmware is installed. If the LED is off, the WiFi firmware is installed. Refer to our [firmware page](https://smarthomeshop.io/firmware) for instructions on how to update or switch the firmware.

## Data Reading Issues

1. **Water Meter Data Not Updating**
   - Ensure the water sensor is correctly positioned on the water meter. Adjust the sensor's position slightly if necessary.
   - Turn on a tap. The WaterP1MeterKit should flash a green light for 1 second after each liter of water used to confirm measurement.
   - Check for any physical obstructions or dirt that might be blocking the sensor.

2. **Energy Meter Data Not Updating**
   - Verify that the RJ12 cable is securely connected to both the energy meter's P1 port and the WaterP1MeterKit.
   - Ensure your energy meter is an ESMR/DSMR v5 meter. Compatibility issues can occur with other versions or types.

## LED Indicator Issues

1. **Red Status LED Flashing**
   - A red flashing status LED indicates that the WaterP1MeterKit is not connected to your network or Home Assistant. Follow the steps in the [Connect to WiFi](installation.md#step-4-connect-to-wifi) section to resolve this issue.

2. **Green LED Not Flashing During Water Usage**
   - Ensure the water sensor is properly installed and positioned on the water meter.

3.	**White LED**
	- The white LED indicates that the device is receiving power. If this LED is off, it means there is no power provided by either the USB-C cable or PoE, or the device might be faulty.

## Advanced Troubleshooting

1. **Accessing the Web Interface**
   - If you are unable to connect the WaterP1MeterKit to your WiFi network, access the fallback web interface by navigating to [http://192.168.4.1/](http://192.168.4.1/) in your browser while connected to the WaterP1MeterKit hotspot.

2. **Firmware Updates**
   - Ensure the WaterP1MeterKit is running the latest firmware. Refer to our [firmware page](https://smarthomeshop.io/firmware) for instructions on how to update the firmware.

3. **Factory Reset**
   - If all else fails, perform a factory reset on the WaterP1MeterKit. This can be done by reflashing the unit via USB-C. Refer to our [firmware page](https://smarthomeshop.io/firmware) for instructions on how to reflash the latest firmware, which will reset the device back to its original state and remove the saved SSID information.

## Additional Resources

- Join our [Discord chat server](https://smarthomeshop.io/discord) for personalized assistance and community support.

By following these steps, you should be able to resolve most issues with your WaterP1MeterKit. If you continue to experience problems, please reach out for further assistance.