import React from 'react';
import Hero3D from './components/Hero3D';
import ValueProposition from './components/ValueProposition';
import ServicesGrid from './components/ServicesGrid';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="InnTour"
            className="h-8 w-auto"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <span className="text-xl font-semibold text-slate-800">InnTour</span>
        </div>
        <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
          <a href="#" className="hover:text-slate-900">Home</a>
          <a href="#servizi" className="hover:text-slate-900">Servizi</a>
          <a href="#cta" className="hover:text-slate-900">Contatti</a>
        </nav>
        <a href="#cta" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">Collabora</a>
      </header>

      <main className="mx-auto max-w-7xl space-y-12 px-6 pb-16">
        <Hero3D />
        <ValueProposition />
        <ServicesGrid />
        <CallToAction />
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} InnTour · MetaBorghi. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Termini</a>
            <a href="mailto:hello@inntour.it" className="hover:text-slate-700">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
