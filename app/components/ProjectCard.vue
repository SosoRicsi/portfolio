<script setup lang="ts">
import type { Project } from '~/types';

const props = defineProps<{
	project: Project;
	index: number;
}>();

</script>

<template>
	<!-- Flex irány vált mobilon -->
	<div class="flex flex-col md:flex-row w-full justify-between gap-8">
		<!-- Bal oldal: tartalom -->
		<div class="flex-1 order-2 md:order-1">
			<!-- Cím -->
			<div class="flex items-center mb-4">
				<span class="text-sm text-black mr-4 bg-gray-200 px-3 py-3">{{ props.index + 1 }}</span>
				<a class="text-2xl font-light" :href="props.project.url" target="_blank">{{ props.project.title }}</a>
			</div>

			<!-- Kép: mobilon itt, desktopon oldalt -->
			<div class="block md:hidden mb-6">
				<div class="border-5 border-zinc-200 rounded-xl">
					<img
						:src="'/images/' + props.project.image_url"
						:alt="props.project.title + ' banner'"
						class="w-full h-auto rounded-lg object-cover"
					>
				</div>
			</div>

			<!-- Technológiák -->
			<div class="flex flex-wrap gap-2 mb-6">
				<tech-card :technologies="props.project.technologies" />
			</div>

			<!-- Leírás -->
			<p class="text-gray-600 mb-6 max-w-md leading-relaxed">{{ props.project.description }}</p>

			<!-- Linkek -->
			<div class="flex flex-wrap gap-8">
				<a
					class="text-sm uppercase tracking-wider text-black hover:text-gray-800 transition-colors cursor-pointer group items-center"
					:href="props.project.url"
					target="_blank"
				>
					<span>Projekt megtekintése</span>
					<span class="group-hover:ml-3 transition-all duration-300">→</span>
				</a>

				<a
					v-if="props.project.github_url"
					class="text-sm uppercase tracking-wider text-gray-500 hover:text-black transition-colors group"
					:href="props.project.github_url"
					target="_blank"
				>
					<span>Github</span>
					<span class="group-hover:ml-3 transition-all duration-300">→</span>
				</a>
			</div>
		</div>

		<!-- Jobb oldal: kép (csak desktopon) -->
		<div class="hidden md:block flex-shrink-0 order-1 md:order-2">
			<div class="border-5 border-zinc-200 rounded-xl">
				<img
					:src="'/images/' + props.project.image_url"
					:alt="props.project.title + ' banner'"
					class="w-[400px] h-[200px] rounded-lg object-cover"
				>
			</div>
		</div>
	</div>
</template>