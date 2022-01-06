import { countOfRouterPathsToBe } from './count-of-router-paths-to-be';
import { pathOfRouterHaveHandler } from './path-of-router-have-handler';

expect.extend({
  countOfRouterPathsToBe,
  pathOfRouterHaveHandler,
});

declare global {
  namespace jest {
    interface Matchers<R> {
      countOfRouterPathsToBe(count: number): R;
      pathOfRouterHaveHandler(path: string, handler: Function): R;
    }
  }
}
