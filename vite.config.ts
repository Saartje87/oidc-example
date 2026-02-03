import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    minify: false,
    ssr: true,
    outDir: './dist',
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    dts({
      entryRoot: 'src',
      exclude: ['**/*.stories.{ts,tsx}', '**/*.test.{ts,tsx}'],
    }),
  ],
  publicDir: false,
});
