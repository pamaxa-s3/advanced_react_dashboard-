import { useActionState } from 'react';
import { createUser } from '@api/users';
import cls from './addUserForm.module.css';

const initialState = {
	error: null,
	success: false
};

async function addUserAction(prevState, formData) {
	const name = formData.get('name');
	const email = formData.get('email');

	if (!name || !email) {
		return {
			error: 'All fields are required'
		};
	}

	const result = await createUser({ name, email });

	if (result.error) {
		return {
			error: result.error
		};
	}

	return {
		error: null,
		success: true
	};
}

const AddUserForm = () => {
	const [state, formAction, isPending] =
		useActionState(addUserAction, initialState);

	return (
		<section className={cls.wrapper}>
			<h3>Add new user</h3>

			<form action={formAction} className={cls.form}>
				<input
					name="name"
					placeholder="Full name"
				/>

				<input
					name="email"
					type="email"
					placeholder="Email address"
				/>

				<button disabled={isPending}>
					{isPending ? 'Saving...' : 'Add user'}
				</button>
			</form>

			{state.error && (
				<p className={cls.error}>{state.error}</p>
			)}

			{state.success && (
				<p className={cls.success}>
					User successfully added
				</p>
			)}
		</section>
	);
};

export default AddUserForm;
