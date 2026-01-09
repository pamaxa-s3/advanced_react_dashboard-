import { useActionState } from 'react';
import { addSale } from '@api/salesActions';
import cls from './addSaleForm.module.css';

const initialState = {
	status: 'idle',
	error: null,
	success: false
};

const saleAction = async (prevState, formData) => {
	try {
		await addSale(formData);
		return { status: 'success', error: null, success: true };
	} catch (error) {
		return { status: 'error', error: error.message, success: false };
	}
};

const AddSaleForm = () => {
	const [state, formAction, isPending] = useActionState(
		saleAction,
		initialState
	);

	return (
		<section className={cls.wrapper}>
			<h3>Add Sale</h3>

			<form action={formAction} className={cls.form}>
				<input name="customer" placeholder="Customer" required />
				<input name="product" placeholder="Product" required />
				<input
					name="quantity"
					type="number"
					placeholder="Quantity"
					required
				/>
				<input
					name="price"
					type="number"
					step="0.01"
					placeholder="Price"
					required
				/>

				<button disabled={isPending}>
					{isPending ? 'Adding…' : 'Add Sale'}
				</button>
			</form>

			{state.error && (
				<p className={cls.error}>{state.error}</p>
			)}

			{state.success && (
				<p className={cls.success}>Sale added successfully!</p>
			)}
		</section>
	);
};

export default AddSaleForm;
