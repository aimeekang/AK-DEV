{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    'react/prop-types': 'off',
    'perfer-destructuring': 'off',
    'import/extensions': 'off',
    'no-console': ['error', { allow: ['error', 'info', 'clear'] }]
  }
}
