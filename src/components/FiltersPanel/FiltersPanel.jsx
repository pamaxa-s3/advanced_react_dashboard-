import { useActionState, useId } from 'react';

const applyFilters = async (prevState, formData) => {
	await new Promise(res => setTimeout(res, 1000));

	return {
		period: formData.get('period'),
		category: formData.get('category'),
		appliedAt: Date.now(),
	};
};

const FiltersPanel = () => {
	const periodId = useId();
	const categoryId = useId();

	const [state, submitAction, isPending] = useActionState(
		applyFilters,
		null
	);

	return (
		<form action={submitAction}>
			<h3>Filters</h3>

			<div>
				<label htmlFor={periodId}>Period</label>
				<select id={periodId} name="period">
					<option value="7d">Last 7 days</option>
					<option value="30d">Last 30 days</option>
					<option value="90d">Last 90 days</option>
				</select>
			</div>

			<div>
				<label htmlFor={categoryId}>Category</label>
				<select id={categoryId} name="category">
					<option value="all">All</option>
					<option value="sales">Sales</option>
					<option value="users">Users</option>
				</select>
			</div>

			<button type="submit" disabled={isPending}>
				{isPending ? 'Applying...' : 'Apply filters'}
			</button>

			{state && (
				<p>
					Applied: {state.period}, {state.category}
				</p>
			)}
		</form>
	);
};

export default FiltersPanel;