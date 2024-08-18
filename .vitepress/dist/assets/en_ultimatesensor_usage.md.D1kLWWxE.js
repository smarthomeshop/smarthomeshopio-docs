import{_ as e,c as t,o,a2 as a}from"./chunks/framework.CEgrwLex.js";const g=JSON.parse('{"title":"Usage Guide","description":"","frontmatter":{},"headers":[],"relativePath":"en/ultimatesensor/usage.md","filePath":"en/ultimatesensor/usage.md","lastUpdated":1723626570000}'),n={name:"en/ultimatesensor/usage.md"},i=a('<h1 id="usage-guide" tabindex="-1">Usage Guide <a class="header-anchor" href="#usage-guide" aria-label="Permalink to &quot;Usage Guide&quot;">​</a></h1><p>The UltimateSensor allows you to monitor various environmental factors in real-time through Home Assistant.</p><h2 id="real-time-monitoring" tabindex="-1">Real-Time Monitoring <a class="header-anchor" href="#real-time-monitoring" aria-label="Permalink to &quot;Real-Time Monitoring&quot;">​</a></h2><ol><li><strong>Open Home Assistant</strong> and navigate to <strong>Settings</strong>.</li><li>Go to <strong>Devices &amp; Services</strong> and look for the <strong>ESPHome</strong> integration. Open the <strong>ESPHome</strong> integration.</li><li>Select the <strong>UltimateSensor</strong> device.</li><li>Here, you will find all the entities associated with the UltimateSensor, such as CO2 levels, temperature, humidity, light intensity, VOCs, and room occupancy.</li><li>If you are not using certain sensors or features, you can disable the unused entities.</li></ol><h2 id="historical-data" tabindex="-1">Historical Data <a class="header-anchor" href="#historical-data" aria-label="Permalink to &quot;Historical Data&quot;">​</a></h2><p>To view historical environmental data:</p><ol><li>Navigate to the <strong>History</strong> section in Home Assistant.</li><li>Select the desired time period (hour, day, month, or year) and select the UltimateSensor entity to see your data over that period.</li></ol><h2 id="calibration" tabindex="-1">Calibration <a class="header-anchor" href="#calibration" aria-label="Permalink to &quot;Calibration&quot;">​</a></h2><p>Note that all sensors need at least 10 minutes to start up, and the CO2 sensor may take up to 24 hours. The sensors may also need calibration. Follow the instructions on the <a href="./calibration">calibration page</a> to ensure accurate measurements.</p><h2 id="placement-of-ultimate-sensor" tabindex="-1">Placement of Ultimate Sensor <a class="header-anchor" href="#placement-of-ultimate-sensor" aria-label="Permalink to &quot;Placement of Ultimate Sensor&quot;">​</a></h2><p>To ensure accurate readings and prevent damage:</p><ul><li>Avoid placing the UltimateSensor in direct sunlight. Prolonged exposure can cause the sensor’s casing to yellow, a condition not covered under warranty.</li><li>We recommend positioning the UltimateSensor on a cabinet or mounting it on a wall at a height between 1 and 2 meters.</li></ul><h2 id="inaccurate-measurement-of-sensors" tabindex="-1">Inaccurate measurement of sensors <a class="header-anchor" href="#inaccurate-measurement-of-sensors" aria-label="Permalink to &quot;Inaccurate measurement of sensors&quot;">​</a></h2><p>If sensors display inaccurate readings, they may require recalibration or adjustments to their offsets. Detailed instructions can be found on the <a href="./calibration">calibration page</a>. Note: We are not responsible for inaccuracies in readings from third-party sensors or for changes in sensor behavior due to software updates by third parties.</p><h2 id="switching-between-wifi-and-ethernet-poe-connection" tabindex="-1">Switching between WiFi and Ethernet (PoE) Connection <a class="header-anchor" href="#switching-between-wifi-and-ethernet-poe-connection" aria-label="Permalink to &quot;Switching between WiFi and Ethernet (PoE) Connection&quot;">​</a></h2><p>The UltimateSensor supports both WiFi and Ethernet (PoE) connections, allowing for flexible integration into your smart home setup. Depending on your network requirements and setup, you may choose to switch between these connection types.</p><p>To change the connection type of your UltimateSensor, you will need to update or modify the device’s firmware:</p><ul><li>WiFi Connection: Ensure your device is within range of your WiFi router. If the UltimateSensor fails to connect or you need to change the WiFi network settings, you may need to reset the WiFi configuration or reconnect through the fallback hotspot mode.</li><li>Ethernet (PoE) Connection: This option requires a compatible PoE switch or injector. Simply connect the UltimateSensor using an Ethernet cable to your PoE-enabled network equipment. This setup not only provides a stable network connection but also powers the device through the same cable. You can also use a normal Ethernet cable (without PoE) and use the USB-C for powering the device.</li></ul><p>For step-by-step instructions on how to switch firmware to enable these connection types, please visit the <a href="./firmware">firmware page</a>. This page provides detailed guidance on configuring and updating the UltimateSensor to suit your preferred connection method.</p>',19),r=[i];function s(l,c,h,u,d,m){return o(),t("div",null,r)}const f=e(n,[["render",s]]);export{g as __pageData,f as default};