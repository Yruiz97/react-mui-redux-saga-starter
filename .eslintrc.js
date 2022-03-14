module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier", "react", "import"],
  env: {
    browser: true,
    jest: true,
    es2021: true,
    node: true,
  },
  "extends": [
    'airbnb-base',
    "airbnb-typescript",
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      "fragment": "Fragment",
    },
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      alias: [
        ['src', './src'],
      ],
    },
  },
  "rules": {
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "no-param-reassign": 0,
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
}