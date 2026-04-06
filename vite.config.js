import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Production uses relative URLs (`./`) so JS/CSS load correctly on GitHub Pages at
 * https://<user>.github.io/<repo>/ without depending on the repo name in config.
 * Dev server still uses `/` (default).
 */
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? './' : '/',
  assetsInclude: ['**/*.JPG', '**/*.jpeg', '**/*.MOV'],
}))
