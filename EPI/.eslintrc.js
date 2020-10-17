/**
 * Javascript and Typescript style checker configuration.
 *
 * @author alejandro.claro
 * @date   2020-10-17
 *
 * @copyright 2020 Alejandro Claro
 *
 * @license MIT
 */

const sourceCodeHeader = [
  '*',
  { 'pattern': ' \\* .+\\.' },
  ' *',
  { 'pattern': ' \\* @author .+' },
  { 'pattern': ' \\* @date   \\d{4}-\\d{2}-\\d{2}' },
  ' *',
  { 'pattern': ' \\* @copyright \\d{4} .+' },
  ' *',
  ' * @license MIT',
  ' '
];

const paddingLineConfiguration = [
  { 'blankLine': 'always', 'prev': 'multiline-block-like', 'next': '*' },
  { 'blankLine': 'always', 'prev': '*', 'next': 'multiline-block-like' },
  { 'blankLine': 'always', 'prev': 'multiline-expression', 'next': '*' },
  { 'blankLine': 'always', 'prev': 'let', 'next': '*' },
  { 'blankLine': 'any', 'prev': 'let', 'next': 'let' }
];

const magicNumberConfiguration = {
  'enforceConst': true,
  'ignore': [ 0, 1, -1 ]
};

const generalRules = {
  'semi': [ 'error', 'always' ],
  'array-bracket-newline': [ 'error', 'consistent' ],
  'array-bracket-spacing': [ 'error', 'always', { 'objectsInArrays': true, 'arraysInArrays': true } ],
  'arrow-body-style': [ 'error', 'as-needed', { 'requireReturnForObjectLiteral': true } ],
  'arrow-parens': [ 'error', 'always' ],
  'capitalized-comments': [ 'error', 'always' ],
  'complexity': [ 'error', { 'max': 10 } ],
  'default-case': [ 'error' ],
  'dot-notation': [ 'error' ],
  'func-style': [ 'error', 'declaration', { 'allowArrowFunctions': true } ],
  'function-paren-newline': [ 'error', 'multiline' ],
  'implicit-arrow-linebreak': [ 'error', 'beside' ],
  'max-depth': [ 'error', { 'max': 3 } ],
  'max-len': [ 'error', { 'code': 120, 'tabWidth': 2, 'ignoreUrls': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true, 'ignoreRegExpLiterals': true } ],
  'max-lines-per-function': [ 'error', { 'max': 20, 'skipComments': true } ],
  'max-lines': [ 'error', { 'max': 500, 'skipComments': true } ],
  'max-nested-callbacks': [ 'error', { 'max': 2 } ],
  'no-alert': [ 'error' ],
  'no-confusing-arrow': [ 'error' ],
  'no-console': [ 'error' ],
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-else-return': [ 'error' ],
  'no-lonely-if': [ 'error' ],
  'no-extra-semi': [ 'error' ],
  'no-loop-func': [ 'error' ],
  'no-multi-assign': [ 'error' ],
  'no-param-reassign': [ 'error' ],
  'no-plusplus': [ 'error', { 'allowForLoopAfterthoughts': true } ],
  'no-useless-concat': [ 'error' ],
  'no-return-await': [ 'error' ],
  'object-shorthand': [ 'error', 'methods', { 'avoidQuotes': true } ],
  'padding-line-between-statements': [ 'error', ...paddingLineConfiguration ],
  'prefer-arrow-callback': [ 'error' ],
  'prefer-template': [ 'error' ],
  'prefer-spread': [ 'error' ],
  'quote-props': [ 'error', 'always' ],
  'semi-spacing': [ 'error', { 'before': false, 'after': true } ],
  'space-before-function-paren': [ 'error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' } ],
  'switch-colon-spacing': [ 'error', { 'after': true, 'before': false } ],
  'operator-linebreak': [ 'error', 'before', { 'overrides': { '=': 'none' } } ],
  'multiline-ternary': [ 'error', 'never' ],
  'no-magic-numbers': [ 'error', magicNumberConfiguration ]
};

