import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '.', // your current root
        path.resolve(__dirname, 'node_modules/bootstrap-icons'),
        path.resolve(__dirname, '../node_modules/bootstrap-icons'), // parent folder node_modules
      ]
    }
  }
});
