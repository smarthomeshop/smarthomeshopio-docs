<template><div><h1 id="installation-guide" tabindex="-1"><a class="header-anchor" href="#installation-guide"><span>Installation Guide</span></a></h1>
<h2 id="unboxing" tabindex="-1"><a class="header-anchor" href="#unboxing"><span>Unboxing</span></a></h2>
<p>Unbox the WaterMeterKit package and identify all the components. You should have the following items:</p>
<ul>
<li>WaterMeterKit</li>
<li>USB-A to USB-C cable (3 meters)</li>
<li>Power adapter (European)</li>
<li>Screws (2x small for Elster/Honeywell, 2x bigger for Sensus, 1x bigger for Itron/Actaris/Schlumberger)</li>
<li>WatermeterSensor with Universal Holder</li>
</ul>
<p><img src="@source/.vuepress/public/images/watermeterkit/unboxing.png" alt="Unboxing"></p>
<h2 id="step-1-install-the-sensor-holder" tabindex="-1"><a class="header-anchor" href="#step-1-install-the-sensor-holder"><span>Step 1: Install the Sensor Holder</span></a></h2>
<p>Attach the adapter plate to your water meter with the provided screws. Do not over-tighten. Make sure the sensor is firmly pressed down into the holder, with the black side always visible and facing upwards.</p>
<p><img src="@source/.vuepress/public/images/watermeterkit/install-sensor-holder.png" alt="Install Sensor Holder"></p>
<p>Note: Sometimes the lid (the outer plastic part) of your meter can get in the way. You can often turn this lid by hand to make room for the holder.</p>
<h3 id="compatible-meters" tabindex="-1"><a class="header-anchor" href="#compatible-meters"><span>Compatible Meters</span></a></h3>
<ul>
<li><strong>Elster/Honeywell</strong></li>
<li><strong>Sensus</strong></li>
<li><strong>Itron/Actaris/Schlumberger</strong></li>
</ul>
<h2 id="step-2-power-by-cable" tabindex="-1"><a class="header-anchor" href="#step-2-power-by-cable"><span>Step 2: Power by Cable</span></a></h2>
<p>Connect the WaterMeterKit to a power source using the provided USB-C cable and power adapter. When first powered up, the kit will flash a red status light to indicate it is not yet connected to your WiFi network or Home Assistant. This issue will be resolved in the following steps when you connect it to your network.</p>
<p><img src="@source/.vuepress/public/images/watermeterkit/power-by-cable.png" alt="Power by Cable"></p>
<h2 id="step-3-test-sensor-position" tabindex="-1"><a class="header-anchor" href="#step-3-test-sensor-position"><span>Step 3: Test Sensor Position</span></a></h2>
<p>After mounting the holder, turn on a tap. The WaterMeterKit should flash a green light for 1 second after each liter of water used to confirm measurement. If this does not happen, you may need to adjust the sensor's position slightly, sometimes by as little as 1mm.</p>
<p>Note: Ignore the red flashing status LED for now. This will be resolved in the following steps when you connect the WaterMeterKit to your WiFi network and Home Assistant server.</p>
<p><img src="@source/.vuepress/public/images/watermeterkit/test-sensor-position.png" alt="Test Sensor Position"></p>
<h2 id="step-4-connect-to-wifi" tabindex="-1"><a class="header-anchor" href="#step-4-connect-to-wifi"><span>Step 4: Connect to WiFi</span></a></h2>
<p>Upon starting up the kit, the WaterMeterKit emits a WiFi hotspot named 'watermeterkit' with the password 'watermeterkit'. Once you are connected to this hotspot, a pop-up window will appear where you can select your own WiFi network.</p>
<p><img src="@source/.vuepress/public/images/watermeterkit/connect-wifi.png" alt="Connect to WiFi"></p>
<p>Note: When you connect to the fallback network, the web interface should open automatically. If that does not work, you can also navigate to <a href="http://192.168.4.1/" target="_blank" rel="noopener noreferrer">http://192.168.4.1/</a> manually in your browser.</p>
<h2 id="step-5-connect-to-home-assistant" tabindex="-1"><a class="header-anchor" href="#step-5-connect-to-home-assistant"><span>Step 5: Connect to Home Assistant</span></a></h2>
<p>Once connected to your home WiFi network, Home Assistant will automatically detect the WaterMeterKit under the 'Devices &amp; Services' section.</p>
<p><img src="@source/.vuepress/public/images/watermeterkit/connect-ha.png" alt="Connect to WiFi"></p>
<p>To use the WaterMeterKit for water data on the HA Energy Dashboard, please continue to the next step in the manual <RouteLink to="/watermeterkit-v2/usage.html">Usage Guide</RouteLink>.</p>
</div></template>


