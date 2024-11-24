import React, { useState, useEffect } from 'react';
import { j as CookieBanner } from './index-zOd4A4z2.js';
import { r as localStorage } from './vendor-DTT5Tm4R.js';
import { i as InfoIcon, X as CloseIcon } from './ui-C7T3uEdo.js';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!localStorage.getItem('cookiesAccepted')) {
        setShowBanner(true);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  return showBanner ? (
    <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="bg-blue-50 p-3 rounded-full">
            <InfoIcon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-gray-600">
              Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
              <button
                onClick={() => document.getElementById('cookie-details')?.classList.toggle('hidden')}
                className="text-blue-600 hover:text-blue-700 ml-1 underline underline-offset-2"
              >
                Maggiori informazioni
              </button>
            </p>
            <div id="cookie-details" className="hidden mt-3 text-sm text-gray-500">
              <p>I cookie ci aiutano a:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Ricordare le tue preferenze</li>
                <li>Analizzare il traffico del sito</li>
                <li>Migliorare i nostri servizi</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleRejectCookies}
              className="px-4 py-2 text-gray-600 hover:text-gray-700 transition"
            >
              Rifiuta
  </button>
            <button
              onClick={handleAcceptCookies}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Accetta
            </button>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-500 sm:hidden"
          >
            <CloseIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieConsentBanner;
