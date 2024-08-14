# Installation Guide

## Unboxing

Unbox the WaterP1MeterKit package and identify all the components. You should have the following items:
- WaterP1MeterKit
- RJ12 cable for energy meter
- Screws for Universal Holder
- WaterSensor with Universal Holder

Optional if you selected the option "With USB-C Adapter Set":
- USB-A to USB-C cable (3 meters)
- Power adapter (European)

![Unboxing](/images/waterp1meterkit/unboxing.png)

## Step 1: Connect to Energymeter & Install the Sensor Holder

The WaterP1MeterKit allows you to connect both your water meter and energy meter, or just one of the two.

### Connect to Energymeter
Plug the provided RJ12 cable into the P1 port of your energy meter. Ensure your energy meter has a P1 port and is an ESMR/DSMR v5 meter. Sometimes there is also an MBus port on the meter, but this port will not work; only the P1 port is compatible. Plug the other end of the cable into the WaterP1MeterKit.

### Connect to Watermeter
Attach the universal holder adapter plate to your water meter with the provided screws. Do not over-tighten. Ensure the sensor is firmly pressed down into the holder, with the black side always visible and facing upwards.

Note: Sometimes the lid (the outer plastic part) of your water meter can get in the way. You can often turn this lid by hand to make room for the holder.

![Install Kit](/images/waterp1meterkit/install-kit.png)

### Compatible Water Meters
- **Elster/Honeywell**
- **Sensus**
- **Itron/Actaris/Schlumberger**

## Step 2: Power by Cable or PoE

Connect the WaterP1MeterKit to a power source using the provided USB-C cable and power adapter, or use Power over Ethernet (PoE) for a direct and stable network connection without additional power cables. When first powered up, the kit will flash a red status light to indicate it is not yet connected to your network or Home Assistant. This issue will be resolved in the following steps when you connect it to your network.

Please note that powering the device by PoE or using an Ethernet connection instead of WiFi only works if the device has the Ethernet firmware installed. All WaterP1MeterKit V2 versions support PoE if the Ethernet firmware is installed. To switch between the firmware versions, please visit our [firmware page](https://smarthomeshop.io/firmware).

By default, if you ordered the WaterP1MeterKit with the option "With USB-C Adapter Set" selected at checkout, then the WiFi firmware is installed by default and the Ethernet port is disabled. If you selected "Without USB-C Adapter Set," then the Ethernet firmware is installed by default.

![Power by Cable](/images/waterp1meterkit/powering.png)

## Step 3: Test Sensor Position

After mounting the holder, turn on a tap. The WaterP1MeterKit should flash a green light for 1 second after each liter of water used to confirm measurement. If this does not happen, you may need to adjust the sensor's position slightly, sometimes by as little as 1mm.

Note: Ignore the red flashing status LED for now. This will be resolved in the following steps when you connect the WaterP1MeterKit to your WiFi network and Home Assistant server.

![Test Sensor Position](/images/waterp1meterkit/test-sensor-position.png)

## Step 4: Connect to WiFi

Ignore this step if you plan to connect the WaterP1MeterKit via an Ethernet cable. As mentioned in Step 2, you need to have the Ethernet firmware installed for this. For more information on switching firmware, please visit our [firmware page](https://smarthomeshop.io/firmware).

Upon starting up the kit, the WaterP1MeterKit emits a WiFi hotspot named 'waterp1meterkit' with the password 'waterp1meterkit'. Once you are connected to this hotspot, a pop-up window will appear where you can select your own WiFi network.

![Connect to WiFi](/images/waterp1meterkit/connect-wifi.png)

Note: When you connect to the fallback network, the web interface should open automatically. If that does not work, you can also navigate to [http://192.168.4.1/](http://192.168.4.1/) manually in your browser.

## Step 5: Connect to Home Assistant

Once connected to your home WiFi network, Home Assistant will automatically detect the WaterP1MeterKit under the 'Devices & Services' section.

![Connect to Home Assistant](/images/waterp1meterkit/connect-ha.png)

To use the WaterP1MeterKit for water and energy data on the Home Assistant Energy Dashboard, please continue to the next step in the manual [Usage Guide](usage).

SmartHomeShop is a hobby-based webshop dedicated to innovative smart home products. Please note that we are not responsible for the accuracy of sensor readings or future software changes by third parties.