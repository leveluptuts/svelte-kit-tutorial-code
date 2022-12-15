import { fail } from '@sveltejs/kit';

// POST request for route
export const actions = {
	email: async ({ locals, request }) => {
		if (!locals?.user?.roles?.includes('admin'))
			return fail(401, { error_message: 'un-authorized' });

		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		// Fake send email
		console.log(name, email, message);

		return {
			message: 'Email Sent!'
		};
	},
	test: () => {
		console.log('hit test action');
	}
};
