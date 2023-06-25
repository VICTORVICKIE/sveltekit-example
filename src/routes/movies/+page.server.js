/** @type {import('./$types').PageLoad} */
export async function load() {
	let result = 1;
	return { result };
}

/** @type {import('./$types').Actions} */
export const actions = {
	movies: async ({ request }) => {
		let form_data = await request.formData();
		const { prompt } = Object.fromEntries(form_data);
		console.log(prompt);

		return { prompt };
	}
};
