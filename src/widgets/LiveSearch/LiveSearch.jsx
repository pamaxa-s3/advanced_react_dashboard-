import { useEffect, useState, useDeferredValue } from 'react';
import { searchItems } from '@api/search';
import Highlight from './Highlight';
import cls from './liveSearch.module.css';

const LiveSearch = () => {
	const [query, setQuery] = useState('');
	const deferredQuery = useDeferredValue(query);

	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!deferredQuery) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setResults([]);
			return;
		}

		setLoading(true);

		searchItems(deferredQuery).then(data => {
			setResults(data.slice(0, 8));
			setLoading(false);
		});
	}, [deferredQuery]);

	return (
		<section className={cls.wrapper}>
			<input
				type="text"
				placeholder="Search products..."
				value={query}
				onChange={e => setQuery(e.target.value)}
				className={cls.input}
			/>

			{loading && <p className={cls.loading}>Loading results…</p>}

			<ul className={cls.list}>
				{results.map(item => (
					<li key={item}>
						<Highlight text={item} query={deferredQuery} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default LiveSearch;
