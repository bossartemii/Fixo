import React from 'react';
import { jsx } from '@emotion/react';
import { C as ContactInfo, j as IconPhone, a as IconEmail, P as IconClock } from './index-zOd4A4z2.js';
import { P as PhoneIcon, g as EmailIcon, C as ClockIcon, a as AreaIcon } from './ui-C7T3uEdo.js';
import './vendor-DTT5Tm4R.js';

const ContactSection = ({ region }) => {
  const contactInfo = region ? ContactInfo[region.toUpperCase()] : null;
  const cities = region === 'modena' ? ['Modena', 'Carpi', 'Sassuolo', 'Formigine', 'Maranello', 'Vignola'] : region === 'brescia' ? ['Brescia', 'Desenzano', 'Montichiari', 'Lumezzane', 'Ghedi', 'Chiari'] : region === 'firenze' ? ['Firenze', 'Sesto Fiorentino', 'Scandicci', 'Campi Bisenzio', 'Bagno a Ripoli', 'Fiesole'] : [];

  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Contattaci</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Come Raggiungerci</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Siamo sempre disponibili per aiutarti con i tuoi elettrodomestici</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <PhoneIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefono</h3>
            <p className="text-gray-600 mb-4">Chiamaci per un intervento rapido</p>
            <a href={`tel:${contactInfo.phone}`} className="text-blue-600 font-semibold hover:text-blue-700">{contactInfo.phone.replace('+39', '')}</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <EmailIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Scrivici per informazioni</p>
            <a href={`mailto:${contactInfo.email}`} className="text-blue-600 font-semibold hover:text-blue-700 break-all">{contactInfo.email}</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <ClockIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Orari</h3>
            <p className="text-gray-600 mb-4">I nostri orari di apertura</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="font-semibold">Lun-Ven:</span> 8:00-19:00
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Sab-Dom:</span> Chiuso
              </li>
            </ul>
          </div>
        </div>
<div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Area di Servizio</h3>
              <p className="text-gray-600 mb-6">{contactInfo ? `Copriamo ${contactInfo.name} e tutti i comuni della provincia con interventi rapidi e professionali.` : 'Siamo presenti nelle zone di Modena, Brescia e Firenze con interventi rapidi e professionali.'}</p>
              {cities.length > 0 && (
                <ul className="grid grid-cols-2 gap-3 text-gray-600">
                  {cities.map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <AreaIcon size={16} className="text-blue-600" />
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Servizio di Emergenza</h3>
              <p className="text-gray-600 mb-6">Per situazioni urgenti, offriamo un servizio di emergenza 24/7. Contattaci per maggiori informazioni.</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">Note Importanti:</p>
                <ul className="list-disc list-inside text-blue-700 space-y-2 mt-2">
                  <li>Interventi rapidi entro 24/48 ore</li>
                  <li>Preventivi gratuiti</li>
                  <li>Garanzia sulle riparazioni</li>
                  <li>Ricambi originali garantiti</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
