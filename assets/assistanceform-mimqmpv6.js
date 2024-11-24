import { j as e, C as s } from "./index-zOd4A4z2.js";
import { r as l } from "./vendor-DTT5Tm4R.js";
import { m as t, k as r, l as a, X as i, n } from "./ui-C7T3uEdo.js";

const o = ({ isOpen: o, onClose: c, region: d }) => {
  const [u, m] = l.useState(""),
    [x, b] = l.useState(""),
    [g, p] = l.useState(""),
    [h, f] = l.useState(""),
    [j, y] = l.useState(d || "modena"),
    [v, N] = l.useState(""),
    [w, C] = l.useState(""),
    [S, z] = l.useState(""),
    [I, k] = l.useState(""),
    [$, E] = l.useState(!1),
    [T, A] = l.useState(!1);

  return o
    ? T
      ? e.jsx("div", {
          className:
            "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50",
          children: e.jsxs(t.div, {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            className: "bg-white rounded-xl max-w-sm w-full p-4 sm:p-6 shadow-xl",
            children: [
              e.jsxs("div", {
                className: "text-center mb-4",
                children: [
                  e.jsx("div", {
                    className:
                      "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3",
                    children: e.jsx(r, { className: "w-6 h-6 text-green-600" }),
                  }),
                  e.jsx("h3", {
                    className: "text-lg font-semibold text-gray-900 mb-2",
                    children: "Richiesta Elaborata",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-gray-600",
                    children: "Tra pochi secondi si aprirà il tuo client email con il messaggio precompilato.",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center justify-center gap-2 text-blue-600 mb-4",
                children: [
                  e.jsx(a, { className: "w-4 h-4 animate-spin" }),
                  e.jsx("span", { className: "text-sm", children: "Apertura client email..." }),
                ],
              }),
              e.jsxs("div", {
                className: "bg-blue-50 rounded-lg p-3 mb-4",
                children: [
                  e.jsx("h4", {
                    className: "text-sm font-semibold text-blue-900 mb-2",
                    children: "Informazioni Importanti",
                  }),
                  e.jsxs("ul", {
                    className: "space-y-1 text-xs text-blue-800",
                    children: [
                      e.jsx("li", { children: "• Uscita tecnico: €30" }),
                      e.jsx("li", { children: "• Ispezione e diagnosi: €10-20" }),
                      e.jsx("li", { children: "• Preventivo gratuito e senza impegno" }),
                      e.jsx("li", { children: "• Intervento entro 24/48 ore" }),
                    ],
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: c,
                className:
                  "w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition",
                children: "Chiudi",
              }),
            ],
          }),
        })
      : e.jsx("div", {
          className:
            "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 z-50 overflow-y-auto",
          children: e.jsxs(t.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "bg-white rounded-xl w-full max-w-2xl my-4 relative",
            children: [
              e.jsx("button", {
                onClick: c,
                className: "absolute top-3 right-3 text-gray-400 hover:text-gray-500",
                children: e.jsx(i, { size: 20 }),
              }),
              e.jsxs("div", {
                className: "p-4 sm:p-6",
                children: [
                  e.jsx("h2", {
                    className: "text-lg font-semibold mb-4",
                    children: "Richiedi Assistenza",
                  }),
                  e.jsxs("form", {
                    netlify: "true", // Netlify form submission detection
                    onSubmit: async (e) => {
                      e.preventDefault();
                      if (v || w) {
                        E(!0);
                        try {
                          const e = "altro" === v ? w : v,
                            l = s[j.toUpperCase()],
                            t = encodeURIComponent(`Richiesta Assistenza ${l.name} - ${u}`),
                            r = encodeURIComponent(
                              `\nRICHIESTA ASSISTENZA\n\nCLIENTE:\n- Nome: ${u}\n- Tel: ${x}\n${
                                g ? `- Email: ${g}` : ""
                              }\n- Indirizzo: ${h}\n- Zona: ${l.name}\n- Comune: ${e}\n\n${
                                S ? `DISPOSITIVO: ${S}` : ""
                              }\n${I ? `PROBLEMA: ${I}` : ""}\n\nData richiesta: ${(new Date()).toLocaleString(
                                "it-IT"
                              )}\n      `.trim());
                          A(!0),
                            setTimeout(() => {
                              window.location.href = `mailto:info@electro-home.it?subject=${t}&body=${r}`;
                            }, 3e3);
                        } catch (l) {
                          console.error("Error:", l);
                          n.error("Errore nell'invio della richiesta");
                          A(!1);
                        } finally {
                          E(!1);
                        }
                      } else n.error("Seleziona o inserisci un comune");
                    },
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Nome e Cognome",
                              }),
                              e.jsx("input", {
                                type: "text",
                                value: u,
                                onChange: (e) => m(e.target.value),
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: true,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Telefono",
                              }),
                              e.jsx("input", {
                                type: "tel",
                                value: x,
                                onChange: (e) => b(e.target.value),
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: true,
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Email (opzionale)",
                              }),
                              e.jsx("input", {
                                type: "email",
                                value: g,
                                onChange: (e) => p(e.target.value),
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Indirizzo",
                              }),
                              e.jsx("input", {
                                type: "text",
                                value: h,
                                onChange: (e) => f(e.target.value),
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: true,
                              }),
                            ],
                          }),
                        ],
                      }),
