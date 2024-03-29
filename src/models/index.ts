export type Info = {
	fullName: string;
	location: {
		country: string;
		state: string;
		city: string;
	};
	emails: string[];
	phones: { phone: string; whatsApp: boolean }[];
	education: {name: string, course: string, duration: {start: string, end: string}}[]
	productionProjects: {name: string, link: string, preview: string}[]
};

export type Repository = {
	id: number;
	name: string;
	full_name: string;
	html_url: string;
	description: string;
	language: string;
	languages: string[];
	languages_url: string;
};

export type LanguagesObject = Record<string, number>;
