import { IRouter } from 'express';

export const pathOfRouterHaveHandler = (received: IRouter, path: string, handler: Function) => {
  const layer = received.stack.find((item) => item.route.path === path);
  if (!layer) {
    return {
      message: () => `The router doesn't contain the ${ path } path`,
      pass: false,
    };
  }

  if (!layer.route.stack.find((item: { handle: Function; }) => item.handle === handler)) {
    return {
      message: () => `The route doesn't contain the handler`,
      pass: false,
    };
  }

  return {
    message: () => 'Success',
    pass: true,
  };
};
