import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist-iife',
        sourcemap: true,
        emptyOutDir: true,
        lib: {
            entry: './src/index.ts',
            name: 'GhActionsPlayground',
            formats: ['iife'],
            fileName: () => 'gh-actions-playground.iife.js'
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true
            }
        }
    }
});