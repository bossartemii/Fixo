import React, { useState } from 'react';
import { jsx } from '@emotion/react';
import { e as s, C as t } from './index-zOd4A4z2.js';
import { r as l } from './vendor-DTT5Tm4R.js';
import { m as r, k as a, l as i, X as n, n as o } from './ui-C7T3uEdo.js';

const RequestAssistanceModal = ({ isOpen, onClose, region }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState(region || 'modena');
  const [otherCity, setOtherCity] = useState('');
  const [device, setDevice] = useState('');
  const [problem, setProblem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(event.target);
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        o.error('Errore nell\'invio della richiesta');
      }
    } catch (error) {
      console.error('Error:', error);
      o.error('Errore nell\'invio della richiesta');
    } finally {
      setIsSubmitting(false);
    }
  };

  return isOpen ? (
    isSubmitted ? (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <div
          className="bg-white rounded-xl max-w-sm w-full p-4 sm:p-6 shadow-xl"
        >
          <div className="text-center mb-4">
            <div
              
<r className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Richiesta Elaborata
            </h3>
            <p className="text-sm text-gray-600">
              La tua richiesta è stata inviata con successo.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Chiudi
          </button>
        </div>
      </div>
    ) : (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 z-50 overflow-y-auto"
      >
        <div
          className="bg-white rounded-xl w-full max-w-2xl my-4 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-500"
          >
            <i size={20} />
          </button>
          <div className="p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">
              Richiedi Assistenza
            </h2>
            <form
              netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
>
                    Telefono
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email (opzionale)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Indirizzo
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Comune
                  </label>
                  <select
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Seleziona Comune</option>
                    <option value="modena">Modena</option>
<option value="brescia">Brescia</option>
                    <option value="firenze">Firenze</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                {city === 'altro' && (
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Altro Comune
                    </label>
                    <input
                      type="text"
                      value={otherCity}
                      onChange={(event) => setOtherCity(event.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Problema
                </label>
                <textarea
                  value={problem}
                  onChange={(event) => setProblem(event.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Dispositivo (opzionale)
                </label>
                <input
                  type="text"
                  value={device}
                  onChange={(event) => setDevice(event.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default RequestAssistanceModal;
