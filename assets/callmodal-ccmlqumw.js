import React from 'react';
import { jsx } from '@emotion/react';
import { X as IconX, j as IconPhone, P as IconWarning } from './ui-C7T3uEdo.js';
import './vendor-DTT5Tm4R.js';

const CallDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Prima di chiamare</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <IconX size={24} />
          </button>
        </div>
        <div className="mb-6">
          <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg mb-4">
            <IconWarning className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800">Costi del servizio:</p>
              <ul className="text-amber-700 space-y-2 mt-2">
                <li>• Uscita tecnico: €30</li>
                <li>• Ispezione e diagnosi: €10-20</li>
                <li>• In caso di riparazione, il costo della chiamata verrà detratto dal totale</li>
                <li>• Preventivo sempre gratuito e senza impegno</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href="tel:+393888903184"
            className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <IconPhone size={18} />
            Chiama Ora
          </a>
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            Annulla
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallDialog;
