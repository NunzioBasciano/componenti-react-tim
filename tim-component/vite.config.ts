import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/main.tsx",
      name: "TimComponents",
      fileName: (format) => `tim-components.${format}.js`,
      formats: ["umd"], // Formato compatibile con i browser vecchi e nuovi
    },
    rollupOptions: {
      // Opzionale: se vuoi che React sia incluso nel file (consigliato per CMS)
      // non aggiungere nulla in 'external'
    },
  },
  define: {
    "process.env": {}, // Evita errori con alcune librerie
  },
});

/* import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // La parte 'build' serve per il CMS,
  // ma 'npm run dev' userà l'index.html nella root di default.
  build: {
    lib: {
      entry: "./src/main.tsx",
      name: "TimComponents",
      fileName: (format) => `tim-components.${format}.js`,
      formats: ["umd"],
    },
  },
}); */
