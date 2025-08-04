<script setup lang="ts">
import { ref } from 'vue'
import NavItem from '~/components/NavItem.vue'
import type { Contact, Project, Skill } from '~/types'

const activeSection = ref('about')
const scrollContainer = ref(null)

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const navigation = ref([
	{ id: 'about', name: 'Rólam' },
	{ id: 'skills', name: 'Technológiák' },
	{ id: 'projects', name: 'Projektjeim' },
]);

const contacts = ref<Contact[]>([
	{ label: 'Email', value: 'info@jarkoricsi.eu' },
	{ label: 'Tartózkodási hely', value: 'Győr, HU' },
	{ label: 'Státusz', value: 'Elérhető' }
]);

const skills = ref<Skill[]>([
	{ title: 'Laravel', url: 'https://laravel.com' },
	{ title: 'Vue.js', url: 'https://vuejs.org' },
	{ title: 'PHP', url: 'https://php.net' },
	{ title: 'Next.js', url: 'https://nextjs.org' },
	{ title: 'TailwindCSS', url: 'https://tailwindcss.com/' },
]);

const projects = ref<Project[]>([
	{
		id: 1,
		title: 'Célom a Történelem blog oldal',
		description: 'Egy történelmi blog oldal, amelyet a nemsokára induló youtube csatornámhoz készítettem.',
		technologies: [
			{ title: 'Next.js', url: 'https://nextjs.org' },
			{ title: 'TailwindCSS', url: 'https://tailwindcss.com/' },
			{ title: 'PHP', url: 'https://php.net' },
		],
		url: "https://celom-a-tortenelem.eu",
		image_url: "cat-banner.png"
	},
]);

const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element && scrollContainer.value) {
		const containerTop = scrollContainer.value.offsetTop
		const elementTop = element.offsetTop
		scrollContainer.value.scrollTo({
			top: elementTop - containerTop,
			behavior: 'smooth'
		})
		isMobileMenuOpen.value = false
	}
}

const handleScroll = () => {
	if (!scrollContainer.value) return
	const scrollTop = scrollContainer.value.scrollTop
	const sections = navigation.value.map(nav => nav.id)

	for (let i = sections.length - 1; i >= 0; i--) {
		const element = document.getElementById(sections[i])
		if (element && element.offsetTop <= scrollTop + 200) {
			activeSection.value = sections[i]
			break
		}
	}
}

useHead({
	title: "Jarkó Ricsi"
})
</script>


<template>
	<!-- Hamburger menü ikon mobilra -->
	<div class="md:hidden p-4 fixed top-0 left-0 z-50">
		<button @click="toggleMobileMenu">
			<span class="text-black text-3xl">☰</span>
		</button>
	</div>

	<!-- Menü overlay háttér (mobil) -->
	<div v-if="isMobileMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" @click="toggleMobileMenu"></div>

	<div class="h-screen flex overflow-hidden bg-black text-white">
		<!-- Sidebar (mobilon becsúszik) -->
		<div class="fixed inset-y-0 left-0 z-40 w-full bg-black p-8 border-r border-gray-800 transform transition-transform duration-300 md:relative md:w-1/4 md:p-16 md:translate-x-0"
			:class="{ '-translate-x-full': !isMobileMenuOpen, 'translate-x-0': isMobileMenuOpen }">
			<div class="flex flex-col justify-between h-full">
				<div>
					<div class="mb-16">
						<h1 class="text-5xl font-light mb-4 tracking-tight">Jarkó Richárd</h1>
						<p class="text-xl text-gray-400 font-light">Hobbi Webfejlesztő</p>
						<div class="w-16 h-px bg-white mt-8"></div>
					</div>

					<nav class="mb-16">
						<ul class="space-y-6">
							<li v-for="(section, index) in navigation" :key="section.id">
								<NavItem :index :active-section :section @scroll-to-section="scrollToSection" />
							</li>
						</ul>
					</nav>
				</div>

				<div class="space-y-4">
					<div v-for="contact in contacts" :key="contact.label"
						class="flex justify-between items-center py-2 border-b border-gray-800">
						<contact-card :contact />
					</div>
				</div>
			</div>
		</div>

		<!-- Tartalom -->
		<div class="flex-1 h-full overflow-y-auto bg-white text-black" @scroll="handleScroll" ref="scrollContainer">
			<section id="about" class="min-h-screen flex items-center p-16">
				<div class="max-w-lg">
					<h2 class="text-4xl font-light mb-8 text-black">Rólam</h2>
					<p class="text-lg leading-relaxed text-gray-700 mb-8">
						2022 elején kezdtem el érdeklődni a webfejlesztés iránt, és azóta autodidakta módon mélyítem a
						tudásom, elsősorban a backend területén.
					</p>
					<p class="text-lg leading-relaxed text-gray-700 mb-8">
						Bár hosszú távon a történelem irányába szeretnék továbblépni, nyitott vagyok bármilyen
						együttműködésre.
					</p>
				</div>
			</section>

			<section id="skills" class="min-h-screen p-16">
				<h2 class="text-4xl font-light mb-16 text-black">Technológiák</h2>
				<div class="grid grid-cols-2 gap-16">
					<tech-card :technologies="skills" />
				</div>
			</section>

			<section id="projects" class="min-h-screen p-16">
				<h2 class="text-4xl font-light mb-16 text-black">Projektjeim</h2>
				<div class="space-y-24">
					<div v-for="(project, index) in projects" :key="project.id">
						<div class="flex items-start justify-between mb-8">
							<project-card :project :index />
						</div>
						<div class="h-px bg-gray-200"></div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>


<style scoped>
.overflow-y-auto::-webkit-scrollbar {
	width: 2px;
}

.overflow-y-auto::-webkit-scrollbar-track {
	background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
	background: #000;
}

html {
	scroll-behavior: smooth;
}

* {
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>