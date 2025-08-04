export interface NavItem {
	id: numbestring;
	name: string;
};

export interface Contact {
	label: string;
	value: string;
}

export interface Skill {
	title: string;
	url: string;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: Skill[];
	url: string;
	image_url: string;
	github_url?: string | null;
}