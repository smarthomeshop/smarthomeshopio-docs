# Installation Guide

## Unboxing

Unbox the WaterMeterKit package and identify all the components. You should have the following items:
- WaterMeterKit
- USB-A to USB-C cable (3 meters)
- Power adapter (European)
- Screws (2x small for Elster/Honeywell, 2x bigger for Sensus, 1x bigger for Itron/Actaris/Schlumberger)
- WatermeterSensor with Universal Holder

![Unboxing](/images/watermeterkit/unboxing.png)

## Step 1: Install the Sensor Holder

Attach the adapter plate to your water meter with the provided screws. Do not over-tighten. Make sure the sensor is firmly pressed down into the holder, with the black side always visible and facing upwards.

![Install Sensor Holder](/images/watermeterkit/install-sensor-holder.png)

Note: Sometimes the lid (the outer plastic part) of your meter can get in the way. You can often turn this lid by hand to make room for the holder.

### Compatible Meters
- **Elster/Honeywell**
- **Sensus**
- **Itron/Actaris/Schlumberger**

## Step 2: Power by Cable

Connect the WaterMeterKit to a power source using the provided USB-C cable and power adapter. When first powered up, the kit will flash a red status light to indicate it is not yet connected to your WiFi network or Home Assistant. This issue will be resolved in the following steps when you connect it to your network.

![Power by Cable](/images/watermeterkit/power-by-cable.png)

## Step 3: Test Sensor Position

After mounting the holder, turn on a tap. The WaterMeterKit should flash a green light for 1 second after each liter of water used to confirm measurement. If this does not happen, you may need to adjust the sensor's position slightly, sometimes by as little as 1mm. 

Note: Ignore the red flashing status LED for now. This will be resolved in the following steps when you connect the WaterMeterKit to your WiFi network and Home Assistant server.

![Test Sensor Position](/images/watermeterkit/test-sensor-position.png)
## Step 4: Connect to WiFi

Upon starting up the kit, the WaterMeterKit emits a WiFi hotspot named 'watermeterkit' with the password 'watermeterkit'. Once you are connected to this hotspot, a pop-up window will appear where you can select your own WiFi network.

![Connect to WiFi](/images/watermeterkit/connect-wifi.png)

Note: When you connect to the fallback network, the web interface should open automatically. If that does not work, you can also navigate to [http://192.168.4.1/](http://192.168.4.1/) manually in your browser.

## Step 5: Connect to Home Assistant

Once connected to your home WiFi network, Home Assistant will automatically detect the WaterMeterKit under the 'Devices & Services' section.

![Connect to WiFi](/images/watermeterkit/connect-ha.png)

To use the WaterMeterKit for water data on the HA Energy Dashboard, please continue to the next step in the manual [Usage Guide](usage).
