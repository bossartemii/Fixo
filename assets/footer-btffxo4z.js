import React from 'react';
import { j as Footer, C as CompanyInfo } from './index-zOd4A4z2.js';
import { h as FacebookIcon, I as InstagramIcon, P as PhoneIcon, g as EmailIcon, C as ClockIcon } from './ui-C7T3uEdo.js';
import './vendor-DTT5Tm4R.js';

const FooterComponent = ({ region }) => {
  const companyInfo = region ? CompanyInfo[region.toUpperCase()] : null;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ElectroHome</h3>
            <p className="text-gray-400 mb-4">
              Assistenza e riparazione elettrodomestici professionale
              {region ? ` a ${companyInfo.name}` : ' nelle zone di Modena, Brescia e Firenze'}
              e provincia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61568443062049"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href="https://www.instagram.com/electro_home_modena/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <PhoneIcon size={18} />
                <a href="tel:+393888903184" className="hover:text-blue-400">
                  388 890 3184
                </a>
              </li>
              <li className="flex items-center gap-2">
                <EmailIcon size={18} />
                  <a href="mailto:info@electro-home.it" className="hover:text-blue-400">
                  info@electro-home.it
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Orari</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <ClockIcon size={18} />
                <span>Lun-Ven: 8:00-19:00</span>
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon size={18} />
                <span>Sab-Dom: Chiuso</span>
              </li>
              <li className="text-blue-400">Servizio emergenza 24/7</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Area Servita</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                {region
                  ? `${companyInfo.name} e comuni principali: ${{
                      modena: ['Modena', 'Carpi', 'Sassuolo', 'Formigine', 'Maranello', 'Vignola'],
                      brescia: ['Brescia', 'Desenzano', 'Montichiari', 'Lumezzane', 'Ghedi', 'Chiari'],
                      firenze: ['Firenze', 'Sesto Fiorentino', 'Scandicci', 'Campi Bisenzio', 'Bagno a Ripoli', 'Fiesole'],
                    }[region].join(', ')}`
                  : 'Modena, Brescia, Firenze e relative province'}
              </p>
              {region && (
                <div className="mt-4">
                  <p className="text-sm text-blue-400">
                    Interventi entro {companyInfo.range} km
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ElectroHome. Tutti i diritti riservati.
          </p>
          <p className="mt-2">P.IVA: 03938980368</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
