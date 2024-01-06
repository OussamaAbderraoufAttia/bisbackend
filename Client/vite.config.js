import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// vite.config.js
export default defineConfig({
  plugins: [react()], // Keep the React plugin
  assetsInclude: ['**/*.tif'], // Add TIFF files to assets
});
