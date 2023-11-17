import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
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
        "icon-": "var(--icon-)",
        
      },
    },
  },
  plugins: [],
};
export default config;
