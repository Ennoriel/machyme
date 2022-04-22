export type Type = 'article' | 'website';

export type OpenGraph = {
	slug: string;
	title: string;
	description: string;
	type?: Type;
	keywords?: string;
};
