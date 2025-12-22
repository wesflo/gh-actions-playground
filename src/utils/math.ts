export const clamp = (value: number, min: number, max: number): number => {
    if (Number.isNaN(value)) return min;
    return Math.min(max, Math.max(min, value));
};

export const sum = (...values: number[]): number =>
    values.reduce((acc, v) => acc + v, 0);
