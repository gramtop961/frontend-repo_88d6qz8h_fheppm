import React from 'react';
import { Building2, Users, Rocket } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Musei e luoghi della cultura',
    desc:
      'Valorizzazione di MAVI, Museo di Guardia Lombardi e reti museali con contenuti digitali, tour e bigliettazione integrata.',
  },
  {
    icon: Users,
    title: 'Community & Residenzialità',
    desc:
      'Costruzione di community locali e di ritorno: programmi di accoglienza, co-living, lavoro da remoto e volontariato culturale.',
  },
  {
    icon: Rocket,
    title: 'MetaBorghi & Promozione Unica',
    desc:
      'Un hub per oltre 1000 comuni e 10.000 imprese del comparto turistico-culturale con un piano media condiviso.',
  },
];

const ServicesGrid = () => {
  return (
    <section id="servizi" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Cosa offriamo</h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-600">
            Servizi modulari per amministrazioni, musei e imprese. Dalla progettazione alla
            realizzazione, con indicatori di impatto e crescita.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3">
                <Icon className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
