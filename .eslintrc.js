const [OFF, ERROR] = [0, 2];

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react-native-a11y/all',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.web.ts', '.web.tsx'],
        map: [['@', './src']],
      },
    },
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
  env: {
    jest: true,
  },
  ignorePatterns: ['dist-web'],
  rules: {
    'import/no-named-as-default': OFF,
    'import/namespace': OFF,
    'import/order': [
      ERROR,
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          'parent',
          ['index', 'sibling'],
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
      },
    ],
    'newline-before-return': ERROR,
    'id-length': ['error', { exceptions: ['t', '_'] }],
    'react/react-in-jsx-scope': OFF,
  },
};
