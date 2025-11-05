import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Optionally log error to a monitoring service
    // console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-[60vh] w-full items-center justify-center rounded-2xl bg-slate-900 text-center text-white">
          <div>
            <p className="text-lg font-semibold">Caricamento scena 3D non disponibile</p>
            <p className="mt-2 text-white/70">Procedi pure: tutte le sezioni del sito sono accessibili.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
