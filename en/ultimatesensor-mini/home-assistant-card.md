# Home Assistant Card

Make sure you install the custom Plotly-graph card using HACS to make the dashboard work.
You can paste the code below in custom YAML card at the frontend editor.
Make sure to replace `ultimatesensor_mini_` with your entity id.

```yaml
square: false
type: grid
cards:
  - square: false
    type: grid
    cards:
      - graph: line
        type: sensor
        entity: sensor.ultimatesensor_mini_scd41_temperature
        detail: 1
        name: Temperature
      - graph: line
        type: sensor
        entity: sensor.ultimatesensor_mini_scd41_humidity
        detail: 1
        name: Humidity
      - graph: line
        type: sensor
        entity: sensor.ultimatesensor_mini_scd41_co2
        detail: 1
        name: CO2
    columns: 3
  - square: false
    type: grid
    cards:
      - graph: line
        type: sensor
        entity: sensor.ultimatesensor_mini_bh1750_illuminance
        detail: 1
        name: Illuminance
      - graph: line
        type: sensor
        entity: sensor.ultimatesensor_mini_voc_index
        detail: 1
        name: VOC Index
      - graph: line
        type: sensor
        entity: sensor.ultimatesensor_mini_nox_index
        detail: 1
        name: NOx Index
    columns: 3
  - square: false
    type: grid
    cards:
      - type: gauge
        entity: sensor.ultimatesensor_mini_scd41_co2
        severity:
          green: 300
          yellow: 800
          red: 1500
        min: 400
        max: 3000
        needle: true
        name: CO2
    columns: 1
  - square: false
    type: custom:plotly-graph
    title: Live persons detected map
    refresh_interval: 1
    hours_to_show: current_day
    config:
      modeBarButtonsToRemove:
        - select2d
        - lasso2d
        - toImage
      displaylogo: false
    layout:
      height: 240
      margin:
        l: 40
        r: 20
        t: 20
        b: 55
      showlegend: true
      xaxis:
        showticklabels: true
        dtick: 1000
        visible: true
        gridcolor: RGBA(200,200,200,0.15)
        zerolinecolor: RGBA(200,200,200,0.15)
        type: number
        fixedrange: true
        range:
          - 4000
          - -4000
      yaxis:
        showticklabels: true
        dtick: 1000
        visible: true
        gridcolor: RGBA(200,200,200,0.15)
        zerolinecolor: RGBA(200,200,200,0.15)
        scaleanchor: x
        scaleratio: 1
        fixedrange: true
        range:
          - 7500
          - 0
    entities:
      - entity: ''
        fn_var1: $ex vars.sensor_id = "234234";
        fn_var2: $ex vars.sensor_name_prefix = "sensor.ultimatesensor_mini_";
        fn_var3: $ex vars.number_name_prefix = "number.ultimatesensor_mini_";
        fn_var4: $ex vars.is_inch_unit = false;
        fn_var5: $ex vars.max_distance = 10 * hass.states[vars.number_name_prefix + "max_distance"].state;
      - entity: ''
        name: Target1
        marker:
          size: 10
          symbol: star-diamond
        line:
          shape: spline
          width: 5
        x:
          - >-
            $ex { var x = hass.states[vars.sensor_name_prefix + "target_1_x"
            ].state; var y = hass.states[vars.sensor_name_prefix +
            "target_1_y"].state; if (x == 0 && y == 0) { return -9999 }; if
            (vars.is_inch_unit) { x = x * 25.4 }; return x; }
        'y':
          - >-
            $ex { var x = hass.states[vars.sensor_name_prefix + "target_1_x"
            ].state; var y = hass.states[vars.sensor_name_prefix +
            "target_1_y"].state; if (x == 0 && y == 0) { return -9999 }; if
            (vars.is_inch_unit) { y = y * 25.4 }; return y; }
      - entity: ''
        name: Target2
        marker:
          size: 10
          symbol: star-diamond
        line:
          shape: spline
          width: 5
        x:
          - >-
            $ex { var x = hass.states[vars.sensor_name_prefix + "target_2_x"
            ].state; var y = hass.states[vars.sensor_name_prefix +
            "target_2_y"].state; if (x == 0 && y == 0) { return -9999 }; if
                (vars.is_inch_unit) { x = x * 25.4 }; return x; }
        'y':
          - >-
            $ex { var x = hass.states[vars.sensor_name_prefix + "target_2_x"
            ].state; var y = hass.states[vars.sensor_name_prefix +
            "target_2_y"].state; if (x == 0 && y == 0) { return -9999 }; if
            (vars.is_inch_unit) { y = y * 25.4 }; return y; }
      - entity: ''
        internal: false
        name: Target3
        marker:
          size: 10
          symbol: star-diamond
        line:
          shape: spline
          width: 5
        x:
          - >-
            $ex { var x = hass.states[vars.sensor_name_prefix + "target_3_x"
            ].state; var y = hass.states[vars.sensor_name_prefix +
            "target_3_y"].state; if (x == 0 && y == 0) { return -9999 }; if
            (vars.is_inch_unit) { x = x * 25.4 }; return x; }
        'y':
          - >-
            $ex { var x = hass.states[vars.sensor_name_prefix + "target_3_x"
            ].state; var y = hass.states[vars.sensor_name_prefix +
            "target_3_y"].state; if (x == 0 && y == 0) { return -9999 }; if
            (vars.is_inch_unit) { y = y * 25.4 }; return y; }
      - entity: ''
        name: Zone1
        mode: lines
        fill: toself
        fillcolor: RGBA(20,200,0,0.06)
        line:
          color: RGBA(20,200,0,0.2)
          shape: line
          width: 2
        x:
          - $ex hass.states[vars.number_name_prefix + "zone_1_begin_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_1_begin_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_1_end_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_1_end_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_1_begin_x" ].state
        'y':
          - $ex hass.states[vars.number_name_prefix + "zone_1_begin_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_1_end_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_1_end_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_1_begin_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_1_begin_y" ].state
      - entity: ''
        name: Zone2
        mode: lines
        fill: toself
        fillcolor: RGBA(200,20,0,0.06)
        line:
          color: RGBA(200,20,0,0.2)
          shape: line
          width: 2
        x:
          - $ex hass.states[vars.number_name_prefix + "zone_2_begin_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_2_begin_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_2_end_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_2_end_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_2_begin_x" ].state
        'y':
          - $ex hass.states[vars.number_name_prefix + "zone_2_begin_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_2_end_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_2_end_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_2_begin_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_2_begin_y" ].state
      - entity: ''
        name: Zone3
        mode: lines
        fill: toself
        fillcolor: RGBA(600,350,0,0.06)
        line:
          color: RGBA(600,350,0,0.2)
          shape: line
          width: 2
        x:
          - $ex hass.states[vars.number_name_prefix + "zone_3_begin_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_3_begin_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_3_end_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_3_end_x" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_3_begin_x" ].state
        'y':
          - $ex hass.states[vars.number_name_prefix + "zone_3_begin_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_3_end_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_3_end_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_3_begin_y" ].state
          - $ex hass.states[vars.number_name_prefix + "zone_3_begin_y" ].state
      - entity: ''
        name: Coverage
        mode: lines
        fill: tonexty
        fillcolor: rgba(168, 216, 234, 0.15)
        hoverinfo: none
        line:
          shape: line
          width: 0.7
          dash: dot
        x:
          - 0
          - $ex vars.max_distance * Math.sin(8 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(7 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(6 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(5 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(4 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(3 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(2 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(1 * Math.PI / 24)
          - 0
          - $ex vars.max_distance * Math.sin(-1 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(-2 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(-3 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(-4 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(-5 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(-6 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(-7 * Math.PI / 24)
          - $ex vars.max_distance * Math.sin(-8 * Math.PI / 24)
          - 0
        y:
          - 0
          - $ex vars.max_distance * Math.cos(8 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(7 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(6 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(5 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(4 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(3 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(2 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(1 * Math.PI / 24)
          - $ex vars.max_distance
          - $ex vars.max_distance * Math.cos(-1 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(-2 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(-3 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(-4 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(-5 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(-6 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(-7 * Math.PI / 24)
          - $ex vars.max_distance * Math.cos(-8 * Math.PI / 24)
          - 0
    raw_plotly_config: true
  - square: false
    type: grid
    cards:
      - type: entities
        entities:
          - entity: sensor.ultimatesensor_mini_zone_1_target_count
            name: People detected in Zone 1
          - entity: binary_sensor.ultimatesensor_mini_target_1_active
            name: Person 1 Detected
          - entity: sensor.ultimatesensor_mini_target_1_distance
            name: Person 1 Distance
          - entity: sensor.ultimatesensor_mini_target_1_speed
            name: Person 1 Speed
          - entity: binary_sensor.ultimatesensor_mini_target_2_active
            name: Person 2 Detected
          - entity: sensor.ultimatesensor_mini_target_2_distance
            name: Person 2 Distance
          - entity: sensor.ultimatesensor_mini_target_2_speed
            name: Person 2 Speed
          - entity: binary_sensor.ultimatesensor_mini_target_3_active
            name: Person 3 Detected
          - entity: sensor.ultimatesensor_mini_target_3_distance
            name: Person 3 Distance
          - entity: sensor.ultimatesensor_mini_target_3_speed
            name: Person 3 Speed
            secondary_info: none
    columns: 1
  - type: entities
    entities:
      - entity: select.ultimatesensor_mini_assistent_pipeline
      - entity: select.ultimatesensor_mini_klaar_met_spraakdetectie
      - entity: switch.ultimatesensor_mini_use_wake_word
        name: Voice control activated
  - type: entities
    entities:
      - entity: media_player.ultimatesensor_mini_us_mini_media_player
        name: Media Player
  - type: entities
    entities:
      - entity: sensor.ultimatesensor_mini_pm_0_5_m_number_concentration
        name: <0.5µm Number concentration
      - entity: sensor.ultimatesensor_mini_pm_1_m_number_concentration
        name: <1µm Number concentration
      - entity: sensor.ultimatesensor_mini_pm_2_5_m_number_concentration
        name: <2.5µm Number concentration
      - entity: sensor.ultimatesensor_mini_pm_4_m_number_concentration
        name: <4µm Number concentration
      - entity: sensor.ultimatesensor_mini_pm_10_m_number_concentration
        name: <10µm Number concentration
      - entity: sensor.ultimatesensor_mini_pm_1_m_weight_concentration
        name: <1µm Weight concentration
      - entity: sensor.ultimatesensor_mini_pm_2_5_m_weight_concentration
        name: <2.5µm Weight concentration
      - entity: sensor.ultimatesensor_mini_pm_4_m_weight_concentration
        name: <4µm Weight concentration
      - entity: sensor.ultimatesensor_mini_pm_10_m_weight_concentration
        name: <10µm Weight concentration
      - entity: sensor.ultimatesensor_mini_typical_particle_size
        name: Typical Partical Size
    title: Dust sensor
    state_color: false
  - type: light
    entity: light.ultimatesensor_mini_front_light
    name: Status LED Front
  - type: light
    entity: light.ultimatesensor_mini_back_light
    name: Status LED Back
columns: 1
```
