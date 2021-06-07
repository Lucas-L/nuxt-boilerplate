const { resolve } = require('path')

const alias = `${__dirname}/src`

module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 0,
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'linebreak-style': 0,
        'global-require': 0,
        'eslint linebreak-style': [0, 'error', 'windows'],
        'vue/html-indent': ['error', 4],
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'import/prefer-default-export': 'off',
        'vue/require-default-prop': [1],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'max-len': ['warn', {
            code: 250,
            ignoreComments: true,
            ignoreStrings: true,
            ignorePattern: 'd=([s]*?)',
        }],
        'object-curly-newline': ['error', {
            ObjectExpression: {
                multiline: true,
                minProperties: 5,
                consistent: true,
            },
            ObjectPattern: {
                multiline: true,
                minProperties: 5,
                consistent: true,
            },
            ImportDeclaration: {
                multiline: true,
                minProperties: 5,
                consistent: true,
            },
            ExportDeclaration: {
                multiline: true,
                minProperties: 5,
                consistent: true,
            },
        }],
    },
    ignorePatterns: [
        'modules/*/*.js',
    ],
    globals: {
        $nuxt: true,
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: {
                    resolve: {
                        alias: {
                            '~': alias,
                            assets: resolve(alias, 'assets'),
                            '~assets': resolve(alias, 'assets'),
                            '~components': resolve(alias, 'components'),
                            '~modules': resolve(alias, 'modules'),
                            '~plugins': resolve(alias, 'plugins'),
                            '~pages': resolve(alias, 'pages'),
                            '~router': resolve(alias, '.nuxt/router'),
                            static: resolve(alias, 'static'),
                            '~static': resolve(alias, 'static'),
                            '~store': resolve(alias, '.nuxt/store'),
                        },
                    },
                },
            },
        },
    },
}
