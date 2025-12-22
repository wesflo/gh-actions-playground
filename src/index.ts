export * from './utils/format';
export * from './utils/math';

export * from './component/gh-hello';

// Side-effect registration helper for convenience.
// Consumers can either import { GhHello } from ... and define themselves,
// or just import this file and it will register the element automatically.
import './component/gh-hello';
