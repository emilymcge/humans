import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from "vite-jsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist', //!I used chatGPT for this i dont rly understand it
    emptyOutDir: true,
  },
  plugins: [react(), jsconfigPaths()], //!What is this
});
