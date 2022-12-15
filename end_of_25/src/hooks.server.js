import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth';

// runs 1st
async function logger({ event, resolve }) {
	const start_time = Date.now();
	// Wait on response, run other hooks and load
	const response = await resolve(event);

	console.log(`${Date.now() - start_time}ms  ${event.request.method} ${event.url.pathname}`);

	return response;
}

// runs 2nd
function authorize({ event, resolve }) {
	const user = auth();
	event.locals.user = user;
	return resolve(event);
}

export const handle = sequence(logger, authorize);

// Intercepting Fetch
// export function handleFetch({ request, fetch }) {
// 	return fetch(request);
// }

// Intercept Errors
// export function handleError({ error, event }) {
// 	// logger(error, event)
// 	return {
// 		message: 'Oops, im intercepting in a hook',
// 		code: error.code
// 	};
// }
