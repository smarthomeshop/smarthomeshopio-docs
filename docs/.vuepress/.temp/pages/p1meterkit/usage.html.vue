<template><div><h1 id="usage-guide" tabindex="-1"><a class="header-anchor" href="#usage-guide"><span>Usage Guide</span></a></h1>
<p>The P1MeterKit allows you to monitor your energy consumption in real-time through Home Assistant.</p>
<h2 id="real-time-monitoring" tabindex="-1"><a class="header-anchor" href="#real-time-monitoring"><span>Real-Time Monitoring</span></a></h2>
<ol>
<li><strong>Open Home Assistant</strong> and navigate to <strong>Settings</strong>.</li>
<li>Go to <strong>Devices &amp; Services</strong> and look for the <strong>ESPHome</strong> integration. Open the <strong>ESPHome</strong> integration.</li>
<li>Select the <strong>P1MeterKit</strong> device.</li>
<li>Here, you will find all the entities associated with the P1MeterKit, such as electricity and gas consumption.</li>
<li>If you are only using one of the sensors, you can disable the unused entities.</li>
</ol>
<h2 id="historical-data" tabindex="-1"><a class="header-anchor" href="#historical-data"><span>Historical Data</span></a></h2>
<p>To view historical energy data:</p>
<ol>
<li>Navigate to the <strong>History</strong> section in Home Assistant.</li>
<li>Select the desired time period (hour, day, month, or year) and select the P1MeterKit entity to see your data over that period.</li>
</ol>
<h2 id="integrating-with-ha-energy-dashboard" tabindex="-1"><a class="header-anchor" href="#integrating-with-ha-energy-dashboard"><span>Integrating with HA Energy Dashboard</span></a></h2>
<ol>
<li><strong>Open Home Assistant</strong> and navigate to <strong>Settings -&gt; Dashboards</strong>.</li>
<li>Go to the <strong>Energy</strong> dashboard.</li>
<li>Under <strong>Electricity Consumption</strong>, click on <strong>Add Consumption</strong>.</li>
<li>Select the P1MeterKit entity that corresponds to your electricity consumption.</li>
<li>Under <strong>Return to Grid</strong> (if applicable), add the entity for energy fed back to the grid.</li>
</ol>
<!-- For detailed instructions on integrating the P1MeterKit with the HA Energy Dashboard or DSMR-Reader, refer to the [Home Assistant documentation](https://www.home-assistant.io/integrations/esphome/) and the [DSMR-Reader documentation](https://dsmr-reader.readthedocs.io/). -->
<p>By following these steps, you can effectively monitor and analyze your energy consumption using the P1MeterKit and Home Assistant.</p>
</div></template>


