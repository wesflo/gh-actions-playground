import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'GhActionsPlayground',
            formats: ['es', 'cjs'],
            fileName: (format: string) => (format === 'cjs' ? 'index.cjs' : 'index.js'),
        },
        sourcemap: true,
        emptyOutDir: true,
        rollupOptions: {
            external: ['lit'],
        },
    },
});
