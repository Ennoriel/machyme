import { getTips } from '$lib/server/static';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return { tips: await getTips() };
}) satisfies PageServerLoad;
