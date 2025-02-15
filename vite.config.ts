import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If you're using React

export default defineConfig({
  plugins: [react()], // Add any plugins you're using
  server: {
    host: true, // This enables the --host flag
  },
});