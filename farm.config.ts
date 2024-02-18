import { defineConfig } from '@farmfe/core';
import postcss from '@farmfe/js-plugin-postcss';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '@': pathResolve('src') + '/'
      }
    },
  },
  vitePlugins: [
    vue(),
  ],
  plugins: [postcss()]
});
