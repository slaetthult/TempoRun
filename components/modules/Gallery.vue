<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

const modules = [Navigation, Pagination];
</script>

<template>
	<div class="topic-slider">
		<div class="grid-wrap">
			<div class="w12 lw24">
				<h2>Swiper Example</h2>
				<ClientOnly>
					<swiper
							:class="'swiper'"
							:slides-per-view="1"
							:space-between="0"
							:modules="modules"
							:navigation="true"
							:pagination="{clickable:true}"
							:breakpoints="{
						  '768': {
							slidesPerView: 2,
							spaceBetween: 30
						  },
						  '1440': {
							slidesPerView: 3,
							spaceBetween: 88
						  }
						}"
					>
						<swiper-slide>
							<div class="topic-slider__element">
								<figure>
									<picture>
										<source media="(min-width: 768px)" srcset="https://via.placeholder.com/480x144">
										<source srcset="https://via.placeholder.com/480x144">
										<img src="https://via.placeholder.com/480x144" alt="alt">
									</picture>
								</figure>
								<h3>Headline</h3>
								<p>
									Text
								</p>
								<NuxtLink to="/" class="button outlined">Read more</NuxtLink>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="topic-slider__element">
								<figure>
									<picture>
										<source media="(min-width: 768px)" srcset="https://via.placeholder.com/480x144">
										<source srcset="https://via.placeholder.com/480x144">
										<img src="https://via.placeholder.com/480x144" alt="alt">
									</picture>
								</figure>
								<h3>Headline</h3>
								<p>
									Text
								</p>
								<NuxtLink to="/" class="button outlined">Read more</NuxtLink>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="topic-slider__element">
								<figure>
									<picture>
										<source media="(min-width: 768px)" srcset="https://via.placeholder.com/480x144">
										<source srcset="https://via.placeholder.com/480x144">
										<img src="https://via.placeholder.com/480x144" alt="alt">
									</picture>
								</figure>
								<h3>Headline</h3>
								<p>
									Text
								</p>
								<NuxtLink to="/" class="button outlined">Read more</NuxtLink>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="topic-slider__element">
								<figure>
									<picture>
										<source media="(min-width: 768px)" srcset="https://via.placeholder.com/480x144">
										<source srcset="https://via.placeholder.com/480x144">
										<img src="https://via.placeholder.com/480x144" alt="alt">
									</picture>
								</figure>
								<h3>Headline</h3>
								<p>
									Text
								</p>
								<NuxtLink to="/" class="button outlined">Read more</NuxtLink>
							</div>
						</swiper-slide>
					</swiper>
				</ClientOnly>
			</div>
		</div>
	</div>
</template>
