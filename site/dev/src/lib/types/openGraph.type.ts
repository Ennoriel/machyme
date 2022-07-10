export type Type = 'article' | 'website';

export type OpenGraph = {
	title: string;
	description: string;
	type?: Type;
	keywords?: string;
};
