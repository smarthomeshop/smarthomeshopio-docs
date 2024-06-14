<template><div><h1 id="installation-guide" tabindex="-1"><a class="header-anchor" href="#installation-guide"><span>Installation Guide</span></a></h1>
<h2 id="unboxing" tabindex="-1"><a class="header-anchor" href="#unboxing"><span>Unboxing</span></a></h2>
<p>Unbox the UltimateSensor Mini package and identify all the components. You should have the following items:</p>
<ul>
<li>UltimateSensor Mini</li>
<li>USB-A to USB-C cable (3 meters)</li>
<li>Power adapter (European)</li>
</ul>
<p>Optional (if selected at checkout page):</p>
<ul>
<li>Wall Mount for device screws</li>
<li>Wall Mount (for device)</li>
<li>Wall Mount (for wall)</li>
</ul>
<p><img src="@source/.vuepress/public/images/ultimatesensor-mini/unboxing.png" alt="Unboxing"></p>
<h2 id="step-1-power-by-cable" tabindex="-1"><a class="header-anchor" href="#step-1-power-by-cable"><span>Step 1: Power by Cable</span></a></h2>
<p>Connect the UltimateSensor Mini to a power source using the provided USB-C cable and power adapter. Note that the device comes with a European USB Power Adapter. If you live outside Europe, you will still receive the adapter in the box, but you can also use any other power adapter you have at home as long as it provides at least 1A.</p>
<p><img src="@source/.vuepress/public/images/ultimatesensor-mini/power-by-cable.png" alt="Power by Cable"></p>
<h2 id="step-2-connect-to-wifi" tabindex="-1"><a class="header-anchor" href="#step-2-connect-to-wifi"><span>Step 2: Connect to WiFi</span></a></h2>
<p>Upon starting up the kit, the UltimateSensor Mini emits a WiFi hotspot named 'ultimatesensor-mini' with the password 'ultimatesensor-mini'. Connect to this hotspot and a pop-up window will appear, allowing you to select and connect to your own WiFi network. Ensure that your WiFi network is a 2.4 GHz network. If the fallback hotspot does not appear, try using a different device. It may take up to one minute for the WiFi to become visible after powering on the device.</p>
<p><img src="@source/.vuepress/public/images/ultimatesensor-mini/connect-wifi.png" alt="Connect to WiFi"></p>
<p>Note: When you connect to the fallback network, the web interface should open automatically. If that does not work, you can also navigate to <a href="http://192.168.4.1/" target="_blank" rel="noopener noreferrer">http://192.168.4.1/</a> manually in your browser.</p>
<h2 id="step-3-connect-to-home-assistant" tabindex="-1"><a class="header-anchor" href="#step-3-connect-to-home-assistant"><span>Step 3: Connect to Home Assistant</span></a></h2>
<p>Once connected to your home WiFi network, Home Assistant will automatically detect the UltimateSensor Mini under the 'Devices &amp; Services' section. If this does not happen, you need to add the device manually. Look up the IP address of the UltimateSensor Mini in your router, then go to Home Assistant settings -&gt; Devices &amp; Services. Click on Add Integration, select ESPHome, and enter the IP address of the device. It will then be added.</p>
<p><img src="@source/.vuepress/public/images/ultimatesensor-mini/connect-ha.png" alt="Connect to Home Assistant"></p>
<p>After connecting to Home Assistant, your device will be visible under Home Assistant -&gt; Settings -&gt; Devices &amp; Services -&gt; look for the ESPHome integration. Click on it to see your UltimateSensor Mini with all its entities.</p>
<h2 id="step-4-configure-device-sensors-voice-assistant" tabindex="-1"><a class="header-anchor" href="#step-4-configure-device-sensors-voice-assistant"><span>Step 4: Configure Device Sensors &amp; Voice Assistant</span></a></h2>
<p>Note that all sensors need at least 10 minutes to start up, and the CO2 sensor may take up to 24 hours. The sensors may also need calibration; please refer to the <RouteLink to="/ultimatesensor-mini/calibration.html">calibration guide</RouteLink> for instructions.</p>
<p>To use the voice assistant feature, you need to fully configure it. Follow the steps in our <RouteLink to="/ultimatesensor-mini/voice-assistant.html">voice assistant guide</RouteLink>.</p>
<p>Avoid placing the UltimateSensor Mini in direct sunlight to prevent inaccurate measurements and reduce the risk of damage to the sensor. We recommend placing the sensor on a cabinet or mounting it on a wall at a height between 1 and 2 meters. Read more in our <RouteLink to="/ultimatesensor-mini/usage.html">usage guide</RouteLink></p>
</div></template>


