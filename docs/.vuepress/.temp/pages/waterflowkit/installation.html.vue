<template><div><h1 id="installation-guide" tabindex="-1"><a class="header-anchor" href="#installation-guide"><span>Installation Guide</span></a></h1>
<h2 id="unboxing" tabindex="-1"><a class="header-anchor" href="#unboxing"><span>Unboxing</span></a></h2>
<p>Unbox the WaterFlowKit package and identify all the components. You should have the following items:</p>
<ul>
<li>WaterFlowKit</li>
<li>WaterFlow Sensor(s) with G1/2&quot;, G3/4&quot;, or G1&quot; Connection (Depending on which you ordered)</li>
<li>USB-A to USB-C cable (3 meters)</li>
<li>Power adapter (European)</li>
</ul>
<p><img src="@source/.vuepress/public/images/waterflowkit/unboxing.png" alt="Unboxing"></p>
<h2 id="step-1-install-the-sensor-s" tabindex="-1"><a class="header-anchor" href="#step-1-install-the-sensor-s"><span>Step 1: Install the Sensor(s)</span></a></h2>
<p>Install the waterflow sensor(s), ensure that all connections are securely tightened and properly waterproofed. Apply thread seal tape to the screw threads to guarantee a watertight seal. The temperature sensor requires extra tightening. It is crucial to double-check all fittings to prevent potential leaks.</p>
<p><img src="@source/.vuepress/public/images/waterflowkit/install-sensor.png" alt="Install Sensor"></p>
<p><strong>Note: Please be aware that we are not responsible for any leakage that may occur.</strong></p>
<h2 id="step-2-connect-sensor-s-to-kit" tabindex="-1"><a class="header-anchor" href="#step-2-connect-sensor-s-to-kit"><span>Step 2: Connect Sensor(s) to Kit</span></a></h2>
<p>Connect the sensor(s) to the WaterFlowKit:</p>
<ul>
<li>The 3-pin jack is for the waterflow sensor.</li>
<li>The 2-pin jack is for the temperature sensor (if applicable).</li>
</ul>
<p><img src="@source/.vuepress/public/images/waterflowkit/connect-sensors.png" alt="Connect Sensors"></p>
<h2 id="step-3-power-by-cable" tabindex="-1"><a class="header-anchor" href="#step-3-power-by-cable"><span>Step 3: Power by Cable</span></a></h2>
<p>Connect the WaterFlowKit to a power source using the provided USB-C cable and power adapter. The white LED will turn on to indicate the device is powered.</p>
<p><img src="@source/.vuepress/public/images/waterflowkit/power-by-cable.png" alt="Power by Cable"></p>
<h2 id="step-4-connect-to-wifi" tabindex="-1"><a class="header-anchor" href="#step-4-connect-to-wifi"><span>Step 4: Connect to WiFi</span></a></h2>
<p>Upon starting up the kit, the WaterFlowKit emits a WiFi hotspot named 'waterflowkit' with the password 'waterflowkit'. Connect to this hotspot and a pop-up window will appear, allowing you to select and connect to your own WiFi network.</p>
<p><img src="@source/.vuepress/public/images/waterflowkit/connect-wifi.png" alt="Connect to WiFi"></p>
<p>Note: When you connect to the fallback network, the web interface should open automatically. If that does not work, you can also navigate to <a href="http://192.168.4.1/" target="_blank" rel="noopener noreferrer">http://192.168.4.1/</a> manually in your browser.</p>
<h2 id="step-5-connect-to-home-assistant" tabindex="-1"><a class="header-anchor" href="#step-5-connect-to-home-assistant"><span>Step 5: Connect to Home Assistant</span></a></h2>
<p>Once connected to your home WiFi network, Home Assistant will automatically detect the WaterFlowKit under the 'Devices &amp; Services' section.</p>
<p><img src="@source/.vuepress/public/images/waterflowkit/connect-ha.png" alt="Connect to Home Assistant"></p>
<p>Note: If your setup does not include a temperature sensor, you will need to disable this entity in Home Assistant. Similarly, if you are using only one of the two waterflow sensors, make sure to disable all entities corresponding to the unused sensor.
For calibration details and more comprehensive information, please refer to the <RouteLink to="/waterflowkit/usage.html">usage section</RouteLink></p>
</div></template>


