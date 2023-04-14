import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  plugins: [
    react({
      babel: {
        "plugins": [
          [
            "formatjs",
            {
              "idInterpolationPattern": "[sha512:contenthash:base64:6]",
              "ast": true
            }
          ]
        ]
      }
    } )
  ],
})
