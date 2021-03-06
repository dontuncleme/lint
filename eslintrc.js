module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    plugins: ['ascii', '@typescript-eslint', 'import', 'simple-import-sort'],
    rules: {
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoreComments: false,
            },
        ],

        semi: 'error',
        'semi-spacing': [2, { before: false, after: true }],
        'wrap-iife': [2, 'inside'],
        'no-caller': 2,
        'no-cond-assign': [2, 'except-parens'],
        'no-constant-condition': 2,
        'prefer-const': 'error',
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': [2, { allowEmptyCatch: true }],
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-new': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'newline-before-return': 'error',

        'max-params': [2, 5],
        'max-depth': [1, 4],
        'no-eq-null': 0,
        'no-unused-expressions': 0,
        'dot-notation': 2,
        'use-isnan': 2,

        // Best practices
        'block-scoped-var': 2,
        complexity: [0, 11],
        curly: [2, 'all'],
        eqeqeq: [2, 'always', { null: 'ignore' }],
        'no-else-return': 2,
        'no-extra-bind': 2,
        'no-implicit-coercion': 2,
        'no-return-assign': 0,
        'no-sequences': 2,
        yoda: 2,

        // Variables
        'no-restricted-globals': [2, 'fdescribe', 'fit'],
        'no-var': 1,

        // Code style
        'arrow-parens': ['error', 'always'],
        'array-bracket-spacing': [2, 'never'],
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        camelcase: [2, { properties: 'never' }],
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': [2, { before: false, after: true }],
        'eol-last': 2,
        'func-call-spacing': [2, 'never'],
        'block-spacing': 2,
        'keyword-spacing': [2, { before: true, after: true }],
        'max-len': [
            2,
            {
                code: 120,
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignorePattern: 'require',
            },
        ],
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-spaces': 2,
        'no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
        'no-trailing-spaces': 2,
        'ascii/valid-name': 2,
        'no-unneeded-ternary': 2,
        'no-nested-ternary': 2,
        'object-curly-spacing': [2, 'always'],
        'one-var-declaration-per-line': [2, 'initializations'],
        'one-var': [2, { let: 'never', const: 'never' }],
        'operator-linebreak': [2, 'after'],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'as-needed', { numbers: true }],
        quotes: [2, 'single', { avoidEscape: true }],
        'space-before-blocks': [2, 'always'],
        'space-in-parens': 2,
        'no-console': [2, { allow: ['assert', 'error', 'warn'] }],
        'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'strict' }],
        'space-infix-ops': 2,
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'if', next: 'if' }],

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
        '@typescript-eslint/consistent-type-assertions': 2,
        '@typescript-eslint/no-empty-interface': 2,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-unused-vars': [
            2,
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                vars: 'all',
                varsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

        'import/no-useless-path-segments': [2],
        'import/no-anonymous-default-export': ['error', { allowCallExpression: false }],
        'import/first': [1],

        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Node.js builtins. You could also generate this regex if you use a `.js` config
                    // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
                    [
                        '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                    ],
                    // Parent imports. Put `..` last
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ],
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                camelcase: 'off',
                'no-console': 'off',
            },
        },
        {
            files: ['*.js'],
            rules: {
                'no-use-before-define': [2, { functions: true, classes: true, variables: true }],
                'no-undef': 2,
                'no-unused-vars': [
                    2,
                    {
                        args: 'after-used',
                        argsIgnorePattern: '^_',
                        ignoreRestSiblings: true,
                        vars: 'all',
                        varsIgnorePattern: '^_',
                    },
                ],
            },
        },
    ],
};
