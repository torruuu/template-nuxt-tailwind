import prettierPlugin from 'eslint-plugin-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

export default withNuxt(
  {
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    files: ['*.vue', '**/*.vue', '*.js', '**/*.js', '*.ts', '**/*.ts'],
    rules: {
      'prettier/prettier': RULES.ERROR,
      'arrow-spacing': RULES.ERROR,
      'no-unused-vars': [RULES.ERROR, { args: 'all' }],
      'object-curly-spacing': [RULES.ERROR, 'always'],
      'array-callback-return': [RULES.OFF, { checkForEach: true }],
      'no-return-assign': RULES.OFF,
      'no-mixed-operators': RULES.OFF,
      'no-undef': RULES.OFF,

      'vue/html-indent': RULES.ERROR,
      'vue/multiline-html-element-content-newline': RULES.ERROR,
      'vue/first-attribute-linebreak': RULES.OFF,
      'vue/require-default-prop': RULES.OFF,
      'vue/singleline-html-element-content-newline': 0,
      'vue/component-name-in-template-casing': [RULES.ERROR, 'PascalCase'],
      'vue/html-quotes': [RULES.ERROR, 'double', { avoidEscape: true }],
      'vue/mustache-interpolation-spacing': [RULES.ERROR, 'always'],
      'vue/no-multi-spaces': [
        RULES.ERROR,
        {
          ignoreProperties: false,
        },
      ],
      'vue/no-spaces-around-equal-signs-in-attribute': [RULES.ERROR],
      'vue/v-on-style': [RULES.ERROR, 'shorthand'],
      'vue/v-bind-style': [RULES.ERROR, 'shorthand'],
      'vue/multi-word-component-names': RULES.OFF,
      'vue/no-setup-props-destructure': RULES.OFF,
      'vue/no-v-text-v-html-on-component': RULES.OFF,
      'vue/attributes-order': [
        RULES.ERROR,
        {
          alphabetical: true,
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            'UNIQUE',
            'SLOT',
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'ATTR_DYNAMIC',
            'ATTR_STATIC',
            'ATTR_SHORTHAND_BOOL',
            'EVENTS',
            'CONTENT',
          ],
        },
      ],
    },
  },
  {
    ignores: ['dist', 'node_modules', '.env', 'package.json', 'package-lock.json'],
  },
)
