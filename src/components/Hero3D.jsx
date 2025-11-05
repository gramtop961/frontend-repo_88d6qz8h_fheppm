import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7H2n3IHv4U2dI9v8/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-emerald-400" />
          <span className="text-white/90">INNovationTOURism per le Aree Interne</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          InnTour + MetaBorghi
          <span className="block text-emerald-400">la piattaforma per rigenerare i territori</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/85 sm:text-lg">
          Dalla Calabria al Tosco-Emiliano: un unico ecosistema che connette Comuni, musei e imprese
          in una governance trasparente, digitale e partecipata.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#servizi"
            className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-emerald-400"
          >
            Scopri i servizi
          </a>
          <a
            href="#cta"
            className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Collabora con noi
          </a>
        </div>
        <div className="mt-8">
          <img
            src="/logo.png"
            alt="InnTour Logo"
            className="h-12 opacity-90"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
