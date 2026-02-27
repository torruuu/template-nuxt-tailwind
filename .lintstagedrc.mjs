export default {
  '**/*.{js,ts,vue}': 'eslint --fix',
  '**/*.{ts,vue}': () => 'vue-tsc --noEmit',
  '**/*.{css,vue}': 'stylelint --fix',
}
