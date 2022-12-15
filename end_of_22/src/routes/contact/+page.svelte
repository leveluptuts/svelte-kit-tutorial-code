<script>
	import { enhance } from '$app/forms';

	export let form;
	$: console.log('form', form);
</script>

<!-- Fail -->
{#if form?.error_message}
	<p>
		Oops! {form?.error_message}
	</p>
{/if}

<!-- Success -->
{#if form?.message}
	<p>
		{form?.message}
	</p>
{:else}
	<form
		use:enhance={({ form, data, action, cancel }) => {
			// form -> form element
			// data -> FormData object
			// action -> url form posts to
			// cancel() -> cancels form
			return ({ result, update }) => {
				update();
				// result -> 'ActionResult'
				// update() -> runs all of the default use:enhance
			};
		}}
		action="/contact?/email"
		method="POST"
	>
		<!-- Action = route + ?/ + action_name -->
		<label>
			Name: <input type="text" required name="name" id="name" />
		</label>
		<label>
			Email: <input type="email" required name="email" id="email" />
		</label>
		<label>
			Message: <textarea required name="message" id="message" />
		</label>
		<button type="submit">Send Email</button>
	</form>
{/if}

<style>
	form {
		padding: 20px;
		display: flex;
		gap: 20px;
		flex-direction: column;
	}

	label {
		display: block;
	}
</style>
