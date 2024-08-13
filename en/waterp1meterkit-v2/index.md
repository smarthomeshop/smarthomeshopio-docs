# WaterP1MeterKit V2 Overview

<img src="/images/waterp1meterkit/waterp1meterkit-product-shop.png" alt="WaterP1MeterKit Image" style="width: 50%;">

Welcome to the WaterP1MeterKit guide. This section provides step-by-step instructions and additional information for setting up and using your WaterP1MeterKit. 

You can also use this guide for the WaterP1MeterKit V1 version. The only difference between WaterP1MeterKit V1 and V2 is that V2 has PoE support built-in by default. In V1, PoE was enabled using an external splitter that separated the PoE power into an Ethernet cable and a USB-C cable. For V2, you can simply plug a PoE-enabled Ethernet cable into the device. Please note that you need to install the Ethernet firmware to use the Ethernet port!

## Sections

- [Installation](installation)
- [Usage](usage)
- [Troubleshooting](troubleshooting)
- [Technical Specifications](technical-specifications)
- [Warranty and Support](warranty-and-support)

## Frequently Asked Questions (FAQ)

1. **How do I install the WaterP1MeterKit?**
   - Detailed installation instructions can be found in the [Installation Guide](installation).

2. **Can I use the WaterP1MeterKit to measure only water and/or energy consumption?**
   - Yes, you can use the WaterP1MeterKit to measure both water and energy consumption, or just one of the two. Simply connect the appropriate sensor(s) and disable any unused entities in Home Assistant.

3. **How does the WaterP1MeterKit measure water consumption?**
   - The WaterP1MeterKit works by placing a sensor on the 1-liter indication of your water meter. There is a metal plate inside the meter that completes one full rotation for every liter of water used. The kit measures the position of this metal plate to determine the flow rate.

4. **How does the WaterP1MeterKit measure energy consumption?**
   - The WaterP1MeterKit uses a P1 meter cable connected to the P1 port of your energy meter. It reads all data transmitted by the energy meter, including total consumption, instantaneous power usage, and any energy fed back to the grid from solar panels.

5. **Does the WaterP1MeterKit also measure the energy fed back to the grid from my solar panels?**
   - Yes, the WaterP1MeterKit measures all data transmitted by your energy meter through the P1 port, including energy fed back to the grid from solar panels.

6. **What is the difference between the PoE and USB-C options for the WaterP1MeterKit?**
   - Starting from WaterP1MeterKit V2, PoE is built-in by default. On the product page, you can choose between the "With USB-C Adapter Set" and "Without USB-C Adapter Set" options. This choice determines which firmware is installed:
     - **With USB-C Adapter Set**: The kit is configured for WiFi connectivity by default, and the Ethernet port is disabled.
     - **Without USB-C Adapter Set**: The kit is configured for Ethernet (PoE) connectivity by default.
   - You can always switch between the firmware versions. If the green LED on the Ethernet port is on without a connected Ethernet cable, the Ethernet firmware is installed. If the LED is off, the WiFi firmware is installed. For instructions on switching firmware, refer to our [firmware page](https://smarthomeshop.io/firmware).

For further assistance, please join our [Discord server](https://smarthomeshop.io/discord) for personalized support and community interaction.