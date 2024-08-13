# Installation Guide

## Unboxing

Unbox the WaterFlowKit package and identify all the components. You should have the following items:
- WaterFlowKit
- WaterFlow Sensor(s) with G1/2", G3/4", or G1" Connection (Depending on which you ordered)
- USB-A to USB-C cable (3 meters)
- Power adapter (European)

![Unboxing](/images/waterflowkit/unboxing.png)

## Step 1: Install the Sensor(s)

Install the waterflow sensor(s), ensure that all connections are securely tightened and properly waterproofed. Apply thread seal tape to the screw threads to guarantee a watertight seal. The temperature sensor requires extra tightening. It is crucial to double-check all fittings to prevent potential leaks.

![Install Sensor](/images/waterflowkit/install-sensor.png)

**Note: Please be aware that we are not responsible for any leakage that may occur.**

## Step 2: Connect Sensor(s) to Kit

Connect the sensor(s) to the WaterFlowKit:
- The 3-pin jack is for the waterflow sensor.
- The 2-pin jack is for the temperature sensor (if applicable).

![Connect Sensors](/images/waterflowkit/connect-sensors.png)

## Step 3: Power by Cable

Connect the WaterFlowKit to a power source using the provided USB-C cable and power adapter. The white LED will turn on to indicate the device is powered.

![Power by Cable](/images/waterflowkit/power-by-cable.png)

## Step 4: Connect to WiFi

Upon starting up the kit, the WaterFlowKit emits a WiFi hotspot named 'waterflowkit' with the password 'waterflowkit'. Connect to this hotspot and a pop-up window will appear, allowing you to select and connect to your own WiFi network.

![Connect to WiFi](/images/waterflowkit/connect-wifi.png)

Note: When you connect to the fallback network, the web interface should open automatically. If that does not work, you can also navigate to [http://192.168.4.1/](http://192.168.4.1/) manually in your browser.

## Step 5: Connect to Home Assistant

Once connected to your home WiFi network, Home Assistant will automatically detect the WaterFlowKit under the 'Devices & Services' section.

![Connect to Home Assistant](/images/waterflowkit/connect-ha.png)

Note: If your setup does not include a temperature sensor, you will need to disable this entity in Home Assistant. Similarly, if you are using only one of the two waterflow sensors, make sure to disable all entities corresponding to the unused sensor. 
For calibration details and more comprehensive information, please refer to the [usage section](usage)