import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-6 py-14 text-white">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="relative">
        <h3 className="text-2xl font-semibold sm:text-3xl">PA e imprese, costruiamo insieme</h3>
        <p className="mt-2 max-w-3xl text-emerald-50">
          Proponiamo un impegno annuale tra 8k e 12k, con rinnovo ogni lustro e report trasparenti.
          Portiamo servizi digitali, promozione integrata e una community attiva per rigenerare i territori.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:hello@inntour.it"
            className="rounded-xl bg-black/90 px-5 py-3 text-sm font-medium text-white shadow hover:bg-black"
          >
            Scrivici ora
          </a>
          <a
            href="#"
            className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20"
          >
            Scarica il manifesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
