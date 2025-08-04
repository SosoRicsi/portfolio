<script setup lang="ts">
import type { Project } from '~/types';

const props = defineProps<{
	project: Project;
	index: number;
}>();

</script>

<template>
	<div class="flex w-full justify-between">
		<div class="flex-1">
			<div class="flex items-center mb-4">
				<span class="text-sm text-black mr-4 bg-gray-200 px-3 py-3">{{ props.index + 1 }}</span>
				<a class="text-2xl font-light" :href="props.project.url" target="_blank">{{ props.project.title }}</a>
			</div>
			<p class="text-gray-600 mb-6 max-w-md leading-relaxed">{{ props.project.description }}</p>
			<div class="flex flex-wrap gap-2 mb-6">
				<tech-card :technologies="props.project.technologies" />
			</div>
			<div class="flex space-x-8">
				<a class="text-sm uppercase tracking-wider text-black hover:text-gray-800 transition-colors cursor-pinter group items-center" :href="props.project.url" target="_blank">
					<span class="cursor-pointer">Projekt megtekintése</span> <span class="group-hover:ml-3 transition-all duration-300 cursor-pointer">→</span>
				</a>
				<a class="text-sm uppercase tracking-wider text-gray-500 hover:text-black transition-colors" v-if="props.project.github_url" :href="props.project.github_url" target="_blank">
					<span class="cursor-pointer">Github</span> <span class="group-hover:ml-3 transition-all duration-300 cursor-pointer">→</span>
				</a>
			</div>
		</div>

		<div class="flex-shrink-0">
			<div class="border-5 border-zinc-200 rounded-xl">
				<img :src="'/images/'+props.project.image_url" :alt="props.project.title+' banner'" class="w-[400px] h-[200px] rounded-lg">
			</div>
		</div>
	</div>
</template>