export const formatHello = (name: string): string => {
    const trimmed = name.trim();
    return `Hello, ${trimmed.length > 0 ? trimmed : 'World'}!`;
};

export const kebabCase = (input: string): string =>
    input
        .trim()
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase();
