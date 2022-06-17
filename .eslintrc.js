module.exports = {
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  // Fine tune rules
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 0,
    'require-await': 1,
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        // prettier-ignore
        groups: [
          [
            "reflect-metadata"
          ], [
            // Libs
            "^react.*", "^@react-keycloak.*", "^mobx.*", "typedi", "styled-components", "antd", "^@ant-design.*", "^\\w.*", "^@sentry.*",
            // Internal packages
            "^@.*",
            // Parent imports. Put `..` last
            "^\\.\\./.*",
            // Other relative imports. Put same-folder imports and `.` last
            "^\\./.*",
            // Style imports
            "^.*/styles", "^\\./.+\\.css", "^\\./.+\\.less",
            // Other
            "^.*\\./.*"
          ]
        ],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
