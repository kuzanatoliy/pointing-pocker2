declare namespace jest {
  interface Matchers<R> {
    countOfRouterPathsToBe(count: number): R;
    pathOfRouterHaveHandler(path: string, handler: Function): R;
  }
}
