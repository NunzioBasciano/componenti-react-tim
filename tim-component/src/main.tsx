/* import r2wc from "@r2wc/react-to-web-component";
import Bento from "./components/bento/Bento"; // Importa il componente dal file sopra

const WebBento = r2wc(Bento, {});

// Nota: il nome del tag deve contenere un trattino (-) per standard Web Components
// Usare solo "bento" potrebbe dare problemi con i tag futuri dell'HTML
customElements.define("tim-bento", WebBento);


 */

/* import React from "react"; */
import r2wc from "@r2wc/react-to-web-component";
import Bento from "./components/bento/Bento";
import { register } from "swiper/element/bundle";
register();

// Se non passi props nel CMS, r2wc potrebbe non renderizzare nulla.
// Rendi le props opzionali.
const WebBento = r2wc(Bento, {
  props: {
    text: "string",
  },
});

console.log("Tentativo registrazione tim-bento..."); // DEBUG

if (!customElements.get("tim-bento")) {
  customElements.define("tim-bento", WebBento);
  console.log("Registrato!");
}

/* import React from "react";

import r2wc from "@r2wc/react-to-web-component";
import Bento from "./components/bento/Bento";

// Forza il riferimento per evitare che il compilatore li scarti
console.log("React version:", React.version);

const WebBento = r2wc(Bento, {
  props: { text: "string" },
});

if (!customElements.get("tim-bento")) {
  customElements.define("tim-bento", WebBento);
}
 */
