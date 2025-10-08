import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],
  // build: {
  //   // smaller entry chunk and smarter splitting for heavy deps
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           // group three.js and react-three related packages
  //           if (id.includes('three') || id.includes('@react-three') || id.includes('maath')) {
  //             return 'vendor-three'
  //           }
  //           // group GSAP and motion related libs
  //           if (id.includes('gsap') || id.includes('@gsap') || id.includes('motion')) {
  //             return 'vendor-animation'
  //           }
  //           // group large UI/runtime libs like react and react-dom separately
  //           if (id.includes('react') || id.includes('react-dom')) {
  //             return 'vendor-react'
  //           }
  //           // group emailjs, cobe, tailwind-merge, etc.
  //           return 'vendor'
  //         }
  //       }
  //     }
  //   },
  //   // target modern browsers; adjust chunk size warnings
  //   chunkSizeWarningLimit: 1000
  // }
})
