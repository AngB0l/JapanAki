module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
    ],
    plugins: [
        'react',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
        'max-len': 0,
        'react/prop-types': 0,
    },
};
