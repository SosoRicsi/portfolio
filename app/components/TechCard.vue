<script setup lang="ts">
import { defineProps } from 'vue';
import type { Skill } from '~/types';

const props = defineProps<{
	technologies: Skill[]
}>();
</script>

<template>
	<div class="flex flex-wrap gap-2 mb-6">
		<a v-for="tech in technologies" :key="tech.url" :href="tech.url" target="_blank"
			class="text-xs uppercase tracking-wider text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-600 transition-all duration-300 px-3 py-1">
			{{ tech.title }}
		</a>
	</div>
</template>