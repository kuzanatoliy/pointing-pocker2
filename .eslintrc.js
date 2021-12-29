module.exports = {
  extends: [
    "plugin:import/typescript"
  ],
  plugins: ["import"],
  rules: {
    /** eslint-plugin-import */
    
    /** Static analysis */
    "import/no-unresolved": 0,
    "import/named": 0,
    "import/default": 0,
    "import/namespace": 0,
    "import/no-restricted-path": 0,
    "import/no-absolute-path": 0,
    "import/no-dynamic-require": 0,
    "import/no-internal-modules": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/no-self-import": 0,
    "import/no-cycle": 0,
    "import/no-useless-path-segments": 0,
    "import/no-relative-parent-imports": 0,
    "import/no-relative-packages": 0,

    /** Helpful warnings */
    "import/export": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-deprecated": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-mutable-exports": 0,
    "import/no-unused-modules": 0,

    /** Module systems */
    "import/unambiguous": 0,
    "import/no-commonjs": 0,
    "import/no-amd": 0,
    "import/no-nodejs-modules": 0,
    "import/no-import-module-exports": 0,

    /** Style guide */
    "import/first": 0,
    "import/exports-last": 0,
    "import/no-duplicates": 0,
    "import/no-namespace": 0,
    "import/extensions": 0,
    "import/order": 0,
    "import/newline-after-import": 0,
    "import/prefer-default-export": 0,
    "import/max-dependencies": 0,
    "import/no-unassigned-import": 0,
    "import/no-named-default": 0,
    "import/no-default-export": 0,
    "import/no-named-export": 0,
    "import/no-anonymous-default-export": 0,
    "import/group-exports": 0,
    "import/dynamic-import-chunkname": 0,
  },
}
