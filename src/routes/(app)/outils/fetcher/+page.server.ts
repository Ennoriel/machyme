import { json } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const url = data.get('url') as string;
		const headers = data.get('headers') as string;

		console.log(url, headers, JSON.parse(headers));

		return await fetch(url, {
			method: 'GET',
			headers: JSON.parse(headers)
		})
			.then(async (res) => {
				return {
					content: await res.text()
				};
			})
			.catch(async (err) => {
				return {
					error: {
						message: err.message,
						stack: err.stack
					}
				};
			});
	}
};
