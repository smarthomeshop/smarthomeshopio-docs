# Installation Guide

## Unboxing

Unbox the UltimateSensor package and identify all the components. You should have the following items:
- UltimateSensor
- USB-A to USB-C cable (3 meters)
- Power adapter (European)

Optional (if selected at checkout page):
- Wall Mount for device screws
- Wall Mount (for device)
- Wall Mount (for wall)

![Unboxing](/images/ultimatesensor/unboxing.png)

## Step 1: Power by Cable -OR- PoE

Connect the UltimateSensor to a power source using the provided USB-C cable and power adapter. Note that the device comes with a European USB Power Adapter. If you live outside Europe, you will still receive the adapter in the box, but you can also use any other power adapter you have at home as long as it provides at least 1A.

**Please note that powering the device by PoE or using an Ethernet connection instead of WiFi only works if the device has the Ethernet firmware installed. All UltimateSensor versions support PoE if the Ethernet firmware is installed. To switch between the firmware versions, please visit the [Firmware page](firmware).**

![Power by Cable](/images/ultimatesensor/power-by-cable.png)

## Step 2: Connect to WiFi

Upon starting up the kit, the UltimateSensor emits a WiFi hotspot named 'ultimatesensor' with the password 'ultimatesensor'. Connect to this hotspot and a pop-up window will appear, allowing you to select and connect to your own WiFi network. Ensure that your WiFi network is a 2.4 GHz network. If the fallback hotspot does not appear, try using a different device. It may take up to one minute for the WiFi to become visible after powering on the device.

![Connect to WiFi](/images/ultimatesensor/connect-wifi.png)

Note: When you connect to the fallback network, the web interface should open automatically. If that does not work, you can also navigate to [http://192.168.4.1/](http://192.168.4.1/) manually in your browser.

## Step 3: Connect to Home Assistant

Once connected to your home WiFi network, Home Assistant will automatically detect the UltimateSensor under the 'Devices & Services' section. If this does not happen, you need to add the device manually. Look up the IP address of the UltimateSensor in your router, then go to Home Assistant settings -> Devices & Services. Click on Add Integration, select ESPHome, and enter the IP address of the device. It will then be added.

![Connect to Home Assistant](/images/ultimatesensor/connect-ha.png)

After connecting to Home Assistant, your device will be visible under Home Assistant -> Settings -> Devices & Services -> look for the ESPHome integration. Click on it to see your UltimateSensor with all its entities.

## Step 4: Configure Device Sensors

Note that all sensors need at least 10 minutes to start up, and the CO2 sensor may take up to 24 hours or several days. The sensors may also need calibration; please refer to the [calibration guide](calibration) for instructions.

Avoid placing the UltimateSensor in direct sunlight to prevent inaccurate measurements and reduce the risk of damage to the sensor. We recommend placing the sensor on a cabinet or mounting it on a wall at a height between 1 and 2 meters. Read more in our [usage guide](usage)

SmartHomeShop is a hobby-based webshop dedicated to innovative smart home products. Please note that we are not responsible for the accuracy of sensor readings or future software changes by third parties.