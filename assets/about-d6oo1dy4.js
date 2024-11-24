import { jsx } from '@emotion/react';
import { e as s, U as i, b as a, T as t } from './ui-C7T3uEdo.js';
import './vendor-DTT5Tm4R.js';

const ChiSiamoSection = () => {
  const heading = 'Chi Siamo';
  const subheading = 'La Nostra Storia';
  const text = 'Da 10 anni al servizio dei clienti con professionalità e dedizione';

  return (
    <section id="chi-siamo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            {heading}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
            {subheading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {text}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3">
              <img
                src="https://static.wixstatic.com/media/76751ad539344a41a9950d2ee585e350.jpg/v1/fill/w_640,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/76751ad539344a41a9950d2ee585e350.jpg"
                alt="Tecnico al lavoro"
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Anni di Esperienza</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              La Tua Scelta di Fiducia per l'Assistenza Elettrodomestici a Brescia
            </h3>
            <p className="text-gray-600 mb-8">
              Dal 2014, ElectroHome è sinonimo di affidabilità e professionalità nel settore delle riparazioni di elettrodomestici a Brescia e provincia. La nostra esperienza decennale ci ha permesso di sviluppare una profonda conoscenza di tutti i principali marchi e modelli di elettrodomestici.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <s className="text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Certificati</h4>
                  <p className="text-sm text-gray-600">Tecnici qualificati e autorizzati</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Clienti Soddisfatti</h4>
                  <p className="text-sm text-gray-600">Migliaia di riparazioni eseguite</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <a className="text-blue-600 shrink-0" />
                  <div>
                  <h4 className="font-semibold">Ricambi Originali</h4>
                  <p className="text-sm text-gray-600">Garanzia sui pezzi sostituiti</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <t className="text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Assistenza Rapida</h4>
                  <p className="text-sm text-gray-600">Interventi entro 24/48 ore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoSection;
