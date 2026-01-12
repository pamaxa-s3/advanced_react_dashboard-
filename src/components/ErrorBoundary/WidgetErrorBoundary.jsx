import { Component } from 'react';

class WidgetErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Widget failed to load</div>;
    }

    return this.props.children;
  }
}

export default WidgetErrorBoundary;