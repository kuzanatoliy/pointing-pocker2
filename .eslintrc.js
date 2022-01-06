module.exports = {
  extends: [
    'plugin:import/typescript'
  ],
  plugins: ['import'],
  rules: {
    /** eslint-plugin-import */
    
    /** Static analysis */
    'import/no-unresolved': [ 2, { caseSensitive: true } ],
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-restricted-paths': 0,
    'import/no-absolute-path': 2,
    'import/no-dynamic-require': 2,
    'import/no-internal-modules': 0,
    'import/no-webpack-loader-syntax': 2,
    'import/no-self-import': 2,
    'import/no-cycle': 2,
    'import/no-useless-path-segments': 2,
    'import/no-relative-parent-imports': 0,
    'import/no-relative-packages': 2,

    /** Helpful warnings */
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-deprecated': 1,
    'import/no-extraneous-dependencies': [ 1, {
      devDependencies: [ '**/*.{test,spec}.{js,jsx,ts,tsx}' ],
      optionalDependencies: false,
      peerDependencies: false,
      bundledDependencies: false,
    }],
    'import/no-mutable-exports': 2,
    'import/no-unused-modules': 2,

    /** Module systems */
    'import/unambiguous': 0,
    'import/no-commonjs': 2,
    'import/no-amd': 2,
    'import/no-nodejs-modules': 2,
    'import/no-import-module-exports': 2,

    /** Style guide */
    'import/first': 2,
    'import/exports-last': 0,
    'import/no-duplicates': 2,
    'import/no-namespace': 0,
    'import/extensions': 1,
    'import/order': [ 2, {
      groups: [ 'builtin', 'external', 'type', 'internal', ],
      'newlines-between': 'always',
    }],
    'import/newline-after-import': 1,
    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,
    'import/no-unassigned-import': 2,
    'import/no-named-default': 2,
    'import/no-default-export': 2,
    'import/no-named-export': 0,
    'import/no-anonymous-default-export': 0,
    'import/group-exports': 0,
    'import/dynamic-import-chunkname': 0,
  },
  overrides: [{
    files: ['.eslintrc.js'],
    rules: {
      'import/no-commonjs': 0,
    }
  }],
}
