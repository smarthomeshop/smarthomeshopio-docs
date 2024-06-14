<template><div><h1 id="troubleshooting-guide" tabindex="-1"><a class="header-anchor" href="#troubleshooting-guide"><span>Troubleshooting Guide</span></a></h1>
<p>If you encounter any issues with the UltimateSensor Mini, try the following steps:</p>
<h2 id="general-troubleshooting-steps" tabindex="-1"><a class="header-anchor" href="#general-troubleshooting-steps"><span>General Troubleshooting Steps</span></a></h2>
<ol>
<li>
<p><strong>Ensure All Cables Are Securely Connected</strong></p>
<ul>
<li>Verify that the USB-C power cable is securely connected to both the UltimateSensor Mini and the power adapter.</li>
</ul>
</li>
<li>
<p><strong>Check the Power Source</strong></p>
<ul>
<li>Make sure the power adapter is plugged into a working electrical outlet.</li>
<li>Ensure the power cable is not damaged and is functioning properly.</li>
</ul>
</li>
<li>
<p><strong>Restart the UltimateSensor Mini</strong></p>
<ul>
<li>Unplug the power cable from the UltimateSensor Mini, wait for 10 seconds, and then plug it back in.</li>
</ul>
</li>
<li>
<p><strong>Restart Home Assistant</strong></p>
<ul>
<li>Sometimes a simple restart of Home Assistant can resolve connectivity or integration issues. Navigate to <strong>Settings &gt; System &gt; Restart</strong> within Home Assistant.</li>
</ul>
</li>
<li>
<p><strong>Update Home Assistant</strong></p>
<ul>
<li>Ensure you are running the latest version of Home Assistant. Go to <strong>Settings &gt; System &gt; Updates</strong> to check for and install any available updates.</li>
</ul>
</li>
</ol>
<h2 id="wifi-connectivity-issues" tabindex="-1"><a class="header-anchor" href="#wifi-connectivity-issues"><span>WiFi Connectivity Issues</span></a></h2>
<ol>
<li>
<p><strong>Check WiFi Signal Strength</strong></p>
<ul>
<li>Ensure that the UltimateSensor Mini is within range of your WiFi router. Weak signal strength can cause connectivity issues.</li>
<li>If necessary, move the UltimateSensor Mini closer to the router or use a WiFi extender to improve signal strength.</li>
</ul>
</li>
<li>
<p><strong>Reconnect to WiFi</strong></p>
<ul>
<li>If the UltimateSensor Mini is not connecting to your WiFi network, try reconnecting:
<ol>
<li>Power off the UltimateSensor Mini.</li>
<li>Power it back on and connect to the WiFi hotspot named 'ultimatesensor-mini' with the password 'ultimatesensor-mini'.</li>
<li>Follow the on-screen instructions to select and connect to your WiFi network.</li>
</ol>
</li>
</ul>
</li>
<li>
<p><strong>Check WiFi Network Configuration</strong></p>
<ul>
<li>Ensure your WiFi network is set to 2.4 GHz, as the UltimateSensor Mini does not support 5 GHz networks.</li>
</ul>
</li>
</ol>
<h2 id="data-reading-issues" tabindex="-1"><a class="header-anchor" href="#data-reading-issues"><span>Data Reading Issues</span></a></h2>
<ol>
<li><strong>Sensor Data Not Updating</strong>
<ul>
<li>Ensure the sensors are properly installed and positioned.</li>
<li>Check for any physical obstructions or interference that might be affecting the sensor readings.</li>
</ul>
</li>
</ol>
<h2 id="calibration-issues" tabindex="-1"><a class="header-anchor" href="#calibration-issues"><span>Calibration Issues</span></a></h2>
<ol>
<li><strong>Sensor Calibration</strong>
<ul>
<li>If the sensor readings seem inaccurate, you may need to calibrate the sensors. Refer to the <RouteLink to="/ultimatesensor-mini/calibration.html">calibration guide</RouteLink> for detailed instructions on how to calibrate each sensor.</li>
</ul>
</li>
</ol>
<h2 id="voice-assistant-issues" tabindex="-1"><a class="header-anchor" href="#voice-assistant-issues"><span>Voice Assistant Issues</span></a></h2>
<ol>
<li><strong>Voice Assistant Not Working</strong>
<ul>
<li>If the voice assistant feature is not working, ensure it has been fully configured. Follow the detailed steps in the <RouteLink to="/ultimatesensor-mini/voice-assistant.html">voice assistant guide</RouteLink>.</li>
<li>Check if the microphone and speaker are properly connected and functioning.</li>
<li>Verify that the voice assistant settings in Home Assistant are correctly configured.</li>
</ul>
</li>
</ol>
<h2 id="led-indicator-issues" tabindex="-1"><a class="header-anchor" href="#led-indicator-issues"><span>LED Indicator Issues</span></a></h2>
<ol>
<li>
<p><strong>Red Status LED Flashing Slowly</strong></p>
<ul>
<li>Indicates that the sensor is not connected to your WiFi network or Home Assistant server. Follow the steps in the <RouteLink to="/ultimatesensor-mini/installation.html#step-2-connect-to-wifi">Connect to WiFi</RouteLink> section to resolve this issue.</li>
</ul>
</li>
<li>
<p><strong>Red Status LED Flashing Rapidly</strong></p>
<ul>
<li>Indicates a startup error. Refer to the complete manual for more detailed troubleshooting steps.</li>
</ul>
</li>
</ol>
<h2 id="advanced-troubleshooting" tabindex="-1"><a class="header-anchor" href="#advanced-troubleshooting"><span>Advanced Troubleshooting</span></a></h2>
<ol>
<li>
<p><strong>Accessing the Web Interface</strong></p>
<ul>
<li>If you are unable to connect the UltimateSensor Mini to your WiFi network, access the fallback web interface by navigating to <a href="http://192.168.4.1/" target="_blank" rel="noopener noreferrer">http://192.168.4.1/</a> in your browser while connected to the UltimateSensor Mini hotspot.</li>
</ul>
</li>
<li>
<p><strong>Firmware Updates</strong></p>
<ul>
<li>Ensure the UltimateSensor Mini is running the latest firmware. Refer to our <a href="https://smarthomeshop.io/firmware" target="_blank" rel="noopener noreferrer">firmware page</a> for instructions on how to update the firmware.</li>
</ul>
</li>
<li>
<p><strong>Factory Reset</strong></p>
<ul>
<li>If all else fails, perform a factory reset on the UltimateSensor Mini. This can be done by reflashing the unit via USB-C. Refer to our <a href="https://smarthomeshop.io/firmware" target="_blank" rel="noopener noreferrer">firmware page</a> for instructions on how to reflash the latest firmware, which will reset the device back to its original state and remove the saved SSID information.</li>
</ul>
</li>
</ol>
<h2 id="additional-resources" tabindex="-1"><a class="header-anchor" href="#additional-resources"><span>Additional Resources</span></a></h2>
<ul>
<li>Join our <a href="https://smarthomeshop.io/discord" target="_blank" rel="noopener noreferrer">Discord chat server</a> for personalized assistance and community support.</li>
</ul>
<p>By following these steps, you should be able to resolve most issues with your UltimateSensor Mini. If you continue to experience problems, please reach out for further assistance.</p>
</div></template>


