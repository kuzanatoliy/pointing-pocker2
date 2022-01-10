import { IRouter } from 'express';

import { countOfRouterPathsToBe } from './count-of-router-paths-to-be';

describe('count-of-router-paths-to-be', () => {
  it('should be successful', () => {
    const result = countOfRouterPathsToBe({ stack: [{}, {}] } as IRouter, 2);
    expect(result.pass).toBeTruthy();
    expect(result.message()).toEqual(expect.any(String));
  });

  it('should be failed', () => {
    const result = countOfRouterPathsToBe({ stack: [{}] } as IRouter, 2);
    expect(result.pass).toBeFalsy();
    expect(result.message()).toEqual(expect.any(String));
  });
});
