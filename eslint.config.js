import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      'vue/multi-word-component-names': 'off', // Move rules here for scoped application
    },
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // Spread the essential Vue and TypeScript configs inside separate objects
  {
    ...pluginVue.configs['flat/essential'],
  },
  {
    ...vueTsEslintConfig(),
  },

  // Skip prettier formatting where necessary
  skipFormatting,
]
