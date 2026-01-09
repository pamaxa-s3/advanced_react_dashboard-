import { use } from 'react';
import { fetchAnalytics } from '@api';
import { Suspense } from 'react';
import ErrorBoundary from '@components';

const AsyncAnalytics = () => {
	const data = use(fetchAnalytics());

	return (
		<section>
			<h3>Advanced Analytics</h3>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</section>
	);
};
1

const AnalyticsWidget = () => {
	return (
		<ErrorBoundary>
			<Suspense fallback={<p>Loading analytics…</p>}>
				<AsyncAnalytics />
			</Suspense>
		</ErrorBoundary>
	);
};

export default AnalyticsWidget;
