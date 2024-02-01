module.exports = {
    root: true,
    extends: [
        'universe/native',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['react', 'react-hooks'],
    rules: {
        'import/order': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
