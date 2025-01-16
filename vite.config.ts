/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    checker({
      typescript: {
        tsconfigPath: './tsconfig.app.json',
      },
    }),
    react(),
  ],
  test: {
    globals: true, // (Optional) use global APIs like `describe`, `it`, etc.
    environment: 'jsdom', // Required for React Testing Library
    setupFiles: ['./src/setupTests.ts'], // (Recommended) specify a setup file
  },
});
