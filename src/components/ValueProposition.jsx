import React from 'react';
import { Landmark, Globe, ShieldCheck } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Un progetto sistemico per le Aree Interne
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-slate-600">
          Dal caso Lacedonia al network dei musei come MAVI e Guardia Lombardi, fino alla governance
          pubblico-privata su blockchain: costruiamo un modello replicabile e scalabile.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3">
            <Landmark className="h-5 w-5 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">PA come motore</h3>
          <p className="mt-2 text-slate-600">
            Collaborazione con la Pubblica Amministrazione per attivare servizi digitali e azioni
            concrete di sviluppo, con capitoli di bilancio dedicati e rendicontazione annuale.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3">
            <Globe className="h-5 w-5 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Ecosistema digitale</h3>
          <p className="mt-2 text-slate-600">
            Community di nuovi e attuali residenti, tokenizzazione dell'economia reale, NFT,
            metaverso e moneta locale per generare valore sul territorio.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Governance trasparente</h3>
          <p className="mt-2 text-slate-600">
            Decisioni partecipate su blockchain, bilanci partecipativi e investimenti privati
            per sostenere crescita pubblica e privata in modo misurabile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
