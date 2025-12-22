import { describe, expect, it } from 'vitest';
import { clamp, sum } from './math';

describe('clamp', () => {
    it('clamps within bounds', () => {
        expect(clamp(5, 0, 10)).toBe(5);
        expect(clamp(-1, 0, 10)).toBe(0);
        expect(clamp(999, 0, 10)).toBe(10);
    });

    it('uses min for NaN', () => {
        expect(clamp(Number.NaN, 2, 8)).toBe(2);
    });
});

describe('sum', () => {
    it('sums values', () => {
        expect(sum(1, 2, 3)).toBe(6);
        expect(sum()).toBe(0);
    });
});
