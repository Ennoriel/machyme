import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
	return {
		props: {
			posts: (await parent()).posts,
			keyword: params.keyword
		}
	};
};
