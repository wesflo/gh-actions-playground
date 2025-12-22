import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'happy-dom',
        globals: true,
        include: ['src/**/*.spec.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'lcov'],
            include: ['src/utils/**/*.ts'],
            exclude: [
                '**/*.spec.ts',
                'src/index.ts',
                'src/component/**',
                'vite*.config.ts'
            ]
        }
    }
});
