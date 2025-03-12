<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true // или '0.0.0.0'
  }
})
=======
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

// Определяем __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let build = {
  outDir: 'public/dist', // Скомпилированные файлы будут размещены в public/dist
  manifest: true, // Создаём manifest.json
  rollupOptions: {
    input: `${__dirname}/src/main.tsx`, // Главная точка входа
  },
  // Указываем расположение manifest.json
  manifestDir: '', // Перемещаем в корень папки dist
};
export default defineConfig({
  plugins: [react()],
  build: build,
  assetsInclude: ['**/*.php'], // Обработка PHP как ассетов
  server: {
    proxy: {
      '/': {
        target: 'https://psy.test', // Проксирование запросов на PHP-сервер
        changeOrigin: true,
      },
    },
  },
});
>>>>>>> Remove node_modules and add to .gitignore
