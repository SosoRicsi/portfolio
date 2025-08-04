<script setup lang="ts">
import type { Contact } from '~/types';


const props = defineProps<{
	contact: Contact
}>();

</script>

<template>
	<span class="text-sm text-gray-500 uppercase tracking-wider">{{ props.contact.label }}</span>
	<span class="text-sm font-light">{{ props.contact.value }}</span>
</template>