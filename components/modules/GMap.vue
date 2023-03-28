<script setup>
import { GoogleMap, CustomMarker, InfoWindow } from "vue3-google-map";
const center = { lat: 51.2415183209588, lng: 7.194109286153713 };

const $thisModule = ref(null);
const showGMap = ref(false);

onMounted(() => {
	checkIfModuleIsInViewport();
	window.addEventListener("scroll", checkIfModuleIsInViewport);
});

function checkIfModuleIsInViewport(){

	if($thisModule && $thisModule.value && elementInViewport($thisModule.value)){
		showGMap.value = true;
		window.removeEventListener("scroll", checkIfModuleIsInViewport);
	}

}

</script>

<template>
	<div ref="$thisModule" class="gmap" id="map">
		<div class="grid-wrap">
			<div v-if="showGMap" class="w12 lw24 gmap__map-wrap">
				<ClientOnly>
					<GoogleMap api-key="AIzaSyDaUcHTIc9OtETTNev_lW1hEVnZvTmVeSk" style="height:310px;" :styles="mapStyles" :center="center" :zoom="13" :mapTypeControl="false">

						<CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">
							<div>
								<img src="/img/icons/map-marker.png" alt="Marker">
							</div>
						</CustomMarker>

					</GoogleMap>
				</ClientOnly>
			</div>
		</div>
	</div>
</template>