const importOrderConfiguration = {
  'newlines-between': 'always',
  'pathGroups': [
    {
      'pattern': '@src/**',
      'group': 'internal',
      'position': 'before'
    },
    {
      'pattern': '@test/**',
      'group': 'unknown'
    }
  ],
  'pathGroupsExcludedImportTypes': [ 'builtin' ],
  'groups': [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index' ]
};

const importRules = {
  'import/no-mutable-exports': [ 'error' ],
  'import/newline-after-import': [ 'error', { 'count': 1 } ],
  'import/order': [ 'error', importOrderConfiguration ]
};

const codeSmellRules = {
  'sonarjs/no-duplicate-string': 'off'
};

const jsdocRequireConfiguration = {
  'require': {
    'ArrowFunctionExpression': false,
    'ClassDeclaration': true,
    'FunctionDeclaration': true,
    'FunctionExpression': false,
    'MethodDefinition': true
  }
};

const jsDocRules = {
  'jsdoc/check-indentation': [ 'error' ],
  'jsdoc/check-tag-names': [ 'error', { 'definedTags': [ 'date', 'remarks' ] } ],
  'jsdoc/require-description-complete-sentence': [ 'error' ],
  'jsdoc/require-hyphen-before-param-description': [ 'error', 'never' ],
  'jsdoc/require-returns': [ 'error', { 'forceReturnsWithAsync': true } ],
  'jsdoc/require-jsdoc': [ 'error', jsdocRequireConfiguration ]
};

const tsdocRequireConfiguration = {
  'contexts': [
    'TSInterfaceDeclaration',
    'TSTypeAliasDeclaration',
    'TSEnumDeclaration'
  ],
  'require': {
    'ArrowFunctionExpression': false,
    'ClassDeclaration': true,
    'FunctionDeclaration': true,
    'FunctionExpression': false,
    'MethodDefinition': true
  }
};

const memberOrderingConfiguration = {
  'default':
  [
    'signature',
    'public-static-field',
    'public-decorated-field',
    'public-instance-field',
    'private-static-field',
    'private-decorated-field',
    'private-instance-field',
    'public-constructor',
    'protected-constructor',
    'private-constructor',
    'public-static-method',
    'public-abstract-method',
    'public-instance-method',
    'protected-static-method',
    'protected-abstract-method',
    'protected-instance-method',
    'private-static-method',
    'private-instance-method'
  ]
};

const memberDelimiterStyleConfiguration = {
  'multiline': {
    'delimiter': 'semi',
    'requireLast': true
  },
  'singleline': {
    'delimiter': 'semi',
    'requireLast': true
  }
};

const namingConfiguration = [
  {
    'selector': 'default',
    'format': [ 'camelCase' ]
  },
  {
    'selector': 'typeLike',
    'format': [ 'PascalCase' ]
  },
  {
    'selector': 'variable',
    'format': [ 'camelCase', 'UPPER_CASE' ]
  },
  {
    'selector': 'variable',
    'types': [ 'boolean' ],
    'format': [ 'PascalCase' ],
    'prefix': [ 'is', 'should', 'has', 'can', 'did', 'will', 'result' ]
  },
  {
    'selector': 'property',
    'format': [ 'camelCase', 'PascalCase' ]
  },
  {
    'selector': 'property',
    'modifiers': [ 'static', 'readonly' ],
    'format': [ 'camelCase', 'PascalCase', 'UPPER_CASE' ]
  },
  {
    'selector': 'method',
    'format': [ 'camelCase' ],
    'leadingUnderscore': 'allow'
  },
  {
    'selector': 'parameter',
    'format': [ 'camelCase' ],
    'leadingUnderscore': 'allow'
  },
  {
    'selector': 'enumMember',
    'format': [ 'PascalCase' ]
  }
];

const typescriptMagicNumberConfiguration = {
  'enforceConst': true,
  'ignoreEnums': true,
  'ignoreNumericLiteralTypes': true,
  'ignoreReadonlyClassProperties': true,
  'ignore': [ 0, 1, -1 ]
};

const typescriptRegularRules = {
  'semi': 'off',
  'no-useless-constructor': 'off',
  '@typescript-eslint/semi': [ 'error', 'always' ],
  '@typescript-eslint/no-useless-constructor': [ 'error' ],
  '@typescript-eslint/explicit-member-accessibility': [ 'error' ],
  '@typescript-eslint/member-delimiter-style': [ 'error', memberDelimiterStyleConfiguration ],
  '@typescript-eslint/member-ordering': [ 'error', memberOrderingConfiguration ],
  '@typescript-eslint/naming-convention': [ 'error', ...namingConfiguration ],
  '@typescript-eslint/no-magic-numbers': [ 'error', typescriptMagicNumberConfiguration ]
};

const typescriptTypeCheckingRules = {
  '@typescript-eslint/prefer-nullish-coalescing': [ 'error' ],
  '@typescript-eslint/prefer-optional-chain': [ 'error' ],
  '@typescript-eslint/no-non-null-asserted-optional-chain': [ 'error' ],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': [ 'error' ],
  '@typescript-eslint/no-floating-promises': [ 'error' ],
  '@typescript-eslint/require-await': 'off',
  '@typescript-eslint/promise-function-async': [ 'error' ],
  '@typescript-eslint/strict-boolean-expressions': [ 'error', { 'allowString': false, 'allowNumber': false } ]
};

const unitTestRules = {
  'jest/consistent-test-it': [ 'error', { 'fn': 'test' } ],
  'jest/no-jest-import': [ 'error' ],
  'jest/prefer-strict-equal': [ 'error' ],
  'jest/require-top-level-describe': [ 'error' ]
};

const jsConfig = {
  'reportUnusedDisableDirectives': true,
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
    'jest/globals': true
  },
  'globals': {
    'globalThis': 'readonly'
  },
  'settings': {
    'import/resolver': {
      'alias': {
        'map': [
          [ '@src', './src' ],
          [ '@tests', './tests' ]
        ],
        'extensions': [ '.ts', '.tsx', '.js', '.jsx', '.vue' ]
      }
    }
  },
  'plugins': [
    'header',
    'jsdoc',
    'sonarjs'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended',
    'standard'
  ],
  'rules': {
    ...jsDocRules,
    ...codeSmellRules,
    ...importRules,
    ...generalRules,
    'header/header': [ 'error', 'block', sourceCodeHeader, { 'lineEndings': 'unix' } ]
  }
};

