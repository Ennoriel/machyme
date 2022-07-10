export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\blog\\[keyword].svelte"),
	() => import("..\\..\\src\\routes\\blog\\hello-world.md"),
	() => import("..\\..\\src\\routes\\blog\\index.svelte"),
	() => import("..\\..\\src\\routes\\blog\\svelte-inkjs.md"),
	() => import("..\\..\\src\\routes\\blog\\svelte-observers.md"),
	() => import("..\\..\\src\\routes\\blog\\use-mdsvex.md"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 8], [1]],
	"blog": [[0, 4], [1]],
	"blog/hello-world": [[0, 3], [1]],
	"blog/svelte-inkjs": [[0, 5], [1]],
	"blog/svelte-observers": [[0, 6], [1]],
	"blog/use-mdsvex": [[0, 7], [1]],
	"blog/[keyword]": [[0, 2], [1]]
};