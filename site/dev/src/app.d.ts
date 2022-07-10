declare namespace App {
	interface Locals {
		posts: import('./lib/types/blogPost.type').BlogPost[];
	}
	// interface Platform {}
	interface Session {
		posts: import('./lib/types/blogPost.type').BlogPost[];
	}
	// interface Stuff {}
}
