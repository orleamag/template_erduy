import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com', // Cambia esto por tu dominio
  trailingSlash: 'always', // Asegura que las rutas tengan una barra al final
  build: {
    outDir: 'dist', // Directorio de salida
  },
});