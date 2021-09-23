<template>
  <div class="street-map">
    <div class="grid-wrap">
      <div class="w12">
        <h2>Street Map Example</h2>
        <client-only>
          <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                  data-projection="EPSG:4326">
            <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

            <vl-geoloc :tracking="false">
              <template slot-scope="geoloc">
                <vl-feature>
                  <vl-geom-point :coordinates="markerPositions[0]"></vl-geom-point>
                  <vl-style-box>
                    <vl-style-icon
                      src="/icons/map-marker.png"
                      :scale="1"
                      :anchor="[0.5, 1]"
                    ></vl-style-icon>
                  </vl-style-box>
                </vl-feature>
                <vl-feature>
                  <vl-geom-point :coordinates="markerPositions[1]"></vl-geom-point>
                  <vl-style-box>
                    <vl-style-icon
                      src="/icons/map-marker.png"
                      :scale="1"
                      :anchor="[0.5, 1]"
                    ></vl-style-icon>
                  </vl-style-box>
                </vl-feature>
              </template>
            </vl-geoloc>


            <vl-layer-tile>
              <vl-source-xyz
                url="http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              >
              </vl-source-xyz>
            </vl-layer-tile>
          </vl-map>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      zoom: 15,
      center: [	6.783333, 51.233334],
      rotation: 0,
      markerPositions: {
        0: [	6.783333, 51.233334],
        1: [	6.883333, 51.333334]
      }
    }
  },
}
</script>
