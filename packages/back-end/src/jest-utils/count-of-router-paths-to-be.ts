import { IRouter } from 'express';

export const countOfRouterPathsToBe = (received: IRouter, count: number) => {
  const pass = received.stack.length === count;
  return {
    message: pass ? () => 'Success' : () => `Expected ${count} paths, but have ${received.stack.length}`,
    pass,
  };
};
