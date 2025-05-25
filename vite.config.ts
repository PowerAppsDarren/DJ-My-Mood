import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    loader: 'tsx',
  },
  optimizeDeps: {
    include: ['lit', '@google/generative-ai'],
  },
  define: {
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
});
