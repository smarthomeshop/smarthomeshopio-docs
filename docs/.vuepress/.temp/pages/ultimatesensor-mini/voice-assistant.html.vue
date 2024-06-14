<template><div><h1 id="voice-assistant-guide" tabindex="-1"><a class="header-anchor" href="#voice-assistant-guide"><span>Voice Assistant Guide</span></a></h1>
<p>The UltimateSensor Mini allows integration with voice assistants, enabling you to control various aspects of your smart home through voice commands. This guide will walk you through the setup process.</p>
<h2 id="setting-up-the-voice-assistant" tabindex="-1"><a class="header-anchor" href="#setting-up-the-voice-assistant"><span>Setting up the Voice Assistant</span></a></h2>
<ol>
<li>
<p><strong>Initial Setup</strong></p>
<ul>
<li>Follow the instructions on the Home Assistant <a href="https://www.home-assistant.io/voice_control/voice_remote_local_assistant/" target="_blank" rel="noopener noreferrer">voice control page</a> to ensure your Home Assistant instance is ready for voice control. Install the following add-ons: openWakeWord, Piper, and Whisper.</li>
<li>After installing these add-ons, reboot Home Assistant. Enable the three installed add-ons and go to <strong>Home Assistant -&gt; Settings -&gt; Integrations</strong>. Select <strong>Add Integration</strong> and add each of the three named add-ons as integrations. Continue to the next step.</li>
</ul>
</li>
<li>
<p><strong>Create a Voice Assistant for the UltimateSensor Mini</strong></p>
<ul>
<li>In Home Assistant, navigate to <strong>Settings -&gt; Voice Assistant</strong>. Click on <strong>Add Assistant</strong>. Give it a name (e.g., UltimateSensor Mini Voice) and select the language. Choose Home Assistant as the conversation agent and select the same language.
For speech-to-text, select faster-whisper.
For text-to-speech, select Piper, the same language, and a voice model.
Then, in Wake Word, select openWakeWord and choose your preferred wake word. This is the word you will say to the UltimateSensor Mini to trigger it to listen.</li>
</ul>
</li>
<li>
<p><strong>Configure Voice Commands on the UltimateSensor Mini</strong></p>
<ul>
<li>In Home Assistant, navigate to <strong>Settings &gt; Devices &amp; Services &gt; ESPHome</strong>.</li>
<li>Select the UltimateSensor Mini device. Go to the configuration section. Here you will see the Assistant-pipeline, which is the selected pipeline (you can edit this in <strong>Home Assistant -&gt; Settings -&gt; Voice Assistants</strong>).</li>
</ul>
</li>
</ol>
<h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h2>
<ol>
<li><strong>Voice Assistant Not Working</strong>
<ul>
<li>Ensure the voice assistant has been fully configured. Follow the detailed steps in this guide and the <a href="https://www.home-assistant.io/voice_control/voice_remote_local_assistant/" target="_blank" rel="noopener noreferrer">Home Assistant voice control page</a>.</li>
<li>Check if the microphone and speaker are properly connected and functioning.</li>
<li>Verify that the voice assistant settings in Home Assistant are correctly configured.</li>
<li>Ensure that the <strong>Use Wake Word</strong> option is enabled in the UltimateSensor Mini settings (via ESPHome in settings).</li>
<li>When you say the wake word configured in step 2, the device should listen, indicated by a light on the UltimateSensor Mini. The entity <strong>Assistant working</strong> should turn busy. If it does not respond a second time, try toggling the <strong>Use Wake Word</strong> option off and on.</li>
</ul>
</li>
</ol>
<h2 id="additional-resources" tabindex="-1"><a class="header-anchor" href="#additional-resources"><span>Additional Resources</span></a></h2>
<ul>
<li>For comprehensive details, refer to the <a href="https://www.home-assistant.io/voice_control/voice_remote_local_assistant/" target="_blank" rel="noopener noreferrer">Home Assistant voice control documentation</a>.</li>
<li>Join our <a href="https://smarthomeshop.io/discord" target="_blank" rel="noopener noreferrer">Discord server</a> for community support and further assistance.</li>
</ul>
</div></template>


