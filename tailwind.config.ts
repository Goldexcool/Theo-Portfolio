import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-white": "var(--main-color)",
        "main-gray": "var(--main-gray)",
        "main-gray-light": "var(--main-gray-light)",
        "main-gray-lighter": "var(--main-gray-lighter)",
        "main-gray-light--": "var(--main-gray-light--)",
        "main-black": "var(--main-black)",
        "main-darker": "var(--main-darker)",
        "main-black-": "var(--main-black-)",
        "main-blue": "var(--main-blue)",
      },
    },
  },
  plugins: [],
}
export default config