const tsConfig = {
  ...jsConfig,
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'project': [ './tsconfig.json' ],
    'tsconfigRootDir': '.',
    'extraFileExtensions': [ '.vue' ]
  },
  'settings': {
    ...jsConfig.settings,
    'jsdoc': {
      'mode': 'typescript'
    }
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  'rules': {
    ...jsConfig.rules,
    ...typescriptRegularRules,
    ...typescriptTypeCheckingRules,
    'no-magic-numbers': 'off',
    'jsdoc/require-jsdoc': [ 'error', tsdocRequireConfiguration ],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/no-undefined-types': 'off'
  }
};

const jestConfig = {
  ...tsConfig,
  'plugins': [
    ...tsConfig.plugins,
    'jest'
  ],
  'rules': {
    ...tsConfig.rules,
    ...unitTestRules,
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'no-dupe-class-members': 'off',
    'jsdoc/require-jsdoc': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/unbound-method': 'off'
  }
};

const jsonConfig = {
  'plugins': [
    'json'
  ],
  'extends': [
    'plugin:json/recommended'
  ],
  'rules': {
  }
};

module.exports = {
  'ignorePatterns': [],
  'overrides': [
    {
      'files': [ '*.json' ],
      ...jsonConfig
    },
    {
      'files': [ '*.js' ],
      ...jsConfig
    },
    {
      'files': [ '*.ts' ],
      ...tsConfig
    },
    {
      'files': [ '*.test.ts' ],
      ...jestConfig
    }
  ]
};
