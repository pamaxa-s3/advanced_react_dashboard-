import { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error: error.message };
	}

	componentDidCatch(error, errorInfo) {
		console.error('Dashboard error:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ padding: 24 }}>
					<h2>Щось пішло не так</h2>
					<p>Спробуйте оновити сторінку або повернутись пізніше.</p>
					<button onClick={() => this.setState({ hasError: false })}>
						Try again
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
