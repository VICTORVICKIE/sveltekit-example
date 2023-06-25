/** @type {import('./$types').PageLoad} */
export async function load() {
	let result = 1;
	return { result };
}


/**
 * @param {FormDataEntryValue} input
 */
async function you_can_do_this(input) {
	return input;
}

/** @type {import('./$types').Actions} */
export const actions = {
	movies: async ({ request }) => {
		let form_data = await request.formData();

		const { prompt } = Object.fromEntries(form_data);
		console.log(prompt);

		console.log(await you_can_do_this(prompt));

		return { prompt };
	}
};
