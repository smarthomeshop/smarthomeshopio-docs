# Technical Specifications

The P1MeterKit is designed to provide detailed energy consumption data by connecting directly to your energy meter. Below are the technical specifications of the device:

## General Specifications

- **Dimensions**: 92 x 47.5 x 26.5 mm

## Connectivity

- **Network Connection**: Wi-Fi IEEE 802.11 b/g/n (2.4 GHz), supports WPA/WPA2 security
- **Data Transfer**: Update interval every 1 second

## Power Supply

- **Primary Power Source**: RJ12 port for direct coupling with DSMR-compatible energy meters
- **Alternative Power Source**: USB-C port for external power supply (5V, 1A)
- **Power Over RJ12**: Supported for DSMR v5.0 meters

## Compatibility

- **Energy Meters**: Compatible with DSMR versions 4.0 and 5.0, as well as ESMR 5.0
- **Software**: OpenSource ESPHome, fully integrated with Home Assistant, support for firmware updates (OTA)

## Environmental

- **Operational Temperature Range**: -10°C to +40°C
- **Classification**: IP20 (suitable for indoor use)

## Indicators

- **LED 1 (White Light)**: Indicates USB-C power connection
- **LED 2 (Red Light)**: Flashes if not connected to Wi-Fi or Home Assistant
- **LED 3 (Yellow Light)**: Indicates RJ12 power connection

For more detailed technical information, please refer to the complete manual provided with your P1MeterKit or visit our [official website](https://p1meterkit.nl/en).

Please note: We are not responsible for any issues arising from water damage or improper installation. Ensure the unit is installed in a dry, indoor environment.