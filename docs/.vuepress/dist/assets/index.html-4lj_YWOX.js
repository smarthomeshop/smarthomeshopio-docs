import{_ as o,c as s,a as e,b as n,w as i,d as t,e as a,r as l,o as u}from"./app-CKRILy25.js";const h="/assets/waterp1meterkit-product-shop-B0aTJgR3.png",d={},c=a('<h1 id="waterp1meterkit-v2-overview" tabindex="-1"><a class="header-anchor" href="#waterp1meterkit-v2-overview"><span>WaterP1MeterKit V2 Overview</span></a></h1><img src="'+h+'" alt="WaterP1MeterKit Image" style="width:50%;"><p>Welcome to the WaterP1MeterKit guide. This section provides step-by-step instructions and additional information for setting up and using your WaterP1MeterKit.</p><p>You can also use this guide for the WaterP1MeterKit V1 version. The only difference between WaterP1MeterKit V1 and V2 is that V2 has PoE support built-in by default. In V1, PoE was enabled using an external splitter that separated the PoE power into an Ethernet cable and a USB-C cable. For V2, you can simply plug a PoE-enabled Ethernet cable into the device. Please note that you need to install the Ethernet firmware to use the Ethernet port!</p><h2 id="sections" tabindex="-1"><a class="header-anchor" href="#sections"><span>Sections</span></a></h2>',5),p=e("h2",{id:"frequently-asked-questions-faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frequently-asked-questions-faq"},[e("span",null,"Frequently Asked Questions (FAQ)")])],-1),m=e("p",null,[e("strong",null,"How do I install the WaterP1MeterKit?")],-1),f=a('<li><p><strong>Can I use the WaterP1MeterKit to measure only water and/or energy consumption?</strong></p><ul><li>Yes, you can use the WaterP1MeterKit to measure both water and energy consumption, or just one of the two. Simply connect the appropriate sensor(s) and disable any unused entities in Home Assistant.</li></ul></li><li><p><strong>How does the WaterP1MeterKit measure water consumption?</strong></p><ul><li>The WaterP1MeterKit works by placing a sensor on the 1-liter indication of your water meter. There is a metal plate inside the meter that completes one full rotation for every liter of water used. The kit measures the position of this metal plate to determine the flow rate.</li></ul></li><li><p><strong>How does the WaterP1MeterKit measure energy consumption?</strong></p><ul><li>The WaterP1MeterKit uses a P1 meter cable connected to the P1 port of your energy meter. It reads all data transmitted by the energy meter, including total consumption, instantaneous power usage, and any energy fed back to the grid from solar panels.</li></ul></li><li><p><strong>Does the WaterP1MeterKit also measure the energy fed back to the grid from my solar panels?</strong></p><ul><li>Yes, the WaterP1MeterKit measures all data transmitted by your energy meter through the P1 port, including energy fed back to the grid from solar panels.</li></ul></li><li><p><strong>What is the difference between the PoE and USB-C options for the WaterP1MeterKit?</strong></p><ul><li>Starting from WaterP1MeterKit V2, PoE is built-in by default. On the product page, you can choose between the &quot;With USB-C Adapter Set&quot; and &quot;Without USB-C Adapter Set&quot; options. This choice determines which firmware is installed: <ul><li><strong>With USB-C Adapter Set</strong>: The kit is configured for WiFi connectivity by default, and the Ethernet port is disabled.</li><li><strong>Without USB-C Adapter Set</strong>: The kit is configured for Ethernet (PoE) connectivity by default.</li></ul></li><li>You can always switch between the firmware versions. If the green LED on the Ethernet port is on without a connected Ethernet cable, the Ethernet firmware is installed. If the LED is off, the WiFi firmware is installed. For instructions on switching firmware, refer to our <a href="https://smarthomeshop.io/firmware" target="_blank" rel="noopener noreferrer">firmware page</a>.</li></ul></li>',5),g=e("p",null,[t("For further assistance, please join our "),e("a",{href:"https://smarthomeshop.io/discord",target:"_blank",rel:"noopener noreferrer"},"Discord server"),t(" for personalized support and community interaction.")],-1);function w(y,b){const r=l("RouteLink");return u(),s("div",null,[c,e("ul",null,[e("li",null,[n(r,{to:"/waterp1meterkit-v2/installation.html"},{default:i(()=>[t("Installation")]),_:1})]),e("li",null,[n(r,{to:"/waterp1meterkit-v2/usage.html"},{default:i(()=>[t("Usage")]),_:1})]),e("li",null,[n(r,{to:"/waterp1meterkit-v2/troubleshooting.html"},{default:i(()=>[t("Troubleshooting")]),_:1})]),e("li",null,[n(r,{to:"/waterp1meterkit-v2/technical-specifications.html"},{default:i(()=>[t("Technical Specifications")]),_:1})]),e("li",null,[n(r,{to:"/waterp1meterkit-v2/warranty-and-support.html"},{default:i(()=>[t("Warranty and Support")]),_:1})])]),p,e("ol",null,[e("li",null,[m,e("ul",null,[e("li",null,[t("Detailed installation instructions can be found in the "),n(r,{to:"/waterp1meterkit-v2/installation.html"},{default:i(()=>[t("Installation Guide")]),_:1}),t(".")])])]),f]),g])}const k=o(d,[["render",w],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/waterp1meterkit-v2/","title":"WaterP1MeterKit V2 Overview","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Sections","slug":"sections","link":"#sections","children":[]},{"level":2,"title":"Frequently Asked Questions (FAQ)","slug":"frequently-asked-questions-faq","link":"#frequently-asked-questions-faq","children":[]}],"git":{"updatedTime":1718399159000,"contributors":[{"name":"Dwain Scheeren","email":"info@dwain.nl","commits":3}]},"filePathRelative":"waterp1meterkit-v2/README.md"}');export{k as comp,v as data};