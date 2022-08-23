export const manifest = {
	appDir: "_app",
	assets: new Set(["art.svg","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-b706d172.js","imports":["_app/immutable/start-b706d172.js","_app/immutable/chunks/index-195ca813.js","_app/immutable/chunks/index-39a2e48b.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "rss.xml",
				pattern: /^\/rss\.xml$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/rss.xml.ts.js')
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				id: "show",
				pattern: /^\/show\/?$/,
				names: [],
				types: [],
				path: "/show",
				shadow: null,
				a: [0,5,6],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/hello-world",
				pattern: /^\/blog\/hello-world\/?$/,
				names: [],
				types: [],
				path: "/blog/hello-world",
				shadow: null,
				a: [0,3,7],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/svelte-inkjs",
				pattern: /^\/blog\/svelte-inkjs\/?$/,
				names: [],
				types: [],
				path: "/blog/svelte-inkjs",
				shadow: null,
				a: [0,3,8],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/svelte-observers",
				pattern: /^\/blog\/svelte-observers\/?$/,
				names: [],
				types: [],
				path: "/blog/svelte-observers",
				shadow: null,
				a: [0,3,9],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/use-mdsvex",
				pattern: /^\/blog\/use-mdsvex\/?$/,
				names: [],
				types: [],
				path: "/blog/use-mdsvex",
				shadow: null,
				a: [0,3,10],
				b: [1]
			},
			{
				type: 'page',
				id: "show/before-after",
				pattern: /^\/show\/before-after\/?$/,
				names: [],
				types: [],
				path: "/show/before-after",
				shadow: null,
				a: [0,5,11],
				b: [1]
			},
			{
				type: 'page',
				id: "show/floating-squares",
				pattern: /^\/show\/floating-squares\/?$/,
				names: [],
				types: [],
				path: "/show/floating-squares",
				shadow: null,
				a: [0,5,12],
				b: [1]
			},
			{
				type: 'page',
				id: "show/scroll",
				pattern: /^\/show\/scroll\/?$/,
				names: [],
				types: [],
				path: "/show/scroll",
				shadow: null,
				a: [0,5,13],
				b: [1]
			},
			{
				type: 'page',
				id: "show/toto",
				pattern: /^\/show\/toto\/?$/,
				names: [],
				types: [],
				path: "/show/toto",
				shadow: null,
				a: [0,5,14],
				b: [1]
			},
			{
				type: 'page',
				id: "show/moving-bg/color",
				pattern: /^\/show\/moving-bg\/color\/?$/,
				names: [],
				types: [],
				path: "/show/moving-bg/color",
				shadow: null,
				a: [0,5,15],
				b: [1]
			},
			{
				type: 'page',
				id: "show/moving-bg/image",
				pattern: /^\/show\/moving-bg\/image\/?$/,
				names: [],
				types: [],
				path: "/show/moving-bg/image",
				shadow: null,
				a: [0,5,16],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/[keyword]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["keyword"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3,17],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
