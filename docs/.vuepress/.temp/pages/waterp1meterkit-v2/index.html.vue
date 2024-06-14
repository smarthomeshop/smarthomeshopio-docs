<template><div><h1 id="waterp1meterkit-v2-overview" tabindex="-1"><a class="header-anchor" href="#waterp1meterkit-v2-overview"><span>WaterP1MeterKit V2 Overview</span></a></h1>
<img src="@source/.vuepress/public/images/waterp1meterkit/waterp1meterkit-product-shop.png" alt="WaterP1MeterKit Image" style="width: 50%;">
<p>Welcome to the WaterP1MeterKit guide. This section provides step-by-step instructions and additional information for setting up and using your WaterP1MeterKit.</p>
<p>You can also use this guide for the WaterP1MeterKit V1 version. The only difference between WaterP1MeterKit V1 and V2 is that V2 has PoE support built-in by default. In V1, PoE was enabled using an external splitter that separated the PoE power into an Ethernet cable and a USB-C cable. For V2, you can simply plug a PoE-enabled Ethernet cable into the device. Please note that you need to install the Ethernet firmware to use the Ethernet port!</p>
<h2 id="sections" tabindex="-1"><a class="header-anchor" href="#sections"><span>Sections</span></a></h2>
<ul>
<li><RouteLink to="/waterp1meterkit-v2/installation.html">Installation</RouteLink></li>
<li><RouteLink to="/waterp1meterkit-v2/usage.html">Usage</RouteLink></li>
<li><RouteLink to="/waterp1meterkit-v2/troubleshooting.html">Troubleshooting</RouteLink></li>
<li><RouteLink to="/waterp1meterkit-v2/technical-specifications.html">Technical Specifications</RouteLink></li>
<li><RouteLink to="/waterp1meterkit-v2/warranty-and-support.html">Warranty and Support</RouteLink></li>
</ul>
<h2 id="frequently-asked-questions-faq" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions-faq"><span>Frequently Asked Questions (FAQ)</span></a></h2>
<ol>
<li>
<p><strong>How do I install the WaterP1MeterKit?</strong></p>
<ul>
<li>Detailed installation instructions can be found in the <RouteLink to="/waterp1meterkit-v2/installation.html">Installation Guide</RouteLink>.</li>
</ul>
</li>
<li>
<p><strong>Can I use the WaterP1MeterKit to measure only water and/or energy consumption?</strong></p>
<ul>
<li>Yes, you can use the WaterP1MeterKit to measure both water and energy consumption, or just one of the two. Simply connect the appropriate sensor(s) and disable any unused entities in Home Assistant.</li>
</ul>
</li>
<li>
<p><strong>How does the WaterP1MeterKit measure water consumption?</strong></p>
<ul>
<li>The WaterP1MeterKit works by placing a sensor on the 1-liter indication of your water meter. There is a metal plate inside the meter that completes one full rotation for every liter of water used. The kit measures the position of this metal plate to determine the flow rate.</li>
</ul>
</li>
<li>
<p><strong>How does the WaterP1MeterKit measure energy consumption?</strong></p>
<ul>
<li>The WaterP1MeterKit uses a P1 meter cable connected to the P1 port of your energy meter. It reads all data transmitted by the energy meter, including total consumption, instantaneous power usage, and any energy fed back to the grid from solar panels.</li>
</ul>
</li>
<li>
<p><strong>Does the WaterP1MeterKit also measure the energy fed back to the grid from my solar panels?</strong></p>
<ul>
<li>Yes, the WaterP1MeterKit measures all data transmitted by your energy meter through the P1 port, including energy fed back to the grid from solar panels.</li>
</ul>
</li>
<li>
<p><strong>What is the difference between the PoE and USB-C options for the WaterP1MeterKit?</strong></p>
<ul>
<li>Starting from WaterP1MeterKit V2, PoE is built-in by default. On the product page, you can choose between the &quot;With USB-C Adapter Set&quot; and &quot;Without USB-C Adapter Set&quot; options. This choice determines which firmware is installed:
<ul>
<li><strong>With USB-C Adapter Set</strong>: The kit is configured for WiFi connectivity by default, and the Ethernet port is disabled.</li>
<li><strong>Without USB-C Adapter Set</strong>: The kit is configured for Ethernet (PoE) connectivity by default.</li>
</ul>
</li>
<li>You can always switch between the firmware versions. If the green LED on the Ethernet port is on without a connected Ethernet cable, the Ethernet firmware is installed. If the LED is off, the WiFi firmware is installed. For instructions on switching firmware, refer to our <a href="https://smarthomeshop.io/firmware" target="_blank" rel="noopener noreferrer">firmware page</a>.</li>
</ul>
</li>
</ol>
<p>For further assistance, please join our <a href="https://smarthomeshop.io/discord" target="_blank" rel="noopener noreferrer">Discord server</a> for personalized support and community interaction.</p>
</div></template>


