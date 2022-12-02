<script setup>

</script>

<template>
	<div class="faq-accordion">
		<div class="grid-wrap">
			<div class="w12">
				<h2>Accordion example</h2>
				<ClientOnly>
					<vue-collapsible-panel-group accordion>
						<vue-collapsible-panel :expanded="false">
							<template #title>
								Accordion title 1
							</template>
							<template #content>
								<div>
									Accordion text 1
								</div>
							</template>
						</vue-collapsible-panel>
						<vue-collapsible-panel :expanded="false">
							<template #title>
								Accordion title 1
							</template>
							<template #content>
								<div>
									Accordion text 1
								</div>
							</template>
						</vue-collapsible-panel>
						<vue-collapsible-panel :expanded="false">
							<template #title>
								Accordion title 1
							</template>
							<template #content>
								<div>
									Accordion text 1
								</div>
							</template>
						</vue-collapsible-panel>
					</vue-collapsible-panel-group>
				</ClientOnly>
			</div>
		</div>
	</div>
</template>
