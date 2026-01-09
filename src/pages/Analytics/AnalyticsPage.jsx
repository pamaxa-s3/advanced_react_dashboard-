import AnalyticsWidget from '@widgets/AnalyticsWidget';
import ErrorBoundary from '@components/ErrorBoundary';

const AnalyticsPage = () => {
	return (
		<ErrorBoundary>
			<AnalyticsWidget />
		</ErrorBoundary>
	);
};

export default AnalyticsPage;
