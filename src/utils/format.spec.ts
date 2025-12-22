import { describe, expect, it } from 'vitest';
import { formatHello, kebabCase } from './format';

describe('formatHello', () => {
    it('formats a normal name', () => {
        expect(formatHello('Flo')).toBe('Hello, Flo!');
    });

    it('trims whitespace', () => {
        expect(formatHello('  Flo  ')).toBe('Hello, Flo!');
    });

    it('falls back to World on empty/whitespace', () => {
        expect(formatHello('   ')).toBe('Hello, World!');
    });
});

describe('kebabCase', () => {
    it('converts camelCase', () => {
        expect(kebabCase('helloWorld')).toBe('hello-world');
    });

    it('converts spaces and underscores', () => {
        expect(kebabCase('Hello   World_test')).toBe('hello-world-test');
    });

    it('deduplicates hyphens', () => {
        expect(kebabCase('hello---world')).toBe('hello-world');
    });
});
