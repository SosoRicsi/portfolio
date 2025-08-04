<script setup lang="ts">
import type { NavItem } from '~/types';

const props = defineProps<{
	section: NavItem;
	activeSection: string;
	index: number;
}>();

const emits = defineEmits<{
	(e: 'scrollToSection', sectionId: string): void;
}>();

const scrollToSection = (id: string) => {
	emits('scrollToSection', id);
};

</script>

<template>
	<button @click="scrollToSection(props.section.id)" :class="['text-left text-lg font-light transition-all duration-300 hover:text-white cursor-pointer',
		props.activeSection === section.id ? 'text-white' : 'text-gray-500']">
		<span class="text-xs text-gray-600 mr-4">{{ props.index + 1 }}</span>
		{{ props.section.name }}
	</button>
</template>