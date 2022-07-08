module.exports = {
    extends: ['@webank/eslint-config-webank/vue'],
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        jest: true,
    },
    rules: {
        'linebreak-style': [0, 'off', 'windows'],
    },
};
