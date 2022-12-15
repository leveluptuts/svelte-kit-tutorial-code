import { auth } from '$db/fake_auth';

export async function handle({ event, resolve }) {
	const user = auth();
	event.locals.user = user;
	event.locals.this_is_just_a_test = 'test';
	event.cookies.set('test', 'test');
	return resolve(event);
}
